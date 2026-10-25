# TeachSim — Eight scenarios, rotating learner responses

Standalone GitHub Pages site: upload `index.html` to the repository root. No other files or dependencies are required.

## What changed
- Eight ready-made fictional SPED functional-skills scenarios, each with three focused instructional steps.
- Same lightweight **Prepare → Practise → Review** workflow and **Guided / Experienced** pathways.
- Four scripted response patterns rotate on every **Retry** within the same scenario. Each step may complete independently, after a gestural prompt, or after a model prompt.
- Review shows a per-step prompt level, totals for independent/gestural/model completion, and **one priority improvement**.
- Simplified schematic visuals for the seven newly restored scenarios; the school-bag scene is retained.
- All scenario variations are deterministic and fictional; no user data is transmitted.

## Important instructional boundaries
- This is a provisional model of least-to-most prompting, not a universal sequence; actual prompting hierarchies, response intervals, controlling prompts, reinforcement and error-correction procedures must be individualised and reviewed by an SI specialist.
- Incorrect responses, physical prompts, timed response intervals, prompt fading and real student data are deliberately **not** implemented yet.
- Some scenarios are three-step **practice excerpts**, not complete task analyses (for example, handwashing omits drying). Avoid interpreting a completed excerpt as independent mastery of the entire skill.
- The UI records button selections, not actual delivery, timing, learner behaviour, or teaching fidelity.
- The schematic visual communicates task materials and status; the text gives the precise observed response.

## Trial checks
1. Choose each scenario. Check the three targets, Guided vs Experienced mode and step-specific prompts.
2. Complete three steps by **Give instruction → Wait**, add **Gestural** or **Model** only if needed and wait after each prompt, then **Acknowledge success**.
3. Retry three times and verify the observed learner responses change while the scenario stays the same.
4. Review per-step independence/prompt levels and improvement priority.
5. Check in Safari on iPad and with keyboard + screen-reader users.

This prototype is not SI specialist-approved.
