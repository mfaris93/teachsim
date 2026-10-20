# TeachSim V6.4 — visual-first prototype

**TeachSim · Practise. Reflect. Refine.**

A static HTML/CSS/JavaScript prototype for trainer-supported instructional rehearsal with fictional SPED classroom activities. It runs locally or on GitHub Pages. No account, database, AI API, paid service, or server is required.

## What's new in V6.4

- **Choose visually:** Scenario cards replace the dropdown as the primary selection method. The first four appear immediately; **See all 8 scenarios** expands the library.
- **See the activity:** Practice uses a responsive original SVG illustration whose task materials change by scenario/step and whose learner's arm pose changes after a completion response. These are schematic illustrations, not observed student behaviours.
- **Act simply:** Give instruction, Wait, Point, Demonstrate and Acknowledge are grouped below the learner illustration.
- **Review briefly:** One summary, a strength and improvement target appear after the episode, with optional step-by-step review.
- **Edit consistently:** The Content Editor emphasises task, learner and steps, with step-specific illustration preview. Detailed procedures, feedback wording and response variations remain optional or advanced.
- **Paths:** Guided has suggested instructions and predictable controlled responses; Experienced omits suggested wording and uses more varied response patterns. Both share the same provisional instructional procedure.

## Try locally

Keep these six files together in one folder: `index.html`, `styles.css`, `app.js`, `scenarios.js`, `templates.js`, `README.md`.

Open `index.html` in Safari or Chrome. If the preview in the ChatGPT/iPad file viewer shows no scenarios, test on the published GitHub Pages site in Safari instead; embedded file viewers may block JavaScript.

## Publish to GitHub Pages

1. In the existing website, **export a backup** of any customised scenarios: Content editor → Publish or back up your scenarios → Download JSON backup.
2. Unzip this package, open your [GitHub repository](https://github.com/mfaris93/teachsim), then upload **the files inside the folder**, replacing the corresponding files in the repository root. Do not upload the ZIP itself.
3. Commit the changes to the branch configured for GitHub Pages (typically `main`).
4. Open `https://mfaris93.github.io/teachsim/` in Safari or Chrome after GitHub finishes publishing. Reload if you see a cached version.
5. If you previously customised `scenarios.js`, reconcile that file rather than overwriting it with the starter scenarios. Browser drafts are local to the browser, not auto-published.

## Edit scenarios without coding

Open **Content editor** → select a scenario or **Create from template** → edit Task/Learner/Steps → **Save draft** → **Preview as teacher**. Optional advanced settings control feedback wording and learner-response variation.

Browser changes only affect local drafts. To update other people's site, export `scenarios.js` and commit it to GitHub. This public prototype has **no authentication**; the editor is not a secured administrator area.

## Constraints before an educator trial

- All learner profiles are fictional. Don't enter real student identities, IEP information, incidents or confidential MOE data.
- Instructor directions, waiting duration, real gestures, physical prompts and actual classroom teaching performance are **not measured**; controls record selected actions.
- Scenarios and feedback rules are illustrative, not validated guidance. An experienced SPED practitioner should review the task analyses and prompting procedures before a supported school trial.
- This website does not establish government security approval or an effective training outcome.
