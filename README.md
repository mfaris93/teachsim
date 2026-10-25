# TeachSim V6.8 — Observation-led Guided practice

Static, no-login instructional rehearsal app with eight fictional scenarios and the **Guided / Experienced** pathways. Focus: least-to-most prompting and teacher decisions after observable learner responses.

## Changes in V6.8
- Prepare now shows strategy, scenario, pathway and one short learner context. Task steps, procedure and trainer worked example are available only under **View teaching plan** (worked example nested and closed by default).
- Guided still suggests the **initial instruction**, but never automatically displays the next teaching choice. General guiding questions and task-specific prompt examples are optional and hidden until requested.
- Learner outcomes are displayed as **Completed**, **Did something else**, **Did not begin**, or **Still needs support**, with a clearly stated scripted action and a different visual cue. A prompt delivery no longer falsely asserts that the learner has already followed it; teacher must select **Wait** to observe.
- No change to the eight scenarios' response plans or post-practice scoring rules. Review feedback still appears only at the end.

## Publish
Upload **index.html**, **styles.css**, **app.js**, **scenarios.js** to the repository root. Test the published GitHub Pages site in Safari; iPad attachment viewers often block scripts. This ZIP also includes **SPECIALIST_REVIEW.md** for project reference, not the teacher UI.

## Limitations
The learner visuals are schematic, not animations of every exact physical action. Responses are authored examples rather than simulated understanding. Button actions do not assess teachers' spoken directions, real timings, or actual fidelity. Instructional prompting hierarchy and error-correction rules remain provisional pending SPED specialist review. Check full keyboard/screen-reader behavior and a physical iPad before training use.
