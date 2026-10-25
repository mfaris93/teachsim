# TeachSim — SI Practice (main website)

This **three-step school-bag scenario** replaces the previous eight-scenario TeachSim home page. It is a simple, static teaching-decision rehearsal for least-to-most prompting with two pathways: Guided and Experienced.

## Deployment to GitHub Pages

1. Open repository `mfaris93/teachsim` on branch `main`.
2. **Replace the root `index.html`** with the `index.html` in this package, and commit. Do not put it inside the `multi-step` or `pilot` folder.
3. Visit https://mfaris93.github.io/teachsim/ in Safari, refresh, and test the scenario in both pathways.

This version is one self-contained HTML file; it **does not require** the previous `app.js`, `styles.css`, `scenarios.js`, `templates.js`, or `scene_renderer.js` to load. Those legacy files can stay in the repository for now as a rollback safeguard, but are not used by the new home page.

The Git commit history also preserves earlier versions if rollback is needed.

## What is included

- Prepare → Practise → Review
- Three observable targets: book fully inside bag; pencil case fully inside bag; zipper fully closed
- Guided (examples and optional hints) and Experienced (no examples or hints)
- Three scripted response variations across retries
- Action-based post-practice review, not a numerical teacher-competence score
- No external files, logins, personal-data storage, or AI dependency

## Important instructional limitations

- The gestural → model prompt sequence and its effectiveness for each target are **provisional** and await SI specialist review.
- The learner simulation does not yet include incorrect responses; it models no response and successful response at planned prompt levels.
- The simulation records button choices rather than assessing actual teaching, timing, quality of reinforcement or student performance.
- Before rolling it out as formal professional learning, review the procedural fidelity, test on actual iPad Safari, and run a small teacher usability trial.

Research foundation: Dr Bree Jimenez and colleagues' systematic instruction and task-analysis teacher training work. This particular six-point practice checklist and the scenario response scripts are TeachSim adaptations, not validated instruments published by the authors.
