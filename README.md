## V6.7.1 UI fix (Prepare)
- Scenario choice is now a native, keyboard/screen-reader-friendly dropdown with eight options **pre-rendered in HTML**. It becomes interactive when JavaScript loads.
- The default scenario, its task steps, procedure and trainer's worked example are also **pre-rendered**, so iOS attachment preview no longer displays empty areas.
- The Prepare teaching plan and trainer's worked example are two separate collapsible disclosures. The worked example now gives a five-action, first-step illustration tailored to the selected scenario.
- If JavaScript is blocked by the viewer, the page is a **read-only sample**: app buttons stay disabled and the notice directs users to the live GitHub Pages site for practice. This cannot make a sandbox/iPad file preview execute blocked JavaScript.
- No change to decision rules, scenarios, pathways or feedback.

# TeachSim V6.7.1 — Provisional learner-response decision practice

Simple static web app for trainer-supported rehearsal of **Least-to-Most Prompting**. Eight fictional scenarios; Guided and Experienced pathways. No content editor, accounts, analytics or AI.

## What changed from V6.6
- Each task step has an explicit observable success criterion, an authored incorrect-response example, and an unresolved-after-model response.
- Each scenario variation includes authored response outcomes by opportunity: `correct`, `no_response`, `incorrect`, or `unresolved`.
- After instruction or a prompt, selecting **Wait** reveals the learner's response. An incorrect response is distinct from no response.
- Teachers select the next planned prompt only when additional help is needed, acknowledge completed steps, or **Pause & review plan** when the model does not produce completion. A paused step is **not** counted as completed.
- The final Review shows the responses observed, recorded actions and decision-feedback; no performance feedback appears mid-practice.
- The app remains simplified: fixed built-in scenarios and no scenario creation.

## Educational review required **before** a real teacher trial
This is an **illustrative, provisional** exercise, not a verified curriculum, assessment tool, or learner-specific prompt hierarchy. The model prompt in this simulation is *not necessarily a controlling prompt*; therefore an unresolved response results in a pause for trainer review, not assumed success. In real instruction the prompt hierarchy, controlling prompt, error correction, time delay and reinforcement should be individualised and validated by a qualified systematic-instruction specialist.

Please have a specialist check:
1. The specific success criterion and incorrect response for every task step.
2. Whether gesture -> model is the appropriate instructional hierarchy for each learner/skill.
3. Whether the planned correction after an incorrect response differs from escalation after no response.
4. Whether the final prompt is sufficiently controlling; if not, what the agreed escalation/escalation limit and trainer action should be.
5. Whether the episode feedback fairly describes teacher decisions rather than implying measured teaching competence.

Supporting public references (research/instructional context; not claims of review):
- University of Nevada, Reno, *Using the System of Least to Most Prompts*: https://www.unr.edu/ndsip/services/resources/tips/using-the-system-of-least-to-most-prompts
- VCU Autism Center for Education, *Prompt Hierarchy*: https://vcuautismcenter.org/resources/factsheets/content.cfm/2494
- California PBIS/PENT, *Prompting*: https://pent.ca.gov/is/is/prompting.aspx

## Publish
Upload `index.html`, `styles.css`, `app.js` and `scenarios.js` to the repository root and commit. Open the live GitHub Pages site directly in Safari; local file previews may block JavaScript. Existing unused repo files need not be removed.

## Testing and limitations
Automated smoke tests check scenario choices, responsive layout and simulation pathways. Physical iPad/Safari, VoiceOver, full accessibility and expert instructional validation remain outstanding. The app records **button selections**, not timing, delivery quality or real learner outcomes.
