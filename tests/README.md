# Phase 1 browser regression checks

Run a static server on port 8010 from the repository root, then run
`node --test tests/phase1.cjs` in another shell. Playwright must be available to
Node; the cloud development image already supplies it (1.62.1). Chromium defaults
to `/usr/bin/chromium`. Override `CHROMIUM_PATH` and `TEACHSIM_TEST_URL` as needed.
These are development tools only; TeachSim itself has no package dependencies.

The suite checks all eight scenarios in both pathways, same-pattern repeatability,
next variations, aligned and incomplete episodes, delayed feedback, safe display
of typed words, brief-dialog state and focus, cancelling navigation, custom content
preservation, JSON/JavaScript downloads, backup import, injected storage failures,
legacy draft restoration/discard, malformed imports, incomplete backups, template
creation, generated text, step/support reorder, and adding missing built-ins.
Responsive checks cover 320, 375, 768 and 1280 pixel viewports across preparation,
practice, the brief dialog, review and expanded editor. Uncaught page errors fail
each test. Each test uses a fresh browser context and disposes of its drafts.

These tests do not establish accessibility conformance, semantic evaluation,
instructional validity, real-device usability or Safari/Firefox compatibility.
Before a trial, walk through keyboard-only and screen-reader use, zoom, mobile
portrait/landscape, and the selected school browsers. Have instructional
specialists review the scripts and feedback separately.

Verified on this branch: all 16 tests passed, with zero failures, skips or uncaught
page errors, using Playwright 1.62.1 and Chromium in the cloud environment.
JavaScript syntax checks and `git diff --check` also passed. Mobile editor and
preparation screenshots were captured; the mobile editor screenshot was visually
reviewed in addition to the automated layout checks.
