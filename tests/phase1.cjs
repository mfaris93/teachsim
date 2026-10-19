// Development-only browser checks. No dependencies are loaded by the application.
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const fs = require('node:fs/promises');
const vm = require('node:vm');
const base = process.env.TEACHSIM_TEST_URL || 'http://127.0.0.1:8010';
let browser;
before(async () => { browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', args: ['--no-sandbox'] }); });
after(async () => { await browser?.close(); });
async function pageFor(t, options = {}, init) {
  const context = await browser.newContext({ acceptDownloads: true, ...options });
  t.after(() => context.close());
  if (init) await context.addInitScript(init);
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  t.after(() => assert.deepEqual(errors, [], 'no uncaught JavaScript errors'));
  await page.goto(base);
  return page;
}
async function seed(page) { return page.evaluate(() => window.TEACHLAB_SEED_SCENARIOS); }
async function openPublish(page) { await page.locator('#publish-panel').evaluate(e => e.open = true); }
async function download(page, id) {
  const event = page.waitForEvent('download');
  await page.click(id);
  return fs.readFile(await (await event).path(), 'utf8');
}
async function episode(page, scenario, pattern, experienced = false) {
  await page.click('#start');
  for (let i = 0; i < scenario.steps.length; i++) {
    assert.equal(await page.locator('#page-review').isVisible(), false, 'no feedback before episode ends');
    assert.equal(await page.locator('#count-badge').innerText(), `${i + 1} / ${scenario.steps.length}`);
    if (experienced) { await page.fill('#teacher-words', `Direction ${i + 1}`); await page.locator('#say-form button').click(); }
    else await page.click('#give-guided-direction');
    await page.click('#do-wait');
    if (pattern.needs[i] >= 1) await page.click('#point-target');
    if (pattern.needs[i] === 2) await page.click('#do-model');
    await page.click('#do-ack');
    await page.click('#advance');
  }
  assert.equal(await page.locator('#page-review').isVisible(), true);
  assert.equal(await page.locator('#step-feedback details').count(), scenario.steps.length);
  assert.match(await page.locator('#review-stats').innerText(), new RegExp(`${scenario.steps.length} / ${scenario.steps.length}`));
}
test('all built-in scenarios: both pathways, deterministic same/next variation, delayed feedback', async t => {
  const page = await pageFor(t);
  const scenarios = await seed(page);
  assert.equal(scenarios.length, 8);
  for (const scenario of scenarios) {
    for (const experienced of [false, true]) {
      await page.selectOption('#scenario-picker', scenario.id);
      await page.check(`[name="practice-pathway"][value="${experienced ? 'experienced' : 'new'}"]`);
      const index = experienced && scenario.patterns.length > 1 ? 1 : 0;
      await episode(page, scenario, scenario.patterns[index], experienced);
      const first = await page.locator('#step-feedback').innerText();
      await page.click('#retry-same');
      await episode(page, scenario, scenario.patterns[index], experienced);
      assert.equal(await page.locator('#step-feedback').innerText(), first, 'repeat is deterministic');
      if (experienced && scenario.patterns.length > 2) {
        await page.click('#retry-next');
        assert.match(await page.locator('#pattern-brief').innerText(), /variation 2\//);
        await episode(page, scenario, scenario.patterns[2], true);
      }
      await page.click('#back-brief');
    }
  }
});
test('brief dialog preserves step, learner response, direction and keyboard focus', async t => {
  const page = await pageFor(t);
  await page.click('#start');await page.click('#give-guided-direction');await page.click('#do-wait');
  const before = await page.locator('#student-response').innerText();
  await page.click('#review-brief');assert.equal(await page.locator('#brief-dialog').isVisible(), true);
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#student-response').innerText(), before);
  assert.equal(await page.locator('#give-guided-direction').isDisabled(), true);
  assert.equal(await page.evaluate(() => document.activeElement.id), 'review-brief');
  assert.equal(await page.locator('#page-review').isVisible(), false);
  page.once('dialog', d => d.dismiss());await page.click('#nav-editor');
  assert.equal(await page.locator('#page-practice').isVisible(), true);
});
test('incomplete actions produce feedback only at end; typed words are recorded literally', async t => {
  const page = await pageFor(t);
  await page.check('[value="experienced"]');await page.click('#start');
  await page.fill('#teacher-words', '<b>Words are not semantically assessed</b>');await page.locator('#say-form button').click();
  const count = Number((await page.locator('#count-badge').innerText()).split('/')[1]);
  for (let i=0;i<count;i++) { assert.equal(await page.locator('#page-review').isVisible(), false);await page.click('#advance'); }
  assert.match(await page.locator('#step-feedback').innerText(), /Words are not semantically assessed/);
  assert.equal(await page.locator('#step-feedback b').count(), 0);
  assert.match(await page.locator('#step-feedback').innerText(), /before this step was completed/);
});
test('editor preserves authored response text and exports both formats; import round trip', async t => {
  const page = await pageFor(t);await page.click('#nav-editor');
  await page.locator('#advanced-panel').evaluate(e => e.open = true);
  await page.fill('[data-step="0"][data-step-key="direction"]', 'Specialist reviewed direction');
  await page.fill('[data-step="0"][data-step-key="waiting"]', 'Custom waiting response');
  await page.fill('[data-quick-step="0"][data-quick-step-key="target"]', 'updated object');
  await page.locator('#quick-title-input').focus();
  assert.equal(await page.locator('[data-step="0"][data-step-key="direction"]').inputValue(), 'Specialist reviewed direction');
  assert.equal(await page.locator('[data-step="0"][data-step-key="waiting"]').inputValue(), 'Custom waiting response');
  await page.fill('#quick-title-input', 'Custom trial scenario');await page.click('#save-draft');await page.reload();await page.click('#nav-editor');
  assert.equal(await page.locator('#quick-title-input').inputValue(), 'Custom trial scenario');await openPublish(page);
  const json = await download(page, '#export-json');assert.equal(JSON.parse(json).scenarios[0].title, 'Custom trial scenario');
  const js = await download(page, '#export-github');const sandbox = {window:{}};vm.runInNewContext(js,sandbox);assert.equal(sandbox.window.TEACHLAB_SEED_SCENARIOS[0].title,'Custom trial scenario');
  page.once('dialog', d=>d.accept());await page.locator('#import-json').setInputFiles({name:'backup.json',mimeType:'application/json',buffer:Buffer.from(json)});
  await page.waitForFunction(()=>document.querySelector('#toast').textContent.includes('Imported library saved'));
  await page.reload();await page.click('#nav-editor');assert.equal(await page.locator('#quick-title-input').inputValue(), 'Custom trial scenario');
});
test('failed import storage write leaves current library intact and reports failure', async t => {
  const page = await pageFor(t);const library = await seed(page);library[0].title='Must not replace';
  await page.click('#nav-editor');await openPublish(page);
  await page.evaluate(()=>{Storage.prototype.setItem=()=>{throw new DOMException('Storage full','QuotaExceededError')};});
  page.once('dialog',d=>d.accept());await page.locator('#import-json').setInputFiles({name:'backup.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(library))});
  await page.waitForFunction(()=>document.querySelector('#toast').textContent.startsWith('Import failed:'));
  assert.notEqual(await page.locator('#quick-title-input').inputValue(),'Must not replace');
});
test('failed save blocks preview and retains unsaved edits', async t => {
  const page = await pageFor(t);await page.click('#nav-editor');await page.fill('#quick-title-input','Unsaved work');
  await page.evaluate(()=>{Storage.prototype.setItem=()=>{throw Error('Storage unavailable')};});
  await page.click('#preview-scenario');assert.equal(await page.locator('#page-editor').isVisible(),true);
  assert.match(await page.locator('#toast').innerText(),/Cannot save/);assert.match(await page.locator('#draft-status').innerText(),/Unsaved/);
});
test('legacy drafts load; restoring defaults does not resurrect them after reload', async t => {
  const page = await pageFor(t);const library=await seed(page);library[0].title='Legacy custom title';
  await page.evaluate(lib=>localStorage.setItem('teachlab_v3_drafts',JSON.stringify(lib)),library);await page.reload();
  assert.match(await page.locator('#brief-title').innerText(),/Legacy/);await page.click('#nav-editor');await openPublish(page);
  page.once('dialog',d=>d.accept());await page.click('#restore-published');await page.reload();
  assert.notEqual(await page.locator('#brief-title').innerText(),'Legacy custom title');
});
test('invalid variation import is rejected without changing drafts; incomplete JSON backup remains available', async t => {
  const page = await pageFor(t);const library=await seed(page);library[0].patterns[0].needs[0]=1.5;
  await page.click('#nav-editor');await openPublish(page);
  await page.locator('#import-json').setInputFiles({name:'bad.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(library))});
  await page.waitForFunction(()=>document.querySelector('#toast').textContent.includes('support value'));
  await page.fill('#quick-title-input','');const json=await download(page,'#export-json');assert.equal(JSON.parse(json).scenarios[0].title,'');
  await page.click('#export-github');assert.match(await page.locator('#toast').innerText(),/Complete these fields/);
});
test('adding built-ins preserves saved custom scenarios; single-pattern scenario supports both pathways', async t => {
  const page=await pageFor(t);const library=await seed(page);const custom=library[0];custom.id='trial-custom';custom.title='Preserve me';custom.patterns=custom.patterns.slice(0,1);
  await page.evaluate(lib=>localStorage.setItem('teachlab_v4_drafts',JSON.stringify(lib)),[custom]);await page.reload();
  await page.check('[value="experienced"]');await episode(page,custom,custom.patterns[0],true);assert.equal(await page.locator('#retry-next').isDisabled(),true);
  await page.click('#nav-editor');await page.click('#add-builtins');assert.equal(await page.locator('#scenario-list button').count(),9);
  await page.reload();await page.selectOption('#scenario-picker','trial-custom');assert.equal(await page.locator('#brief-title').innerText(),'Preserve me');
});

test('discarding edits preserves a loaded legacy custom library', async t => {
  const page=await pageFor(t);const library=await seed(page);library[0].id='legacy-only';library[0].title='Legacy work';
  await page.evaluate(lib=>localStorage.setItem('teachlab_v3_drafts',JSON.stringify(lib)),library);await page.reload();await page.click('#nav-editor');
  await page.fill('#quick-title-input','Discard this edit');page.once('dialog',d=>d.accept());await page.click('#nav-teacher');
  assert.equal(await page.locator('#brief-title').innerText(),'Legacy work');
});
test('template creation, generated text updates and step reorder keep support values paired', async t => {
  const page=await pageFor(t);await page.click('#nav-editor');await page.click('#create-scenario');await page.locator('[data-template]').first().click();
  await page.click('#quick-add-step');let fields=page.locator('[data-quick-step-key="name"]');const last=await fields.count()-1;
  await fields.last().fill('Pick up cup');await page.locator('#quick-title-input').focus();
  await page.locator(`[data-quick-step="${last}"][data-quick-step-key="target"]`).fill('cup');await page.locator('#quick-title-input').focus();
  await page.locator('#advanced-panel').evaluate(e=>e.open=true);
  assert.equal(await page.locator(`[data-step="${last}"][data-step-key="direction"]`).inputValue(),'Please pick up cup.');
  await page.locator(`[data-pattern="0"][data-need="${last}"]`).selectOption('2');
  await page.locator(`[data-quick-move="up"][data-i="${last}"]`).click();await page.click('#save-draft');await openPublish(page);
  const lib=JSON.parse(await download(page,'#export-json')).scenarios;const custom=lib[lib.length-1];
  assert.equal(custom.steps[last-1].name,'Pick up cup');assert.equal(custom.patterns[0].needs[last-1],2);
});


test('quick step edits retain natural keyboard Tab order', async t => {
  const page=await pageFor(t);await page.click('#nav-editor');
  await page.fill('[data-quick-step="0"][data-quick-step-key="name"]','Keyboard edited step');await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(()=>document.activeElement.dataset.quickStepKey),'target');
  await page.keyboard.type('New target');await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(()=>document.activeElement.dataset.quickStepKey),'iconMode');
});

for(const width of [320,375,768,1280]) test(`responsive layout and focus at ${width}px`, async t => {
  const page=await pageFor(t,{viewport:{width,height:900}});
  async function fits(){assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth), 'no horizontal page overflow');}
  await fits();await page.click('#start');await fits();assert.equal(await page.evaluate(()=>document.activeElement.tagName),'H1');
  await page.click('#review-brief');await fits();await page.click('#close-brief');
  const count=Number((await page.locator('#count-badge').innerText()).split('/')[1]);for(let i=0;i<count;i++)await page.click('#advance');await fits();
  await page.click('#nav-editor');await fits();await page.locator('#advanced-panel').evaluate(e=>e.open=true);await fits();
});
