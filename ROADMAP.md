# TeachSim development roadmap

## Scope and status

V6.3 prepares the existing static prototype for a small, trainer-led educator trial.
This branch implements Phase 1 only. V7 features and validation study development
require a separate instruction. Procedures, scripts and feedback remain provisional
until reviewed by SPED instructional specialists. MOE sponsorship is not system
approval or evidence of instructional validity.

## Architecture inspected

- `index.html`: Prepare → Practise → Review screens, Content Editor, native guide
  and teaching-brief dialogs. Hidden sections provide navigation without routing.
- `styles.css`: shared visual styles and responsive breakpoints; no UI framework.
- `scenarios.js`: eight fictional seed scenarios attached to a browser global.
  Each has task steps, learner responses and ordered support patterns. Support
  values are 0 (after waiting), 1 (after pointing) or 2 (after modelling).
- `templates.js`: editable scenario starting points, also a browser global.
- `app.js`: one enclosed script owns normalisation, validation, navigation,
  deterministic action transitions, episode records, feedback and content editing.
  The first pattern supports New teacher; later patterns support Experienced
  teacher. A single-pattern scenario shares that pattern across both pathways.
- Draft libraries use browser localStorage (`teachlab_v4_drafts`, with a legacy
  `teachlab_v3_drafts` fallback). Import replaces the local library after confirmation;
  JSON backs it up; exporting `scenarios.js` prepares content for GitHub publication.
- No build, backend, database, accounts or application dependencies. GitHub Pages
  serves the files as-is. Development browser tests are separate from the website.

The engine implements a fixed, least-to-most demonstration sequence. Editing a
procedure's wording does **not** change those rules. Random IDs identify custom
scenarios; learner-response selection is not random. Typed words are logged and
escaped for display, not interpreted or scored.

## Audit findings and Phase 1 priorities

### P0 — Protect educator-authored content (implemented)

1. Quick step name/target edits previously replaced all authored direction and
   learner-response wording. Preserve customised fields; regenerate only fields
   still equal to the editor's generated defaults. Explain this in the editor.
2. Import previously replaced the in-memory library and announced success even
   when saving failed. Validate and persist before replacing the active library;
   report storage failures and retain current work.
3. Preview previously proceeded after a failed save. Keep the editor open with
   unsaved edits and an error when storage cannot be written.
4. Restore previously removed only the current draft key. Remove the legacy key
   too so old drafts do not return on reload; report storage access failures.
5. Discard previously reloaded only the current key, losing a loaded legacy custom
   library. Keep a snapshot of the last loaded/saved library for discard operations.
6. Allow JSON backup of incomplete editor work; continue to reject incomplete
   content for website export. Reject malformed imported support patterns rather
   than silently coercing their meaning. Retain legacy normalisation for existing
   stored drafts so this release does not reject previously readable libraries.

### P1 — Usability and accessibility for the trial (implemented)

1. Confirm before top navigation abandons an unfinished episode. Reviewing the
   brief remains non-destructive and needs no confirmation.
2. Focus the new screen heading on navigation; preserve focus when a quick-step
   control is redrawn. Keep native modal keyboard/Escape behaviour.
3. Replace a list role with incorrectly structured children with a labelled group;
   give the keyboard-accessible import control a visible label focus indicator.
4. Constrain the scenario selector and narrow-screen grids; wrap long content.
   Match advanced step input lengths to saved field limits. Label prepared
   directions accurately as used in the New pathway.
5. Identify the release as V6.3 without changing seed content or engine rules.

### Existing capabilities retained and checked

- Both pathways, all eight built-in scenarios, correct prescribed action sequences.
- Same-pattern retries reproduce learner responses; next variation advances in
  authored order; single-pattern scenarios work in both pathways.
- Teaching brief opens/closes without resetting actions or step position.
- Feedback stays hidden through intermediate steps and appears after the last
  advance, including when a teacher advances with incomplete actions.
- Debrief already contains recorded actions, expected actions, specific rule
  concerns, editable explanations, a reflection question and retry controls.
  V7 should improve these foundations rather than duplicate them.
- Editor saves, JSON and JavaScript export, JSON re-import, template creation,
  task-step reorder and adding missing built-ins while retaining custom scenarios.
- Responsive layout and core focus/dialog behaviour in Chromium.

### Before inviting educators (manual release gates)

- SPED specialists should review each selected task, learner response, expected
  action sequence and feedback statement against the intended SI procedure.
- Trainer should explain that the current engine rehearses one fixed prompting
  sequence. It does not yet model a full range of error-correction or fading
  procedures, learner learning over time, or alternative instructional methods.
- Try the selected scenarios on actual trial phones/tablets and school browsers,
  including Safari; complete keyboard and screen-reader walkthroughs. Automated
  layout/focus checks are not a full accessibility certification.
- Back up custom content before updating. Verify a published content export in
  a fresh browser context; stored drafts take precedence over new website defaults.
- Agree trial tasks and collect observations without real student identifiers.
  Trainer-led use remains primary; do not infer classroom competence from results.

### Known limitations / later maintenance

- Storage can be cleared, blocked or full; exports are the portable backup, and
  drafts do not transfer between devices. Existing unreadable stored JSON falls
  back to built-ins; a recovery interface is not implemented in this phase.
- Import is an explicitly confirmed replacement, not a merge. Missing built-ins
  are added by ID without replacing matching edited scenarios.
- Text-only procedure edits can contradict the fixed engine; expert review is
  essential. No semantic validation is provided.
- A large `app.js` remains manageable for this release but couples rendering,
  storage and simulation. Consider extracting pure transition functions when V7
  requirements justify it; avoid a framework rewrite for the trial.
- No automated cross-browser, contrast, screen-reader or real-device certification.

## Reproducible development checks

The app itself still needs only a static server. Start from the repository root:

```sh
python3 -m http.server 8010 --bind 127.0.0.1
```

In a second shell, with development-only Playwright and Chromium available:

```sh
node --check app.js
node --check scenarios.js
node --check templates.js
node --test tests/phase1.cjs
```

The current cloud image supplies Playwright 1.62.1 and `/usr/bin/chromium`.
For a different development machine, provide Playwright in Node's module path and
set `CHROMIUM_PATH` to its Chromium executable. `TEACHSIM_TEST_URL` overrides the
local test server URL. No browser-testing package is shipped to end users.
Tests use isolated browser contexts and fictional/disposable drafts, never a
teacher's existing browser storage. See `tests/README.md` for coverage and limits.

## Phase 2 — V7 (planned, not implemented)

A. Add an interactive expert demonstration using controlled engine transitions.
   Keep demonstration content editable and distinguish modelling from practice.
B. Improve action comparison and explanations using the existing recorded/expected
   sequence and rule-specific feedback; never imply real-world competence.
C. Add lightweight trainer reflection: one improvement goal, a targeted retry or
   controlled variation, and a short classroom application task. No LMS or dashboard.

Discuss substantial architecture changes or external services first. Keep the
static GitHub Pages workflow and avoid paid APIs, accounts and databases unless a
concrete need is agreed. Do not add source-reference fields to the teacher UI or
Content Editor; maintain specialist evidence review separately.

## Phase 3 — Validation preparation (deferred)

Later work should define a simple protocol for usability, rehearsal authenticity,
instructional accuracy and perceived learning value. The present software records
selected actions against authored rules. It cannot assess natural-language meaning,
spoken delivery, actual wait duration, physical prompts, classroom fidelity,
student learning, or teacher competence. Phase 1 checks are software verification,
not pedagogical validation or an educator study.
