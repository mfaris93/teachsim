# TeachSim V6.9 — Distinct prompt levels and task-workspace visuals

TeachSim is a static, no-login practice prototype for least-to-most prompting. Eight fictional SPED functional-learning scenarios, Guided and Experienced pathways, and Prepare → Practise → Review are retained.

## What changed
- **Prompt types and actions appear together:** Gestural prompt has the relevant action below its name; Model prompt has the relevant demonstration below its name. Guided shows scenario-specific actions. Experienced shows general descriptions so the teacher still selects the action independently.
- **Instruction and Wait / Observe** are grouped separately from prompt levels.
- **Acknowledge success** appears under *Respond to learner*, explicitly marked **Not a prompt level**. It is the teaching response after a completed step.
- Replaced the generic cartoon learner with simple, task-specific **vector workspaces** depicting materials used in all eight scenarios. After a learner response, the diagram marks the item involved; the written observation specifies what the learner actually did. This is not a video or literal depiction of exact movement.
- No new scenarios, authoring, AI, accounts, or voice input.

## Deployment
Upload `index.html`, `styles.css`, `scenarios.js`, `scene_renderer.js`, and `app.js` to the GitHub Pages repository root; commit all five together. `scene_renderer.js` **is required** and must not be omitted. `README.md` and `SPECIALIST_REVIEW.md` are project documentation, not runtime files.

Open the published GitHub Pages URL in Safari for interactive testing. Downloaded HTML previews inside iPad file viewers may block JavaScript.

## Boundaries
These visuals identify task materials and the focus of a simulated response, not full animations. Written learner observations remain the exact scenario description. The gestural → model hierarchy and error-correction assumptions are provisional pending specialist validation. The action log only checks button choices, not teaching skill in a real classroom. Physical-device keyboard, screen-reader, and iPad tests remain outstanding.
