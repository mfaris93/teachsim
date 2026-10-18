# TeachSim V6.2 — Guided practice + editable instructional content

**TeachSim** — *Practise. Reflect. Refine.*

A fictional, rule-based SPED instructional rehearsal prototype. It is **not MOE-approved** and has not been validated for assessing instructional fidelity or teacher competence. Designed for trainer-led exploration, not independent clinical or student instruction.

## What's changed from V6.1

- **How TeachSim works** guide available from the top menu and preparation page.
- **New teacher = guided practice**: click a pre-written task direction; choose whether to wait, point, model, acknowledge and advance. Uses the first, predictable controlled response pattern. **No hints or assessment until the end**.
- **Experienced teacher = independent practice**: type a task direction; use the same action controls in more varied scripted learner situations. **Typed words are recorded but not interpreted or scored**.
- Replaced the confusing **Before practice** expandable box with a short explanation of the selected pathway. A trainer modelling note remains separately available as optional reference content.
- **Review teaching brief** button in the practice screen; consult learning objective, procedure and step list without losing your place or seeing premature feedback.
- **Review** stage at the end still shows a step-by-step sequence and feedback, with retry options.
- Retains the visual Content editor, eight sample scenarios, guided task templates, controlled variations, mouse/keyboard input, and scenario import/export.

The New and Experienced pathways are **learning-support options, not ability ratings**. Both use the same provisional task procedure and feedback criteria. A click on “wait” represents an action decision: no actual timing or physical prompt fidelity is measured.

## Try locally

Open `index.html` in Safari or Chrome with the accompanying `.js` and `.css` files in the same folder. If your browser restricts opening local files, use a simple local server or the included self-contained preview instead.

1. Select a scenario and **New** or **Experienced**.
2. Choose **How TeachSim works** if needed.
3. Review the brief and select **Begin teaching**.
4. Practise using the available actions. Select **Review teaching brief** at any point to check the procedure.
5. Finish all steps to see your recorded action sequence and delayed feedback.
6. Use **Content editor** to amend instructional briefs, learner profiles, task steps, modelling notes and feedback wording. Save drafts and preview them as a teacher.

## Publish on GitHub Pages (new repository)

You need a GitHub account. No API, paid server or backend is required for this static demonstration.

1. Go to <https://github.com/new>. Name the repository `teachsim`; choose **Public** for a non-sensitive demo. Create the repository (you may leave README unchecked).
2. In the new repo, use **Add file → Upload files** and upload the **six extracted files** to the repository root (not the ZIP itself): `index.html`, `styles.css`, `app.js`, `templates.js`, `scenarios.js`, `README.md`. Commit changes.
3. Under **Settings → Pages → Build and deployment**, select **Deploy from a branch**, **main**, **/(root)**. Save.
4. Look for **Visit site** under Pages. Expected URL: `https://YOUR-GITHUB-USERNAME.github.io/teachsim/`.
5. Test the site on a second device or private browser session to check that published defaults work. Your **local editor drafts do not transfer** automatically between devices.

## How to publish edited scenarios later

In **Content editor**, use **Save draft → Preview as teacher**. After checking, expand **Publish or back up your scenarios**, choose **Export scenarios.js for GitHub**, then replace the existing `scenarios.js` file in your GitHub repository and commit. The website automatically republishes from that branch. Export a JSON backup before major changes.

The built-in editor changes only content. To change page layout, controls or simulation engine behaviour, edit `index.html`, `styles.css` or `app.js` using VS Code, github.dev or another coding tool.

## Limits and privacy

- GitHub Pages is publicly readable for an ordinary GitHub Free demonstration. The Content editor is not password-protected: visitors can modify **their own local drafts** but cannot publish unless they have write access to the GitHub repository.
- **Do not include identifiable student information, confidential school documents, recordings or sensitive data.** Seek the appropriate MOE governance/hosting approvals before official use.
- Learner behaviours are pre-authored fictional responses, not models of disability, and the procedure/feedback have not received independent instructional validation.
- The scenario editor does not expose source-reference fields; maintain the evidence base and specialist review records separately.
- The internal older seed variable names/storage key are preserved to support earlier prototype drafts; this does not affect the TeachSim branding.
