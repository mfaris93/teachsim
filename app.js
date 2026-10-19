'use strict';
/* TeachSim V6.3: local-only, deterministic educational demonstration.
   NO network calls, AI model, PII processing, or assessment of real teaching fidelity. */
(() => {
  const LEGACY_STORAGE_KEY='teachlab_v3_drafts';
  const STORAGE_KEY='teachlab_v4_drafts'; // intentionally preserved so users keep prior browser drafts
  const TEMPLATES=Array.isArray(window.TEACHLAB_TEMPLATES)?cloneSafe(window.TEACHLAB_TEMPLATES):[];
  function cloneSafe(obj){return JSON.parse(JSON.stringify(obj));}
  const VISUALS=[['🧼','Soap'],['🤲','Hands'],['🚰','Tap / rinse'],['🧻','Towel'],['🎒','School bag'],['📘','Book'],['📁','Folder'],['🧴','Water bottle / dispenser'],['✏️','Pencil'],['🖊️','Pen'],['📦','Box / parcel'],['📋','Checklist'],['🏷️','Label'],['🥪','Food'],['🍽️','Plate'],['🪥','Toothbrush'],['👟','Shoes'],['👕','Clothes'],['🗑️','Bin'],['🧽','Cleaning cloth'],['🧺','Basket / linen'],['🏬','Retail'],['🔎','Look / match'],['✅','Check'],['🥛','Cup'],['🗄️','Shelf'],['📏','Alignment'],['🚶','Move / return'],['🧩','Other']];
  // This is a predictable keyword-based icon suggestion, NOT AI or generated artwork.
  function suggestVisual(step){
    const desc=((step.name||'')+' '+(step.target||'')).toLowerCase();
    const matches=[
      [/wipe|cleaning cloth|clean cloth|surface/, '🧽'],
      [/fold|linen|towel stack|used.cloth|basket/, '🧺'],
      [/shelf|restock|display/, '🏬'],
      [/check|inspect|finished/, '✅'],
      [/soap|wash hands|sanitis/, '🧼'],
      [/rub hands|scrub|lather|soapy hands/, '🤲'],
      [/rinse|tap|faucet|water flow/, '🚰'],
      [/towel|dry hand|wipe hands/, '🧻'],
      [/folder|file into|filing/, '📁'],
      [/water bottle|drink bottle|bottle/, '🧴'],
      [/textbook|reading book|book|workbook/, '📘'],
      [/pencil|eraser|stationery|pencil case/, '✏️'],
      [/pen|write|writing/, '🖊️'],
      [/zip|school bag|backpack|bag/, '🎒'],
      [/label|sticker|barcode/, '🏷️'],
      [/checklist|order slip|list/, '📋'],
      [/pack|parcel|carton|box|lid|order/, '📦'],
      [/sandwich|food|snack|bread/, '🥪'],
      [/dish|plate|cutlery|spoon|fork/, '🍽️'],
      [/brush teeth|toothpaste|toothbrush/, '🪥'],
      [/shoe|laces|socks/, '👟'],
      [/shirt|cloth|uniform|laundry/, '👕'],
      [/trash|rubbish|bin|discard/, '🗑️']
    ];
    const match=matches.find(([rule])=>rule.test(desc));
    return match?match[1]:'🧩';
  }
  const ACTION_LABELS={say:'Said',wait:'Wait & observe',gesture:'Pointed to object',model:'Modelled action',ack:'Acknowledged',next:'Advanced'};
  const FEEDBACK={
    missingDirection:'No task direction was entered before the response opportunity. The demonstration protocol begins with one spoken direction.',
    multipleDirections:'More than one direction was entered within this step. This demo specifies a single initial direction.',
    lateDirection:'A direction was entered after the initial response opportunity.',
    earlyPrompt:'A prompt was given before the planned initial response opportunity.',
    skipGesture:'Modelling was used without the gestural cue specified in this demonstration protocol.',
    extraPrompt:'An additional teaching prompt or direction was delivered after the student completed this step.',
    repeatedWait:'The response interval was repeated rather than advancing to the next specified prompt.',
    repeatedGesture:'The same gestural cue was repeated without advancing to modelling.',
    earlyAck:'Completion was acknowledged before the student completed the step.',
    repeatedAck:'Completion was acknowledged more than once.',
    missedAck:'Completion was not acknowledged before advancing.',
    incomplete:'The episode advanced before this step was completed.'
  };
  const CONTENT_DEFAULT={
    model:'Trainer model (illustrative): Present a single clear direction. Allow the response opportunity. Provide the prescribed gestural cue only when needed, then model if that does not lead to a response. Acknowledge completion. Discuss how this would need adaptation for a real learner.',
    reflectNew:'What learner cue should you observe before moving from waiting to a gesture or demonstration?',
    reflectExperienced:'Where could you have avoided unnecessary prompts, and how would you respond if the next learner opportunity required different support?',
    alignedNew:'Your selected action order matched the provisional sequence. This does not evaluate the wording or delivery of your direction.',
    alignedExperienced:'The selected action sequence matched the provisional procedure. Spoken words and actual prompt delivery were not assessed.',
    messages:FEEDBACK
  };
  const FEEDBACK_LABELS={missingDirection:'Missing initial direction',multipleDirections:'Repeated directions',lateDirection:'Late direction',earlyPrompt:'Early prompt',skipGesture:'Skipped gestural cue',extraPrompt:'Extra prompt after completion',repeatedWait:'Repeated waiting',repeatedGesture:'Repeated gesture',earlyAck:'Early acknowledgement',repeatedAck:'Repeated acknowledgement',missedAck:'Missing acknowledgement',incomplete:'Incomplete step'};
  function schemaContent(obj){obj=obj&&typeof obj==='object'&&!Array.isArray(obj)?obj:{};
    const messages={};for(const key of Object.keys(FEEDBACK))messages[key]=fieldString(obj.messages?.[key]||FEEDBACK[key],700);
    const out={messages};for(const key of ['model','reflectNew','reflectExperienced','alignedNew','alignedExperienced'])out[key]=fieldString(obj[key]||CONTENT_DEFAULT[key],1600);
    return out;
  }
  const SEED=JSON.parse(JSON.stringify(window.TEACHLAB_SEED_SCENARIOS||[]));
  const $=id=>document.getElementById(id);
  const clone=x=>JSON.parse(JSON.stringify(x));
  const escapeHTML=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const slug=()=>`scenario-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`;
  const fieldString=(v,lim=1400)=>typeof v==='string'?v.slice(0,lim):'';
  const limit=(n,min,max)=>Math.max(min,Math.min(max,Number.isFinite(+n)?Number(n):min));
  let library=checkLibrary(SEED),selectedId=library[0]?.id,patternIndex=0,pathway='new',page='prepare',dirty=false;
  let stepIndex=0,records=[],practiceState=null,toastTimer=null,wizardStage='details';
  function toast(message,error=false){const t=$('toast');t.textContent=message;t.classList.remove('hidden');t.classList.toggle('error-toast',error);clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.add('hidden'),5300);}
  function schemaStep(item,index){if(!item||typeof item!=='object'||Array.isArray(item))throw Error(`Step ${index+1} must be an object.`);return {
    id:fieldString(item.id||`step-${index+1}`,85),name:fieldString(item.name,100),icon:fieldString(item.icon||'🧩',16),iconMode:item.iconMode==='manual'?'manual':'auto',target:fieldString(item.target,100),context:fieldString(item.context,650),direction:fieldString(item.direction,220),initial:fieldString(item.initial,650),waiting:fieldString(item.waiting,650),gestureNoResponse:fieldString(item.gestureNoResponse,650),independent:fieldString(item.independent,650),gestureDone:fieldString(item.gestureDone,650),modelDone:fieldString(item.modelDone,650)};
  }
  function normalise(input,strict=false){
    if(!input||typeof input!=='object'||Array.isArray(input))throw Error('Scenario is not an object.');
    if(!Array.isArray(input.steps)||input.steps.length<1||input.steps.length>16)throw Error('Each scenario needs 1–16 task steps.');
    if(!Array.isArray(input.patterns)||input.patterns.length<1||input.patterns.length>6)throw Error('Each scenario needs 1–6 response patterns.');
    const steps=input.steps.map(schemaStep);
    if(strict)for(const [i,p] of input.patterns.entries()){
      if(!p||!Array.isArray(p.needs)||p.needs.length!==steps.length||p.needs.some(n=>!Number.isInteger(n)||n<0||n>2))throw Error(`Variation ${i+1} needs one support value (0, 1 or 2) per task step.`);
    }
    const patterns=input.patterns.map((p,i)=>({id:fieldString(p?.id||`P${i+1}`,35),name:fieldString(p?.name||`Variation ${i+1}`,80),needs:steps.map((_,j)=>limit(p?.needs?.[j],0,2))}));
    return {id:fieldString(input.id||slug(),90),title:fieldString(input.title,100),domain:fieldString(input.domain,80),learnerName:fieldString(input.learnerName,65),learnerProfile:fieldString(input.learnerProfile,1200),objective:fieldString(input.objective,800),procedure:fieldString(input.procedure,1400),steps,patterns,content:schemaContent(input.content)};
  }
  function checkLibrary(lib,strict=false){if(!Array.isArray(lib)||lib.length<1||lib.length>25)throw Error('A library must contain 1–25 scenarios.');let ids=new Set();return lib.map(x=>{let s=normalise(x,strict);if(!s.id||ids.has(s.id))throw Error('Each scenario needs a unique ID.');ids.add(s.id);return s;});}
  function validate(s){let errs=[];for(const [field,label] of [['title','scenario title'],['learnerName','learner name'],['learnerProfile','learner profile'],['objective','learning objective'],['procedure','instructional procedure']])if(!s[field]?.trim())errs.push(label);
    for(let i=0;i<s.steps.length;i++){const st=s.steps[i];for(const f of ['name','target','context','initial','waiting','gestureNoResponse','independent','gestureDone','modelDone'])if(!st[f]?.trim())errs.push(`step ${i+1}: ${f}`);}
    for(let i=0;i<s.patterns.length;i++)if(!s.patterns[i].name?.trim())errs.push(`variation ${i+1}: name`);
    return errs;}
  function validateAll(){const bad=library.flatMap(s=>validate(s).map(x=>`${s.title||'Untitled'}: ${x}`));if(bad.length)throw Error(`Complete these fields first: ${bad.slice(0,4).join('; ')}${bad.length>4?'…':''}`);}
  try{const raw=localStorage.getItem(STORAGE_KEY)||localStorage.getItem(LEGACY_STORAGE_KEY);if(raw){library=checkLibrary(JSON.parse(raw));selectedId=library[0].id;}}catch(e){library=checkLibrary(SEED);selectedId=library[0]?.id;}
  let savedLibrary=clone(library);
  const current=()=>library.find(s=>s.id===selectedId)||library[0];
  // V6: one authored task and procedure, two adult-learner pathways.
  // Pattern 0 is predictable rehearsal (New); patterns 1+ are varied rehearsal
  // (Experienced). For user-created scenarios with only one pattern, both share it.
  function indicesForPath(s=current()){
    if(!s?.patterns?.length)return [];
    if(pathway==='new'||s.patterns.length===1)return [0];
    return s.patterns.slice(1).map((_,i)=>i+1);
  }
  function ensurePattern(){const available=indicesForPath();if(!available.includes(patternIndex))patternIndex=available[0]??0;}
  function setPathway(value){if(value!=='new'&&value!=='experienced')return;pathway=value;patternIndex=indicesForPath()[0]??0;renderPrepare();}

  function persistLibrary(candidate){const checked=checkLibrary(candidate);localStorage.setItem(STORAGE_KEY,JSON.stringify(checked));savedLibrary=clone(checked);return checked;}
  function saveDraft(){try{library=persistLibrary(library);dirty=false;updateDraftStatus();toast('Draft library saved in this browser. Export to publish on GitHub.');return true;}catch(e){toast(`Cannot save: ${e.message}`,true);return false;}}
  function updateDraftStatus(){if($('draft-status'))$('draft-status').textContent=dirty?'Unsaved edits on this device':'Local browser draft · not published to GitHub';}
  function markDirty(){dirty=true;updateDraftStatus();}
  function guardUnsaved(){return !dirty||confirm('You have unsaved edits in this scenario. Discard them?');}
  function selectScenario(id){if(!guardUnsaved())return; // editor inputs mutate the in-memory object; restore last saved draft if discarded
    if(dirty){library=clone(savedLibrary);dirty=false;}
    selectedId=library.some(s=>s.id===id)?id:library[0].id;patternIndex=0;wizardStage='details';renderEditor();renderPrepare();}
  function setPage(to){page=to;const editor=to==='editor';$('page-editor').classList.toggle('hidden',!editor);$('teacher-space').classList.toggle('hidden',editor);$('nav-editor').classList.toggle('active',editor);$('nav-teacher').classList.toggle('active',!editor);for(const name of ['prepare','practice','review']){$('page-'+name).classList.toggle('hidden',editor||name!==to);const div=document.querySelector(`[data-stage="${name}"]`);div.classList.toggle('active',!editor&&name===to);div.classList.toggle('done',!editor&&['prepare','practice','review'].indexOf(name)<['prepare','practice','review'].indexOf(to));}window.scrollTo({top:0,behavior:'instant'});const heading=$(editor?'page-editor':'page-'+to).querySelector('h1');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}}
  function leavePractice(){return page!=='practice'||confirm('Leave this unfinished teaching episode? Your practice actions will be lost.');}
  function goEditor(){if(!leavePractice())return;wizardStage='details';setPage('editor');renderEditor();}
  function goTeacher(){if(!leavePractice()||!guardUnsaved())return;if(dirty){library=clone(savedLibrary);dirty=false;}renderPrepare();setPage('prepare');}
  function renderPrepare(){const s=current();if(!s)return;ensurePattern();$('scenario-picker').innerHTML=library.map(x=>`<option value="${escapeHTML(x.id)}">${escapeHTML(x.title||'Untitled scenario')}</option>`).join('');$('scenario-picker').value=selectedId;
    document.querySelectorAll('input[name="practice-pathway"]').forEach(el=>{el.checked=el.value===pathway;});
    const choices=indicesForPath(),idx=choices.indexOf(patternIndex);
    $('pattern-brief').textContent=pathway==='new'?'Guided · predictable responses':`Independent · variation ${idx+1}/${choices.length}`;
    $('pathway-note').textContent='Choose based on the practice support you want, not years of experience. Both pathways follow the same instructional procedure.';
    $('pathway-explainer').textContent=pathway==='new'?'New · Guided rehearsal: click a prepared instruction for each step, then choose actions yourself. One predictable learner-response pattern; feedback after the episode.':'Experienced · Independent rehearsal: type your own direction and manage varied scripted responses. Words are logged but not assessed; feedback after the episode.';
    $('learner-initial').textContent=(s.learnerName[0]||'?').toUpperCase();$('brief-learner').textContent=s.learnerName;$('brief-profile').textContent=s.learnerProfile;$('brief-title').textContent=s.title;$('brief-objective').textContent=s.objective;$('brief-procedure').textContent=s.procedure;$('brief-steps').innerHTML=s.steps.map((st,i)=>`<span>${i+1} · ${escapeHTML(st.name)}</span>`).join('');$('brief-model-notes').textContent=s.content.model;$('prepare-error').classList.add('hidden');}
  function freshState(){const s=current().steps[stepIndex];return {said:0,waits:0,gestures:0,models:0,completed:false,acknowledged:false,completionType:null,response:s.initial,events:[],issues:[]};}
  function log(action,details,issues=[]){practiceState.events.push({action,details});for(const code of issues){if(!practiceState.issues.includes(code))practiceState.issues.push(code);}}
  function start(){const problems=validate(current());if(problems.length){$('prepare-error').textContent=`Scenario incomplete: ${problems.slice(0,4).join(', ')}`;$('prepare-error').classList.remove('hidden');return;}
    stepIndex=0;records=[];practiceState=freshState();$('teacher-words').value='';setPage('practice');renderPractice();}
  function support(){return current().patterns[patternIndex].needs[stepIndex];}
  function action(type,text=''){if(page!=='practice')return;const s=current().steps[stepIndex],st=practiceState,required=support(),flags=[];
    if(type==='say'){
      const message=text.trim();if(!message)return;
      if(st.completed)flags.push('extraPrompt');if(st.said)flags.push('multipleDirections');if(st.waits)flags.push('lateDirection');st.said++; // content deliberately NOT interpreted or automatically judged appropriate
      log('say',message,flags);st.response=st.completed?`${current().learnerName} has already completed this step.`:`${current().learnerName} attends to your instruction.`;
    }else if(type==='wait'){
      if(st.completed){flags.push('extraPrompt');st.response=`${current().learnerName} has already completed this step.`;}
      else{st.waits++;if(st.waits>1)flags.push('repeatedWait');if(!st.said)flags.push('missingDirection');if(required===0){st.completed=true;st.completionType='independently';st.response=s.independent;}else{st.response=s.waiting;}}
      log(type,'Simulated a response opportunity',flags);
    }else if(type==='gesture'){
      if(st.completed){flags.push('extraPrompt');st.response=`${current().learnerName} has already completed this step.`;}
      else{if(!st.waits)flags.push('earlyPrompt');if(!st.said)flags.push('missingDirection');if(st.gestures)flags.push('repeatedGesture');st.gestures++;if(required<=1){st.completed=true;st.completionType='after gestural cue';st.response=s.gestureDone;}else st.response=s.gestureNoResponse;}
      log(type,`Pointed at ${s.target}`,flags);
    }else if(type==='model'){
      if(st.completed){flags.push('extraPrompt');st.response=`${current().learnerName} has already completed this step.`;}
      else{if(!st.waits)flags.push('earlyPrompt');if(!st.gestures)flags.push('skipGesture');if(!st.said)flags.push('missingDirection');st.models++;st.completed=true;st.completionType='after modelling';st.response=s.modelDone;}
      log(type,`Demonstrated ${s.name.toLowerCase()}`,flags);
    }else if(type==='ack'){
      if(!st.completed)flags.push('earlyAck');else if(st.acknowledged)flags.push('repeatedAck');else st.acknowledged=true;
      if(st.completed)st.response=`${current().learnerName} has finished this step.`;
      log(type,'Acknowledged task step',flags);
    }
    renderPractice();
  }
  function renderPractice(){const s=current(),st=s.steps[stepIndex];
    const guided=pathway==='new';
    $('guided-instruction').classList.toggle('hidden',!guided);
    $('say-form').classList.toggle('hidden',guided);
    $('guided-words').textContent='“'+(st.direction||'Please complete this step.')+'”';
    $('give-guided-direction').disabled=practiceState.said>0;
    $('give-guided-direction').textContent=practiceState.said>0?'✓ Instruction delivered':'▸ Say this instruction to learner';
    $('practice-pathway-tag').textContent=guided?'New · Guided actions':'Experienced · Independent practice';
    $('practice-lead').textContent=guided?'Use the prepared direction, then choose how to respond. No correctness hints appear during practice.':'Type your own direction, then respond using the mouse controls. The content of typed directions is not scored.';$('step-count').textContent=`Instructional opportunity ${stepIndex+1}`;$('step-name').textContent=st.name;$('step-context').textContent=st.context;$('count-badge').textContent=`${stepIndex+1} / ${s.steps.length}`;
    $('progressbar').innerHTML=s.steps.map((_,i)=>`<i class="${i<stepIndex?'done':i===stepIndex?'now':''}"></i>`).join('');$('progressbar').setAttribute('aria-label',`Step ${stepIndex+1} of ${s.steps.length}`);$('scene-student').textContent=s.learnerName;$('scene-icon').textContent=st.icon||'🧩';$('scene-target-name').textContent=st.target;$('student-response').textContent=practiceState.response;$('advance').textContent=stepIndex===s.steps.length-1?'Finish and review →':'Next task step →';}
  function advance(){if(page!=='practice')return;const st=practiceState;if(!st.said&&!st.issues.includes('missingDirection'))st.issues.push('missingDirection');if(!st.completed)st.issues.push('incomplete');else if(!st.acknowledged)st.issues.push('missedAck');st.events.push({action:'next',details:'Advanced to next task step'});records.push({...clone(st),index:stepIndex,required:support()});if(stepIndex===current().steps.length-1){renderReview();setPage('review');}else{stepIndex++;practiceState=freshState();$('teacher-words').value='';renderPractice();}}
  function expectedSequence(need){return ['Say task direction','Wait',...(need>=1?['Point at object']:[]),...(need===2?['Model action']:[]),'Acknowledge completion','Advance'];}
  function renderReview(){const s=current();const aligned=records.filter(r=>r.completed&&r.issues.length===0).length;const complete=records.filter(r=>r.completed).length;$('overall').innerHTML=`<div class="label">${pathway==='new'?'New teacher':'Experienced teacher'} pathway · ${escapeHTML(s.patterns[patternIndex].name)}</div><h2>${aligned===records.length?'Your recorded action sequences aligned with the demonstration rules.':'Episode complete. Review the recorded action sequences.'}</h2><p>${escapeHTML(s.learnerName)} completed ${complete} of ${records.length} simulated steps. ${aligned} of ${records.length} selected action sequences matched the provisional procedure. These are not teacher competency measures.</p>`;
    $('review-stats').innerHTML=`<div class="stat"><strong>${aligned} / ${records.length}</strong><span>Sequences aligned</span></div><div class="stat"><strong>${records.length-aligned}</strong><span>Steps to review</span></div>`;
    $('review-reflection').textContent='Reflect with your trainer: '+(pathway==='new'?s.content.reflectNew:s.content.reflectExperienced);
    const variations=indicesForPath();$('retry-next').disabled=variations.length<2;
    $('retry-next').title=variations.length<2?'Only one response pattern is configured for this pathway.':'';
    $('retry-next').textContent=variations.length<2?'No other variation in this pathway':'Try next variation →';
    $('step-feedback').innerHTML=records.map((r,i)=>{const st=s.steps[r.index],good=r.completed&&r.issues.length===0;const observed=r.events.map(e=>e.action==='say'?`Said “${e.details}”`:(ACTION_LABELS[e.action]||e.action)).join(' → ');const concerns=r.issues.map(code=>s.content.messages[code]||FEEDBACK[code]||'Review this action.');return `<details class="step-review" ${(pathway==='new'||!good)?'open':''}><summary><span><strong>${i+1}. ${escapeHTML(st.name)}</strong><br><small class="subdued">${escapeHTML(r.completionType||'Not completed')}</small></span><span class="rowstatus ${good?'':'review'}">${good?'Aligned':'Review'}</span></summary><div class="review-detail"><div class="label">Your actions</div><div class="sequence">${escapeHTML(observed)}</div><div class="label" style="margin-top:10px">Expected procedure for this simulated response</div><div class="sequence">${escapeHTML(expectedSequence(r.required).join(' → '))}</div><div class="review-callout">${good?escapeHTML(pathway==='new'?s.content.alignedNew:s.content.alignedExperienced): `<strong>${pathway==='new'?'What to practise on retry:':'Action sequence to revisit:'}</strong><ul>${concerns.map(c=>`<li>${escapeHTML(c)}</li>`).join('')}</ul>`}</div></div></details>`;}).join('');}
  function returnBrief(next=false){const eligible=indicesForPath();if(next&&eligible.length>1)patternIndex=eligible[(eligible.indexOf(patternIndex)+1)%eligible.length];renderPrepare();setPage('prepare');}
  function refreshWizard(preserveQuickSteps=false){
    $('editor-toolbar').classList.toggle('hidden',wizardStage==='templates');
    for(const stage of ['templates','details','review']){
      const id=stage==='review'?'wizard-review-panel':`wizard-${stage}`;
      $(id).classList.toggle('hidden',wizardStage!==stage);
      const mark=document.querySelector(`[data-wizard-track="${stage}"]`);
      if(mark)mark.classList.toggle('active',wizardStage===stage);
    }
    $('advanced-panel').classList.toggle('hidden',wizardStage==='templates');
    $('publish-panel').classList.toggle('hidden',wizardStage==='templates');
    if(wizardStage!=='templates'){
      const s=current();
      for(const key of ['title','domain','learnerName','objective','learnerProfile','procedure']){
        const inp=document.querySelector(`[data-quick="${key}"]`);if(inp)inp.value=s[key]||'';
      }
      document.querySelectorAll('[data-content]').forEach(input=>{if(input.dataset.content in s.content)input.value=s.content[input.dataset.content]||'';});
      $('feedback-count').textContent=`${Object.keys(FEEDBACK).length} editable messages`;
      $('feedback-messages').innerHTML=Object.keys(FEEDBACK).map(key=>`<label class="wide-input">${escapeHTML(FEEDBACK_LABELS[key])}<textarea rows="2" maxlength="700" data-feedback-key="${escapeHTML(key)}">${escapeHTML(s.content.messages[key]||FEEDBACK[key])}</textarea></label>`).join('');
      $('quick-count').textContent=`(${s.steps.length} of 16)`;
      $('quick-add-step').disabled=s.steps.length>=16;
      if(!preserveQuickSteps)$('quick-steps').innerHTML=s.steps.map((st,i)=>`<div class="quick-step"><span class="quick-step-num">${i+1}</span><div class="quick-step-body"><div class="quick-step-toolbar"><div class="quick-step-label"><span class="quick-icon-preview" aria-label="Current visual: ${escapeHTML(st.icon||'🧩')}">${escapeHTML(st.icon||'🧩')}</span><strong>Step ${i+1}</strong></div><div class="quick-step-actions"><button type="button" class="btn" data-quick-move="up" data-i="${i}" ${i===0?'disabled':''} aria-label="Move step ${i+1} up">↑</button><button type="button" class="btn" data-quick-move="down" data-i="${i}" ${i===s.steps.length-1?'disabled':''} aria-label="Move step ${i+1} down">↓</button><button type="button" class="btn" data-quick-delete="${i}" ${s.steps.length===1?'disabled':''} aria-label="Remove step ${i+1}">Remove</button></div></div><div class="quick-step-fields"><label>What the student practises<input data-quick-step="${i}" data-quick-step-key="name" maxlength="100" value="${escapeHTML(st.name)}" placeholder="e.g. Put folder in bag"></label><label>Object to point at<input data-quick-step="${i}" data-quick-step-key="target" maxlength="100" value="${escapeHTML(st.target)}" placeholder="e.g. folder"></label><label>Step visual<select data-quick-step="${i}" data-quick-step-key="iconMode"><option value="auto" ${st.iconMode!=='manual'?'selected':''}>Auto · ${escapeHTML(suggestVisual(st))}</option>${VISUALS.map(([icon,label])=>`<option value="${escapeHTML(icon)}" ${st.iconMode==='manual'&&st.icon===icon?'selected':''}>${escapeHTML(icon)} ${escapeHTML(label)}</option>`).join('')}${st.iconMode==='manual'&&!VISUALS.some(([ic])=>ic===st.icon)?`<option selected value="${escapeHTML(st.icon)}">${escapeHTML(st.icon)} Custom</option>`:''}</select></label></div></div></div>`).join('');
      $('quick-summary').innerHTML=`<div class="summary-item"><div class="label">Scenario</div><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.objective)}</p></div><div class="summary-item"><div class="label">Fictional learner</div><p><strong>${escapeHTML(s.learnerName)}</strong> · ${escapeHTML(s.learnerProfile)}</p></div><div class="summary-item"><div class="label">Task steps</div><ol>${s.steps.map(st=>`<li>${escapeHTML(st.name)}</li>`).join('')}</ol></div><div class="summary-item"><div class="label">Controlled variations</div><div class="pattern-pills">${s.patterns.map((p,i)=>`<span>${i===0?'New':'Experienced'}: ${escapeHTML(p.name)} · ${p.needs.length} steps</span>`).join('')}</div></div><div class="summary-item"><div class="label">Instructional procedure</div><p>${escapeHTML(s.procedure)}</p></div><div class="summary-item"><div class="label">Trainer modelling notes</div><p>${escapeHTML(s.content.model)}</p></div>`;
    }
  }
  function openTemplatePicker(){if(!guardUnsaved())return;
    if(dirty){library=clone(savedLibrary);dirty=false;}
    wizardStage='templates';$('advanced-panel').open=false;$('publish-panel').open=false;
    renderEditor();
  }
  function makeFromTemplate(id){if(library.length>=25){toast('Maximum 25 scenarios in a library.',true);return;}
    const t=TEMPLATES.find(x=>x.id===id);if(!t){toast('Template is unavailable.',true);return;}
    const s=normalise(clone(t.scenario));s.id=slug();s.title=t.scenario.title+' (practice copy)';library.push(s);selectedId=s.id;patternIndex=0;wizardStage='details';markDirty();renderEditor();
    toast('Template loaded. Adjust only what you need.');
  }
  function refreshStepResponses(st){const v=st.name.trim().toLowerCase()||'complete this step',obj=st.target.trim()||'task material';
    st.direction=`Please ${v}.`;
    st.context=`The learner is ready for the next step. The ${obj} is available.`;
    st.initial=`The learner looks towards the ${obj}.`;
    st.waiting=`The learner has not started to ${v}.`;
    st.gestureNoResponse=`The learner notices your gesture towards the ${obj} but has not begun.`;
    st.independent=`The learner starts to ${v} independently.`;
    st.gestureDone=`The learner starts to ${v} after you point towards the ${obj}.`;
    st.modelDone=`The learner watches your demonstration and then starts to ${v}.`;
  }
  function advanceWizard(){const problems=validate(current());if(problems.length){toast(`Complete these fields first: ${problems.slice(0,3).join(', ')}`,true);return;}
    wizardStage='review';$('advanced-panel').open=false;renderEditor();
  }
  function finishWizard(){const problems=validate(current());if(problems.length){toast(`Complete these fields first: ${problems.slice(0,3).join(', ')}`,true);return;}
    if(dirty&&!saveDraft())return;patternIndex=0;renderPrepare();setPage('prepare');
  }
  function renderEditor(preserveQuickSteps=false){const s=current();$('scenario-total').textContent=`${library.length} / 25`; $('scenario-list').innerHTML=library.map(sc=>`<button type="button" class="scenario-item ${sc.id===selectedId?'selected':''}" data-select="${escapeHTML(sc.id)}"><strong>${escapeHTML(sc.title||'Untitled scenario')}</strong><span>${escapeHTML(sc.domain||'Uncategorised')}</span></button>`).join('');$('editing-title').textContent=s.title||'Untitled scenario';updateDraftStatus();
    for(const key of ['title','domain','learnerName','learnerProfile','objective','procedure']){const inp=document.querySelector(`[data-key="${key}"]`);if(inp)inp.value=s[key]||'';}
    $('steps-editor').innerHTML=s.steps.map((st,i)=>`<div class="step-block"><div class="step-head"><h3>Step ${i+1}: ${escapeHTML(st.name||'Untitled')}</h3><div class="step-controls"><button type="button" class="btn" data-step-move="up" data-i="${i}" ${i===0?'disabled':''} aria-label="Move step ${i+1} up">↑</button><button type="button" class="btn" data-step-move="down" data-i="${i}" ${i===s.steps.length-1?'disabled':''} aria-label="Move step ${i+1} down">↓</button><button type="button" class="btn" data-step-delete="${i}" ${s.steps.length===1?'disabled':''}>Remove</button></div></div><div class="step-fields">
      ${stepField(i,'name','Step name',st.name)}${stepField(i,'icon','Visual emoji',st.icon)}${stepField(i,'target','Pointing target',st.target)}${stepField(i,'direction','Prepared task direction (New pathway)',st.direction)}
      ${stepField(i,'context','Context',st.context,true)}${stepField(i,'initial','Before instruction',st.initial,true)}${stepField(i,'waiting','After waiting (no independent action)',st.waiting,true)}${stepField(i,'gestureNoResponse','After gesture (still requires a model)',st.gestureNoResponse,true)}${stepField(i,'independent','Independent response',st.independent,true)}${stepField(i,'gestureDone','Response after pointing',st.gestureDone,true)}${stepField(i,'modelDone','Response after modelling',st.modelDone,true)}
      </div></div>`).join('');
    $('patterns-editor').innerHTML=s.patterns.map((p,i)=>`<div class="pattern-block"><div class="step-head"><h3>Variation ${i+1} · ${i===0?'New pathway':'Experienced pathway'}</h3><button type="button" class="btn small-btn" data-pattern-delete="${i}" ${s.patterns.length===1?'disabled':''}>Remove</button></div><div class="pattern-row"><label>Variation name<input data-pattern="${i}" data-pattern-key="name" maxlength="80" value="${escapeHTML(p.name)}"></label></div><div class="pattern-grid">${p.needs.map((need,j)=>`<label>${j+1}. ${escapeHTML(s.steps[j].name||'Untitled step')}<select data-pattern="${i}" data-need="${j}"><option value="0" ${need===0?'selected':''}>0 · Independent after wait</option><option value="1" ${need===1?'selected':''}>1 · After gesture</option><option value="2" ${need===2?'selected':''}>2 · After modelling</option></select></label>`).join('')}</div></div>`).join('');
    refreshWizard(preserveQuickSteps);}
  function stepField(i,key,label,value,multi=false){return `<label class="${multi?'all':''}">${escapeHTML(label)}${multi?`<textarea rows="2" maxlength="650" data-step="${i}" data-step-key="${key}">${escapeHTML(value)}</textarea>`:`<input maxlength="${key==='icon'?16:key==='direction'?220:100}" data-step="${i}" data-step-key="${key}" value="${escapeHTML(value)}">`}</label>`;}
  function newStep(){return schemaStep({id:slug(),name:'New task step',icon:'🧩',target:'teaching material',context:'Learner is ready for the next step.',direction:'Please complete this step.',initial:'Learner looks at the material.',waiting:'Learner has not responded yet.',gestureNoResponse:'Learner notices the gesture but does not act.',independent:'Learner completes the step independently.',gestureDone:'Learner completes the step after the gesture.',modelDone:'Learner completes the step after the model.'},0);}
  function addStep(guided=false){const s=current();if(s.steps.length>=16){toast('Maximum 16 steps per scenario.',true);return;}const st=newStep();if(guided){st.name='';st.target='';st.iconMode='auto';st.icon='🧩';refreshStepResponses(st);}s.steps.push(st);s.patterns.forEach(p=>p.needs.push(0));markDirty();renderEditor();}
  function deleteStep(i){const s=current();if(s.steps.length<=1)return;if(!confirm(`Remove step ${i+1} from all variations?`))return;s.steps.splice(i,1);s.patterns.forEach(p=>p.needs.splice(i,1));markDirty();renderEditor();}
  function moveStep(i,dir){const s=current(),j=i+(dir==='up'?-1:1);if(j<0||j>=s.steps.length)return;[s.steps[i],s.steps[j]]=[s.steps[j],s.steps[i]];s.patterns.forEach(p=>{[p.needs[i],p.needs[j]]=[p.needs[j],p.needs[i]];});markDirty();renderEditor();}
  function addPattern(){const s=current();if(s.patterns.length>=6){toast('Maximum 6 variations.',true);return;}s.patterns.push({id:`P${s.patterns.length+1}`,name:`Variation ${s.patterns.length+1}`,needs:s.steps.map(()=>0)});markDirty();renderEditor();}
  function createScenario(){openTemplatePicker();}
  function addMissingBuiltIns(){
    if(!guardUnsaved())return;
    if(dirty){library=clone(savedLibrary);dirty=false;}
    const existing=new Set(library.map(s=>s.id));const toAdd=SEED.filter(s=>!existing.has(s.id));
    if(!toAdd.length){toast('All built-in examples are already in your library.');return;}
    if(library.length+toAdd.length>25){toast('Not enough space. Export a backup or remove a scenario first (maximum 25).',true);return;}
    library.push(...toAdd.map(s=>normalise(s))); selectedId=toAdd[0].id;patternIndex=0;wizardStage='details';dirty=true;
    if(saveDraft()){renderEditor();renderPrepare();toast(`${toAdd.length} new built-in example${toAdd.length===1?'':'s'} added without removing your existing work.`);}
  }
  function duplicateScenario(){if(!guardUnsaved())return;if(library.length>=25){toast('Maximum 25 scenarios.',true);return;}if(dirty){library=clone(savedLibrary);dirty=false;}
    const s=normalise(clone(current()));s.id=slug();s.title+=' (copy)';library.push(s);selectedId=s.id;patternIndex=0;wizardStage='details';markDirty();renderEditor();}
  function deleteScenario(){if(library.length<=1){toast('Keep at least one scenario.',true);return;}if(!confirm(`Delete “${current().title}” from your local library?`))return;library=library.filter(x=>x.id!==selectedId);selectedId=library[0].id;patternIndex=0;wizardStage='details';dirty=true;saveDraft();renderEditor();}
  function download(filename,content,type){const blob=new Blob([content],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);}
  function exportLibrary(mode){try{if(mode!=='json')validateAll();const data=JSON.stringify({version:2,scenarios:library},null,2);if(mode==='json')download('teachsim-scenarios-backup.json',data,'application/json;charset=utf-8');else download('scenarios.js',`/* Exported from TeachSim V6.3 Content Editor. Fictional training data only. */\nwindow.TEACHLAB_SEED_SCENARIOS = ${JSON.stringify(library,null,2)};\n`,'application/javascript;charset=utf-8');toast(mode==='json'?'JSON backup downloaded.':'scenarios.js downloaded. Commit it to your repository to update your public website.');}catch(e){toast(e.message,true);}}
  async function importBackup(file){if(!file)return;if(file.size>2000000){toast('Backup exceeds the 2 MB limit.',true);return;}if(!guardUnsaved())return;try{const obj=JSON.parse(await file.text());const candidates=Array.isArray(obj)?obj:(Array.isArray(obj.scenarios)?obj.scenarios:[obj]);const newLibrary=checkLibrary(candidates,true);if(!confirm(`Replace your browser library with ${newLibrary.length} imported scenario(s)? Export a backup first if needed.`))return;library=persistLibrary(newLibrary);selectedId=library[0].id;patternIndex=0;dirty=false;wizardStage='details';renderEditor();toast('Imported library saved in this browser.');}catch(e){toast(`Import failed: ${e.message}`,true);}finally{$('import-json').value='';}}
  function restore(){if(!confirm('Discard local drafts and restore the scenarios bundled with this website? Export a backup first if needed.'))return;try{localStorage.removeItem(LEGACY_STORAGE_KEY);localStorage.removeItem(STORAGE_KEY);}catch(e){toast(`Cannot restore: ${e.message}`,true);return;}library=checkLibrary(SEED);savedLibrary=clone(library);selectedId=library[0].id;patternIndex=0;dirty=false;renderEditor();toast('Published library restored.');}
  /* Navigation and teacher interaction */
  $('nav-editor').addEventListener('click',goEditor);$('nav-teacher').addEventListener('click',goTeacher);
  function openDialog(el){if(typeof el.showModal==='function')el.showModal();else el.setAttribute('open','');}
  function closeDialog(el){if(typeof el.close==='function')el.close();else el.removeAttribute('open');}
  const helpDialog=$('help-dialog'),briefDialog=$('brief-dialog');
  $('open-guide').addEventListener('click',()=>openDialog(helpDialog));
  $('prepare-how').addEventListener('click',()=>openDialog(helpDialog));
  $('close-help').addEventListener('click',()=>closeDialog(helpDialog));
  $('review-brief').addEventListener('click',()=>{
    const s=current();
    $('brief-dialog-learner').textContent=s.learnerName;
    $('brief-dialog-title-text').textContent=s.title;
    $('brief-dialog-objective').textContent=s.objective;
    $('brief-dialog-procedure').textContent=s.procedure;
    $('brief-dialog-steps').innerHTML=s.steps.map(st=>`<li>${escapeHTML(st.name)}</li>`).join('');
    openDialog(briefDialog);
  });
  $('close-brief').addEventListener('click',()=>closeDialog(briefDialog));
  for(const d of [helpDialog,briefDialog])d.addEventListener('click',e=>{if(e.target===d)closeDialog(d);});
  $('give-guided-direction').addEventListener('click',()=>{
    if(pathway!=='new'||page!=='practice'||practiceState.said>0)return;
    action('say',current().steps[stepIndex].direction||'Please complete this step.');
  });
  $('scenario-picker').addEventListener('change',e=>{selectedId=e.target.value;patternIndex=0;renderPrepare();});document.querySelectorAll('input[name="practice-pathway"]').forEach(el=>el.addEventListener('change',e=>setPathway(e.target.value)));$('start').addEventListener('click',start);
  $('say-form').addEventListener('submit',e=>{e.preventDefault();const inp=$('teacher-words');if(!inp.value.trim()){toast('Type a short task direction first.',true);return;}action('say',inp.value);inp.value='';});
  $('point-target').addEventListener('click',()=>action('gesture'));$('do-wait').addEventListener('click',()=>action('wait'));$('do-model').addEventListener('click',()=>action('model'));$('do-ack').addEventListener('click',()=>action('ack'));$('advance').addEventListener('click',advance);
  $('retry-same').addEventListener('click',()=>returnBrief(false));$('retry-next').addEventListener('click',()=>returnBrief(true));$('back-brief').addEventListener('click',()=>returnBrief(false));
  $('template-list').addEventListener('click',e=>{const el=e.target.closest('[data-template]');if(el)makeFromTemplate(el.dataset.template);});
  $('quick-form').addEventListener('submit',e=>e.preventDefault());
  $('quick-form').addEventListener('input',e=>{const el=e.target;if(el.hasAttribute('data-quick')){const key=el.dataset.quick;if(!Object.prototype.hasOwnProperty.call(current(),key))return;current()[key]=el.value;markDirty();}else if(el.hasAttribute('data-content')){const key=el.dataset.content;if(key in current().content){current().content[key]=el.value;markDirty();}}else if(el.hasAttribute('data-feedback-key')){const key=el.dataset.feedbackKey;if(key in FEEDBACK){current().content.messages[key]=el.value;markDirty();}}});
  $('quick-add-step').addEventListener('click',()=>addStep(true));$('quick-add-step-bottom').addEventListener('click',()=>addStep(true));
  $('quick-steps').addEventListener('click',e=>{
    const del=e.target.closest('[data-quick-delete]'),move=e.target.closest('[data-quick-move]');
    if(del)deleteStep(Number(del.dataset.quickDelete));
    if(move)moveStep(Number(move.dataset.i),move.dataset.quickMove);
  });
  $('quick-steps').addEventListener('change',e=>{
    const el=e.target;if(!el.hasAttribute('data-quick-step'))return;
    const i=Number(el.dataset.quickStep),key=el.dataset.quickStepKey,st=current().steps[i];if(!st)return;
    if(key==='iconMode'){
      if(el.value==='auto'){st.iconMode='auto';st.icon=suggestVisual(st);}
      else{st.iconMode='manual';st.icon=el.value;}
    }else if(['name','target'].includes(key)){
      // Keep authored response text. Refresh only fields still matching generated defaults.
      const previous={...st},generated={...st};refreshStepResponses(generated);
      st[key]=el.value;const updated={...st};refreshStepResponses(updated);
      for(const field of ['direction','context','initial','waiting','gestureNoResponse','independent','gestureDone','modelDone']){
        if(previous[field]===generated[field])st[field]=updated[field];
      }
      if(st.iconMode!=='manual')st.icon=suggestVisual(st);
    }else{return;}
    // Leave the active controls in place so Tab, click and select focus remain native.
    const preview=el.closest('.quick-step').querySelector('.quick-icon-preview');
    preview.textContent=st.icon||'🧩';preview.setAttribute('aria-label',`Current visual: ${st.icon||'🧩'}`);
    markDirty();renderEditor(true);
  });
  $('wizard-review').addEventListener('click',advanceWizard);
  $('wizard-back').addEventListener('click',()=>{wizardStage='details';renderEditor();});
  $('wizard-commit').addEventListener('click',finishWizard);
  $('wizard-leave').addEventListener('click',()=>{if(!guardUnsaved())return;if(dirty){library=clone(savedLibrary);dirty=false;selectedId=library[0].id;}wizardStage='details';renderEditor();});
  $('create-scenario').addEventListener('click',createScenario);$('add-builtins').addEventListener('click',addMissingBuiltIns);$('duplicate-scenario').addEventListener('click',duplicateScenario);$('delete-scenario').addEventListener('click',deleteScenario);$('save-draft').addEventListener('click',()=>{saveDraft();renderEditor();});
  $('preview-scenario').addEventListener('click',()=>{const errs=validate(current());if(errs.length){toast(`Fix the incomplete scenario fields: ${errs.slice(0,4).join(', ')}`,true);return;}if(dirty&&!saveDraft())return;patternIndex=0;renderPrepare();setPage('prepare');});
  $('add-step').addEventListener('click',()=>addStep(false));$('add-pattern').addEventListener('click',addPattern);
  $('export-json').addEventListener('click',()=>exportLibrary('json'));$('export-github').addEventListener('click',()=>exportLibrary('github'));$('import-json').addEventListener('change',e=>importBackup(e.target.files[0]));$('restore-published').addEventListener('click',restore);
  $('scenario-list').addEventListener('click',e=>{const b=e.target.closest('[data-select]');if(b)selectScenario(b.dataset.select);});
  $('steps-editor').addEventListener('input',e=>{const t=e.target;if(!t.hasAttribute('data-step'))return;const i=Number(t.dataset.step);const key=t.dataset.stepKey;if(!current().steps[i]||!(key in current().steps[i]))return;current().steps[i][key]=t.value;if(key==='icon')current().steps[i].iconMode='manual';markDirty();});
  $('steps-editor').addEventListener('click',e=>{const del=e.target.closest('[data-step-delete]');const move=e.target.closest('[data-step-move]');if(del)deleteStep(Number(del.dataset.stepDelete));if(move)moveStep(Number(move.dataset.i),move.dataset.stepMove);});
  $('patterns-editor').addEventListener('change',e=>{const t=e.target;if(t.hasAttribute('data-need')){const p=current().patterns[+t.dataset.pattern];if(p){p.needs[+t.dataset.need]=limit(t.value,0,2);markDirty();}}});
  $('patterns-editor').addEventListener('input',e=>{const t=e.target;if(t.dataset.patternKey==='name'){const p=current().patterns[+t.dataset.pattern];if(p){p.name=t.value;markDirty();}}});
  $('patterns-editor').addEventListener('click',e=>{const b=e.target.closest('[data-pattern-delete]');if(b){const i=+b.dataset.patternDelete;if(current().patterns.length<=1)return;if(confirm(`Remove variation ${i+1}?`)){current().patterns.splice(i,1);markDirty();renderEditor();}}});
  $('editor-form').addEventListener('input',e=>{const t=e.target;if(!t.hasAttribute('data-key'))return;const key=t.dataset.key;if(!Object.prototype.hasOwnProperty.call(current(),key))return;current()[key]=t.value;markDirty();});
  $('editor-form').addEventListener('submit',e=>e.preventDefault());
  window.addEventListener('beforeunload',e=>{if(dirty){e.preventDefault();e.returnValue='';}});
  $('template-list').innerHTML=TEMPLATES.map(t=>`<button type="button" class="template-card" data-template="${escapeHTML(t.id)}"><span class="template-icon">${escapeHTML(t.icon)}</span><span class="template-copy"><strong>${escapeHTML(t.scenario.title)}</strong><small>${escapeHTML(t.desc)}</small><small>${escapeHTML(t.scenario.domain)} · ${t.scenario.steps.length} editable steps</small></span><span class="template-arrow">Use →</span></button>`).join('');
  renderPrepare();renderEditor();setPage('prepare');
})();
