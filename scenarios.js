/* TeachSim V6.1: fictional starter content. Procedures and responses are provisional. */
window.TEACHLAB_SEED_SCENARIOS = [
  {
    "id": "handwashing",
    "title": "Handwashing routine",
    "domain": "Daily Living Skills",
    "learnerName": "Sam",
    "learnerProfile": "Fictional learner rehearsing a short handwashing routine. Student actions are scripted; no diagnosis is implied.",
    "objective": "Practise giving a task direction, allowing a response opportunity, using the specified least-to-most prompts, and acknowledging completion.",
    "procedure": "Demonstration protocol (provisional): Say a brief task direction once → simulate a five-second wait → if needed, point at the relevant object → if still needed, model the action → acknowledge completion → advance. This is NOT validated teaching guidance; adapt with expert review.",
    "steps": [
      {
        "id": "soap",
        "name": "Apply soap",
        "icon": "🧼",
        "target": "soap dispenser",
        "context": "Sam has wet their hands. The soap dispenser is within reach.",
        "direction": "Sam, put soap on your hands.",
        "initial": "The learner looks towards the soap dispenser.",
        "waiting": "The learner continues looking at the dispenser without reaching for it.",
        "gestureNoResponse": "The learner follows your gesture with their eyes but does not begin.",
        "independent": "The learner pumps soap independently.",
        "gestureDone": "The learner reaches for the soap and pumps it.",
        "modelDone": "The learner watches your demonstration and then pumps soap."
      },
      {
        "id": "rub",
        "name": "Rub hands",
        "icon": "🤲",
        "target": "soapy hands",
        "context": "Soap is on Sam's hands.",
        "direction": "Sam, rub your hands together.",
        "initial": "The learner looks down at their hands.",
        "waiting": "The learner keeps their hands still.",
        "gestureNoResponse": "The learner watches your gesture but does not rub their hands.",
        "independent": "The learner rubs their soapy hands independently.",
        "gestureDone": "The learner starts rubbing their hands.",
        "modelDone": "The learner watches your demonstration and rubs their hands."
      },
      {
        "id": "rinse",
        "name": "Rinse hands",
        "icon": "🚰",
        "target": "running tap",
        "context": "Soap is on Sam's hands and the tap is running.",
        "direction": "Sam, rinse your hands.",
        "initial": "The learner looks towards the running tap.",
        "waiting": "The learner remains at the sink without moving their hands under the water.",
        "gestureNoResponse": "The learner looks at the tap, but does not begin rinsing.",
        "independent": "The learner rinses their hands independently.",
        "gestureDone": "The learner moves their hands under the tap and rinses.",
        "modelDone": "The learner watches your demonstration and rinses their hands."
      },
      {
        "id": "dry",
        "name": "Dry hands",
        "icon": "🧻",
        "target": "clean towel",
        "context": "Sam's hands have been rinsed and a clean towel is nearby.",
        "direction": "Sam, dry your hands.",
        "initial": "The learner looks towards the towel.",
        "waiting": "The learner remains still beside the towel.",
        "gestureNoResponse": "The learner looks at the towel but does not reach for it.",
        "independent": "The learner picks up the towel and dries their hands independently.",
        "gestureDone": "The learner picks up the towel and dries their hands.",
        "modelDone": "The learner watches your demonstration and dries their hands."
      }
    ],
    "patterns": [
      {
        "id": "A",
        "name": "Initial practice",
        "needs": [
          1,
          0,
          2,
          0
        ]
      },
      {
        "id": "B",
        "name": "Increasing independence",
        "needs": [
          0,
          0,
          1,
          0
        ]
      },
      {
        "id": "C",
        "name": "Changing support needs",
        "needs": [
          2,
          1,
          0,
          1
        ]
      }
    ]
  },
  {
    "id": "template-school-bag",
    "title": "Packing a school bag",
    "domain": "Daily Living Skills",
    "learnerName": "Ari",
    "learnerProfile": "Fictional learner practising a short packing routine using a visual checklist; responses are scripted and not linked to a diagnosis.",
    "objective": "Rehearse an agreed task direction, response opportunity, prompting, and acknowledgement when packing essential school items.",
    "procedure": "Demonstration protocol (provisional): Say a brief task direction once → simulate a five-second wait → if needed, point at the relevant object → if still needed, model the action → acknowledge completion → advance. This is NOT validated teaching guidance; adapt with expert review.",
    "steps": [
      {
        "id": "open",
        "name": "Open the bag",
        "icon": "🎒",
        "target": "school bag",
        "context": "An empty school bag is on the table.",
        "direction": "Open your bag.",
        "initial": "The learner looks towards the school bag.",
        "waiting": "The learner has not started to open the bag.",
        "gestureNoResponse": "The learner follows your gesture but does not start to open the bag.",
        "independent": "The learner starts to open the bag independently.",
        "gestureDone": "The learner starts to open the bag after your gesture.",
        "modelDone": "The learner watches your model and then starts to open the bag."
      },
      {
        "id": "book",
        "name": "Place the book inside",
        "icon": "📘",
        "target": "book",
        "context": "An exercise book is next to the open bag.",
        "direction": "Put the book in your bag.",
        "initial": "The learner looks towards the book.",
        "waiting": "The learner has not started to place the book inside.",
        "gestureNoResponse": "The learner follows your gesture but does not start to place the book inside.",
        "independent": "The learner starts to place the book inside independently.",
        "gestureDone": "The learner starts to place the book inside after your gesture.",
        "modelDone": "The learner watches your model and then starts to place the book inside."
      },
      {
        "id": "bottle",
        "name": "Place the water bottle inside",
        "icon": "💧",
        "target": "water bottle",
        "context": "A capped water bottle is next to the bag.",
        "direction": "Put the water bottle in your bag.",
        "initial": "The learner looks towards the water bottle.",
        "waiting": "The learner has not started to place the water bottle inside.",
        "gestureNoResponse": "The learner follows your gesture but does not start to place the water bottle inside.",
        "independent": "The learner starts to place the water bottle inside independently.",
        "gestureDone": "The learner starts to place the water bottle inside after your gesture.",
        "modelDone": "The learner watches your model and then starts to place the water bottle inside."
      },
      {
        "id": "close",
        "name": "Close the bag",
        "icon": "🧷",
        "target": "zipper",
        "context": "The required items are in the bag.",
        "direction": "Close your bag.",
        "initial": "The learner looks towards the zipper.",
        "waiting": "The learner has not started to close the bag.",
        "gestureNoResponse": "The learner follows your gesture but does not start to close the bag.",
        "independent": "The learner starts to close the bag independently.",
        "gestureDone": "The learner starts to close the bag after your gesture.",
        "modelDone": "The learner watches your model and then starts to close the bag."
      }
    ],
    "patterns": [
      {
        "id": "A",
        "name": "Initial practice",
        "needs": [
          0,
          1,
          2,
          0
        ]
      },
      {
        "id": "B",
        "name": "Greater independence",
        "needs": [
          0,
          0,
          1,
          0
        ]
      },
      {
        "id": "C",
        "name": "Changing support needs",
        "needs": [
          1,
          2,
          0,
          1
        ]
      }
    ]
  },
  {
    "id": "template-work-packing",
    "title": "Packing an order",
    "domain": "Vocational Education",
    "learnerName": "Rae",
    "learnerProfile": "Fictional learner carrying out a short work-preparation routine using a picture checklist. Responses are controlled and do not represent an individual pupil.",
    "objective": "Practise implementing a planned prompt sequence while a learner packs items for a simple simulated order.",
    "procedure": "Demonstration protocol (provisional): Say a brief task direction once → simulate a five-second wait → if needed, point at the relevant object → if still needed, model the action → acknowledge completion → advance. This is NOT validated teaching guidance; adapt with expert review.",
    "steps": [
      {
        "id": "box",
        "name": "Open the packing box",
        "icon": "📦",
        "target": "packing box",
        "context": "A folded box is placed on the workstation.",
        "direction": "Open the packing box.",
        "initial": "The learner looks towards the packing box.",
        "waiting": "The learner has not started to open the packing box.",
        "gestureNoResponse": "The learner follows your gesture but does not start to open the packing box.",
        "independent": "The learner starts to open the packing box independently.",
        "gestureDone": "The learner starts to open the packing box after your gesture.",
        "modelDone": "The learner watches your model and then starts to open the packing box."
      },
      {
        "id": "item",
        "name": "Place an item into the box",
        "icon": "🧸",
        "target": "item",
        "context": "A lightweight item is ready beside the open box.",
        "direction": "Put the item inside the box.",
        "initial": "The learner looks towards the item.",
        "waiting": "The learner has not started to place an item into the box.",
        "gestureNoResponse": "The learner follows your gesture but does not start to place an item into the box.",
        "independent": "The learner starts to place an item into the box independently.",
        "gestureDone": "The learner starts to place an item into the box after your gesture.",
        "modelDone": "The learner watches your model and then starts to place an item into the box."
      },
      {
        "id": "insert",
        "name": "Add the order slip",
        "icon": "📝",
        "target": "order slip",
        "context": "A printed fictional order slip is beside the box.",
        "direction": "Put the slip in the box.",
        "initial": "The learner looks towards the order slip.",
        "waiting": "The learner has not started to add the order slip.",
        "gestureNoResponse": "The learner follows your gesture but does not start to add the order slip.",
        "independent": "The learner starts to add the order slip independently.",
        "gestureDone": "The learner starts to add the order slip after your gesture.",
        "modelDone": "The learner watches your model and then starts to add the order slip."
      },
      {
        "id": "close",
        "name": "Close the packing box",
        "icon": "📦",
        "target": "box lid",
        "context": "All items are placed inside the box.",
        "direction": "Close the box.",
        "initial": "The learner looks towards the box lid.",
        "waiting": "The learner has not started to close the packing box.",
        "gestureNoResponse": "The learner follows your gesture but does not start to close the packing box.",
        "independent": "The learner starts to close the packing box independently.",
        "gestureDone": "The learner starts to close the packing box after your gesture.",
        "modelDone": "The learner watches your model and then starts to close the packing box."
      }
    ],
    "patterns": [
      {
        "id": "A",
        "name": "Initial practice",
        "needs": [
          1,
          0,
          2,
          0
        ]
      },
      {
        "id": "B",
        "name": "Greater independence",
        "needs": [
          0,
          0,
          1,
          0
        ]
      },
      {
        "id": "C",
        "name": "Changing support needs",
        "needs": [
          2,
          1,
          0,
          1
        ]
      }
    ]
  },
  {
    "id": "clear-meal-area",
    "title": "Clear a meal area",
    "domain": "Daily Living Skills",
    "learnerName": "Ari",
    "learnerProfile": "Fictional learner practising clearing up after a meal. Learner actions and support needs are scripted for rehearsal, not a disability profile.",
    "objective": "Rehearse supporting a learner to clear their eating area using opportunities for independent responding, prompts and acknowledgement.",
    "procedure": "Provisional simulation protocol: Give one brief task direction → select Wait & observe (simulates an opportunity to respond, not actual timing) → if the scripted learner has not responded, point to the object → if still needed, model → acknowledge completion → advance. This is an illustrative rule set and must be reviewed by an instructional specialist.",
    "steps": [
      {
        "id": "clear-meal-area-1",
        "name": "Place used cup on tray",
        "icon": "🥛",
        "iconMode": "manual",
        "target": "cup",
        "context": "Ari is at the clear a meal area station. The cup is available for this step.",
        "direction": "Ari, place used cup on tray.",
        "initial": "Ari looks towards the cup and waits.",
        "waiting": "Ari pauses before starting to place used cup on tray.",
        "gestureNoResponse": "Ari notices your gesture towards the cup but does not start yet.",
        "independent": "Ari completes “Place used cup on tray” independently.",
        "gestureDone": "Ari completes “Place used cup on tray” after your gestural cue.",
        "modelDone": "Ari watches your demonstration and completes “Place used cup on tray”."
      },
      {
        "id": "clear-meal-area-2",
        "name": "Place plate on tray",
        "icon": "🍽️",
        "iconMode": "manual",
        "target": "plate",
        "context": "Ari is at the clear a meal area station. The plate is available for this step.",
        "direction": "Ari, place plate on tray.",
        "initial": "Ari looks towards the plate and waits.",
        "waiting": "Ari pauses before starting to place plate on tray.",
        "gestureNoResponse": "Ari notices your gesture towards the plate but does not start yet.",
        "independent": "Ari completes “Place plate on tray” independently.",
        "gestureDone": "Ari completes “Place plate on tray” after your gestural cue.",
        "modelDone": "Ari watches your demonstration and completes “Place plate on tray”."
      },
      {
        "id": "clear-meal-area-3",
        "name": "Carry tray to collection point",
        "icon": "🧺",
        "iconMode": "manual",
        "target": "collection tray",
        "context": "Ari is at the clear a meal area station. The collection tray is available for this step.",
        "direction": "Ari, carry tray to collection point.",
        "initial": "Ari looks towards the collection tray and waits.",
        "waiting": "Ari pauses before starting to carry tray to collection point.",
        "gestureNoResponse": "Ari notices your gesture towards the collection tray but does not start yet.",
        "independent": "Ari completes “Carry tray to collection point” independently.",
        "gestureDone": "Ari completes “Carry tray to collection point” after your gestural cue.",
        "modelDone": "Ari watches your demonstration and completes “Carry tray to collection point”."
      },
      {
        "id": "clear-meal-area-4",
        "name": "Return to table",
        "icon": "🚶",
        "iconMode": "manual",
        "target": "table",
        "context": "Ari is at the clear a meal area station. The table is available for this step.",
        "direction": "Ari, return to table.",
        "initial": "Ari looks towards the table and waits.",
        "waiting": "Ari pauses before starting to return to table.",
        "gestureNoResponse": "Ari notices your gesture towards the table but does not start yet.",
        "independent": "Ari completes “Return to table” independently.",
        "gestureDone": "Ari completes “Return to table” after your gestural cue.",
        "modelDone": "Ari watches your demonstration and completes “Return to table”."
      }
    ],
    "patterns": [
      {
        "id": "A",
        "name": "Initial rehearsal",
        "needs": [
          0,
          1,
          2,
          0
        ]
      },
      {
        "id": "B",
        "name": "More independent responses",
        "needs": [
          0,
          1,
          0,
          0
        ]
      },
      {
        "id": "C",
        "name": "Mixed support opportunities",
        "needs": [
          1,
          2,
          0,
          1
        ]
      }
    ]
  },
  {
    "id": "wipe-table",
    "title": "Wipe a shared table",
    "domain": "Daily Living Skills",
    "learnerName": "Min",
    "learnerProfile": "Fictional learner taking part in a familiar cleaning routine. The simulation uses scripted, non-predictive responses.",
    "objective": "Practise implementing instruction and graded prompting during a simple table-wiping routine.",
    "procedure": "Provisional simulation protocol: Give one brief task direction → select Wait & observe (simulates an opportunity to respond, not actual timing) → if the scripted learner has not responded, point to the object → if still needed, model → acknowledge completion → advance. This is an illustrative rule set and must be reviewed by an instructional specialist.",
    "steps": [
      {
        "id": "wipe-table-1",
        "name": "Collect cleaning cloth",
        "icon": "🧽",
        "iconMode": "manual",
        "target": "clean cloth",
        "context": "Min is at the wipe a shared table station. The clean cloth is available for this step.",
        "direction": "Min, collect cleaning cloth.",
        "initial": "Min looks towards the clean cloth and waits.",
        "waiting": "Min pauses before starting to collect cleaning cloth.",
        "gestureNoResponse": "Min notices your gesture towards the clean cloth but does not start yet.",
        "independent": "Min completes “Collect cleaning cloth” independently.",
        "gestureDone": "Min completes “Collect cleaning cloth” after your gestural cue.",
        "modelDone": "Min watches your demonstration and completes “Collect cleaning cloth”."
      },
      {
        "id": "wipe-table-2",
        "name": "Wipe the table surface",
        "icon": "🪑",
        "iconMode": "manual",
        "target": "table surface",
        "context": "Min is at the wipe a shared table station. The table surface is available for this step.",
        "direction": "Min, wipe the table surface.",
        "initial": "Min looks towards the table surface and waits.",
        "waiting": "Min pauses before starting to wipe the table surface.",
        "gestureNoResponse": "Min notices your gesture towards the table surface but does not start yet.",
        "independent": "Min completes “Wipe the table surface” independently.",
        "gestureDone": "Min completes “Wipe the table surface” after your gestural cue.",
        "modelDone": "Min watches your demonstration and completes “Wipe the table surface”."
      },
      {
        "id": "wipe-table-3",
        "name": "Place cloth in used-cloth basket",
        "icon": "🧺",
        "iconMode": "manual",
        "target": "used-cloth basket",
        "context": "Min is at the wipe a shared table station. The used-cloth basket is available for this step.",
        "direction": "Min, place cloth in used-cloth basket.",
        "initial": "Min looks towards the used-cloth basket and waits.",
        "waiting": "Min pauses before starting to place cloth in used-cloth basket.",
        "gestureNoResponse": "Min notices your gesture towards the used-cloth basket but does not start yet.",
        "independent": "Min completes “Place cloth in used-cloth basket” independently.",
        "gestureDone": "Min completes “Place cloth in used-cloth basket” after your gestural cue.",
        "modelDone": "Min watches your demonstration and completes “Place cloth in used-cloth basket”."
      },
      {
        "id": "wipe-table-4",
        "name": "Check that the surface is clear",
        "icon": "✅",
        "iconMode": "manual",
        "target": "table",
        "context": "Min is at the wipe a shared table station. The table is available for this step.",
        "direction": "Min, check that the surface is clear.",
        "initial": "Min looks towards the table and waits.",
        "waiting": "Min pauses before starting to check that the surface is clear.",
        "gestureNoResponse": "Min notices your gesture towards the table but does not start yet.",
        "independent": "Min completes “Check that the surface is clear” independently.",
        "gestureDone": "Min completes “Check that the surface is clear” after your gestural cue.",
        "modelDone": "Min watches your demonstration and completes “Check that the surface is clear”."
      }
    ],
    "patterns": [
      {
        "id": "A",
        "name": "Initial rehearsal",
        "needs": [
          1,
          0,
          2,
          0
        ]
      },
      {
        "id": "B",
        "name": "More independent responses",
        "needs": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "id": "C",
        "name": "Mixed support opportunities",
        "needs": [
          2,
          1,
          0,
          1
        ]
      }
    ]
  },
  {
    "id": "fold-towels",
    "title": "Fold and sort towels",
    "domain": "Vocational Education",
    "learnerName": "Jia",
    "learnerProfile": "Fictional learner practising a housekeeping-related task. Observations are authored teaching prompts, not predictions.",
    "objective": "Practise delivering concise directions and adapting prompts while teaching a towel folding and sorting sequence.",
    "procedure": "Provisional simulation protocol: Give one brief task direction → select Wait & observe (simulates an opportunity to respond, not actual timing) → if the scripted learner has not responded, point to the object → if still needed, model → acknowledge completion → advance. This is an illustrative rule set and must be reviewed by an instructional specialist.",
    "steps": [
      {
        "id": "fold-towels-1",
        "name": "Pick up one towel",
        "icon": "🧻",
        "iconMode": "manual",
        "target": "towel",
        "context": "Jia is at the fold and sort towels station. The towel is available for this step.",
        "direction": "Jia, pick up one towel.",
        "initial": "Jia looks towards the towel and waits.",
        "waiting": "Jia pauses before starting to pick up one towel.",
        "gestureNoResponse": "Jia notices your gesture towards the towel but does not start yet.",
        "independent": "Jia completes “Pick up one towel” independently.",
        "gestureDone": "Jia completes “Pick up one towel” after your gestural cue.",
        "modelDone": "Jia watches your demonstration and completes “Pick up one towel”."
      },
      {
        "id": "fold-towels-2",
        "name": "Lay towel flat",
        "icon": "🧺",
        "iconMode": "manual",
        "target": "work surface",
        "context": "Jia is at the fold and sort towels station. The work surface is available for this step.",
        "direction": "Jia, lay towel flat.",
        "initial": "Jia looks towards the work surface and waits.",
        "waiting": "Jia pauses before starting to lay towel flat.",
        "gestureNoResponse": "Jia notices your gesture towards the work surface but does not start yet.",
        "independent": "Jia completes “Lay towel flat” independently.",
        "gestureDone": "Jia completes “Lay towel flat” after your gestural cue.",
        "modelDone": "Jia watches your demonstration and completes “Lay towel flat”."
      },
      {
        "id": "fold-towels-3",
        "name": "Fold towel in half",
        "icon": "👕",
        "iconMode": "manual",
        "target": "towel",
        "context": "Jia is at the fold and sort towels station. The towel is available for this step.",
        "direction": "Jia, fold towel in half.",
        "initial": "Jia looks towards the towel and waits.",
        "waiting": "Jia pauses before starting to fold towel in half.",
        "gestureNoResponse": "Jia notices your gesture towards the towel but does not start yet.",
        "independent": "Jia completes “Fold towel in half” independently.",
        "gestureDone": "Jia completes “Fold towel in half” after your gestural cue.",
        "modelDone": "Jia watches your demonstration and completes “Fold towel in half”."
      },
      {
        "id": "fold-towels-4",
        "name": "Fold towel again",
        "icon": "👕",
        "iconMode": "manual",
        "target": "towel",
        "context": "Jia is at the fold and sort towels station. The towel is available for this step.",
        "direction": "Jia, fold towel again.",
        "initial": "Jia looks towards the towel and waits.",
        "waiting": "Jia pauses before starting to fold towel again.",
        "gestureNoResponse": "Jia notices your gesture towards the towel but does not start yet.",
        "independent": "Jia completes “Fold towel again” independently.",
        "gestureDone": "Jia completes “Fold towel again” after your gestural cue.",
        "modelDone": "Jia watches your demonstration and completes “Fold towel again”."
      },
      {
        "id": "fold-towels-5",
        "name": "Place folded towel in stack",
        "icon": "🗄️",
        "iconMode": "manual",
        "target": "linen shelf",
        "context": "Jia is at the fold and sort towels station. The linen shelf is available for this step.",
        "direction": "Jia, place folded towel in stack.",
        "initial": "Jia looks towards the linen shelf and waits.",
        "waiting": "Jia pauses before starting to place folded towel in stack.",
        "gestureNoResponse": "Jia notices your gesture towards the linen shelf but does not start yet.",
        "independent": "Jia completes “Place folded towel in stack” independently.",
        "gestureDone": "Jia completes “Place folded towel in stack” after your gestural cue.",
        "modelDone": "Jia watches your demonstration and completes “Place folded towel in stack”."
      }
    ],
    "patterns": [
      {
        "id": "A",
        "name": "Initial rehearsal",
        "needs": [
          0,
          1,
          2,
          1,
          0
        ]
      },
      {
        "id": "B",
        "name": "More independent responses",
        "needs": [
          0,
          1,
          0,
          1,
          0
        ]
      },
      {
        "id": "C",
        "name": "Mixed support opportunities",
        "needs": [
          1,
          2,
          0,
          2,
          1
        ]
      }
    ]
  },
  {
    "id": "restock-shelf",
    "title": "Restock a retail shelf",
    "domain": "Vocational Education",
    "learnerName": "Kai",
    "learnerProfile": "Fictional learner practising a retail display routine with labelled shelf positions. Scripted responses do not represent any particular learner.",
    "objective": "Practise implementing a step sequence and prompts for a supported retail restocking activity.",
    "procedure": "Provisional simulation protocol: Give one brief task direction → select Wait & observe (simulates an opportunity to respond, not actual timing) → if the scripted learner has not responded, point to the object → if still needed, model → acknowledge completion → advance. This is an illustrative rule set and must be reviewed by an instructional specialist.",
    "steps": [
      {
        "id": "restock-shelf-1",
        "name": "Check the item label",
        "icon": "🏷️",
        "iconMode": "manual",
        "target": "product label",
        "context": "Kai is at the restock a retail shelf station. The product label is available for this step.",
        "direction": "Kai, check the item label.",
        "initial": "Kai looks towards the product label and waits.",
        "waiting": "Kai pauses before starting to check the item label.",
        "gestureNoResponse": "Kai notices your gesture towards the product label but does not start yet.",
        "independent": "Kai completes “Check the item label” independently.",
        "gestureDone": "Kai completes “Check the item label” after your gestural cue.",
        "modelDone": "Kai watches your demonstration and completes “Check the item label”."
      },
      {
        "id": "restock-shelf-2",
        "name": "Find the matching shelf marker",
        "icon": "🔎",
        "iconMode": "manual",
        "target": "shelf marker",
        "context": "Kai is at the restock a retail shelf station. The shelf marker is available for this step.",
        "direction": "Kai, find the matching shelf marker.",
        "initial": "Kai looks towards the shelf marker and waits.",
        "waiting": "Kai pauses before starting to find the matching shelf marker.",
        "gestureNoResponse": "Kai notices your gesture towards the shelf marker but does not start yet.",
        "independent": "Kai completes “Find the matching shelf marker” independently.",
        "gestureDone": "Kai completes “Find the matching shelf marker” after your gestural cue.",
        "modelDone": "Kai watches your demonstration and completes “Find the matching shelf marker”."
      },
      {
        "id": "restock-shelf-3",
        "name": "Place item on the correct shelf",
        "icon": "📦",
        "iconMode": "manual",
        "target": "shelf",
        "context": "Kai is at the restock a retail shelf station. The shelf is available for this step.",
        "direction": "Kai, place item on the correct shelf.",
        "initial": "Kai looks towards the shelf and waits.",
        "waiting": "Kai pauses before starting to place item on the correct shelf.",
        "gestureNoResponse": "Kai notices your gesture towards the shelf but does not start yet.",
        "independent": "Kai completes “Place item on the correct shelf” independently.",
        "gestureDone": "Kai completes “Place item on the correct shelf” after your gestural cue.",
        "modelDone": "Kai watches your demonstration and completes “Place item on the correct shelf”."
      },
      {
        "id": "restock-shelf-4",
        "name": "Align item with front edge",
        "icon": "📏",
        "iconMode": "manual",
        "target": "display edge",
        "context": "Kai is at the restock a retail shelf station. The display edge is available for this step.",
        "direction": "Kai, align item with front edge.",
        "initial": "Kai looks towards the display edge and waits.",
        "waiting": "Kai pauses before starting to align item with front edge.",
        "gestureNoResponse": "Kai notices your gesture towards the display edge but does not start yet.",
        "independent": "Kai completes “Align item with front edge” independently.",
        "gestureDone": "Kai completes “Align item with front edge” after your gestural cue.",
        "modelDone": "Kai watches your demonstration and completes “Align item with front edge”."
      },
      {
        "id": "restock-shelf-5",
        "name": "Check finished display",
        "icon": "✅",
        "iconMode": "manual",
        "target": "shelf display",
        "context": "Kai is at the restock a retail shelf station. The shelf display is available for this step.",
        "direction": "Kai, check finished display.",
        "initial": "Kai looks towards the shelf display and waits.",
        "waiting": "Kai pauses before starting to check finished display.",
        "gestureNoResponse": "Kai notices your gesture towards the shelf display but does not start yet.",
        "independent": "Kai completes “Check finished display” independently.",
        "gestureDone": "Kai completes “Check finished display” after your gestural cue.",
        "modelDone": "Kai watches your demonstration and completes “Check finished display”."
      }
    ],
    "patterns": [
      {
        "id": "A",
        "name": "Initial rehearsal",
        "needs": [
          0,
          2,
          1,
          0,
          1
        ]
      },
      {
        "id": "B",
        "name": "More independent responses",
        "needs": [
          0,
          1,
          0,
          0,
          0
        ]
      },
      {
        "id": "C",
        "name": "Mixed support opportunities",
        "needs": [
          1,
          0,
          2,
          1,
          2
        ]
      }
    ]
  },
  {
    "id": "prepare-snack-tray",
    "title": "Prepare a simple snack tray",
    "domain": "Daily Living Skills",
    "learnerName": "Noor",
    "learnerProfile": "Fictional learner practising a supervised, no-heat food-serving activity using ready-to-eat items and previously checked dietary needs. Scripted learner responses are for rehearsal only.",
    "objective": "Rehearse task directions and prompts during a supervised snack-serving routine. Actual food safety and individual support plans are outside this simulation.",
    "procedure": "Provisional simulation protocol: Give one brief task direction → select Wait & observe (simulates an opportunity to respond, not actual timing) → if the scripted learner has not responded, point to the object → if still needed, model → acknowledge completion → advance. This is an illustrative rule set and must be reviewed by an instructional specialist.",
    "steps": [
      {
        "id": "prepare-snack-tray-1",
        "name": "Collect an empty tray",
        "icon": "🍽️",
        "iconMode": "manual",
        "target": "tray",
        "context": "Noor is at the prepare a simple snack tray station. The tray is available for this step.",
        "direction": "Noor, collect an empty tray.",
        "initial": "Noor looks towards the tray and waits.",
        "waiting": "Noor pauses before starting to collect an empty tray.",
        "gestureNoResponse": "Noor notices your gesture towards the tray but does not start yet.",
        "independent": "Noor completes “Collect an empty tray” independently.",
        "gestureDone": "Noor completes “Collect an empty tray” after your gestural cue.",
        "modelDone": "Noor watches your demonstration and completes “Collect an empty tray”."
      },
      {
        "id": "prepare-snack-tray-2",
        "name": "Place a plate on tray",
        "icon": "🍽️",
        "iconMode": "manual",
        "target": "plate",
        "context": "Noor is at the prepare a simple snack tray station. The plate is available for this step.",
        "direction": "Noor, place a plate on tray.",
        "initial": "Noor looks towards the plate and waits.",
        "waiting": "Noor pauses before starting to place a plate on tray.",
        "gestureNoResponse": "Noor notices your gesture towards the plate but does not start yet.",
        "independent": "Noor completes “Place a plate on tray” independently.",
        "gestureDone": "Noor completes “Place a plate on tray” after your gestural cue.",
        "modelDone": "Noor watches your demonstration and completes “Place a plate on tray”."
      },
      {
        "id": "prepare-snack-tray-3",
        "name": "Add ready-to-eat snack packet",
        "icon": "🥪",
        "iconMode": "manual",
        "target": "snack packet",
        "context": "Noor is at the prepare a simple snack tray station. The snack packet is available for this step.",
        "direction": "Noor, add ready-to-eat snack packet.",
        "initial": "Noor looks towards the snack packet and waits.",
        "waiting": "Noor pauses before starting to add ready-to-eat snack packet.",
        "gestureNoResponse": "Noor notices your gesture towards the snack packet but does not start yet.",
        "independent": "Noor completes “Add ready-to-eat snack packet” independently.",
        "gestureDone": "Noor completes “Add ready-to-eat snack packet” after your gestural cue.",
        "modelDone": "Noor watches your demonstration and completes “Add ready-to-eat snack packet”."
      },
      {
        "id": "prepare-snack-tray-4",
        "name": "Place a napkin on tray",
        "icon": "🧻",
        "iconMode": "manual",
        "target": "napkin",
        "context": "Noor is at the prepare a simple snack tray station. The napkin is available for this step.",
        "direction": "Noor, place a napkin on tray.",
        "initial": "Noor looks towards the napkin and waits.",
        "waiting": "Noor pauses before starting to place a napkin on tray.",
        "gestureNoResponse": "Noor notices your gesture towards the napkin but does not start yet.",
        "independent": "Noor completes “Place a napkin on tray” independently.",
        "gestureDone": "Noor completes “Place a napkin on tray” after your gestural cue.",
        "modelDone": "Noor watches your demonstration and completes “Place a napkin on tray”."
      },
      {
        "id": "prepare-snack-tray-5",
        "name": "Put finished tray at serving area",
        "icon": "✅",
        "iconMode": "manual",
        "target": "serving area",
        "context": "Noor is at the prepare a simple snack tray station. The serving area is available for this step.",
        "direction": "Noor, put finished tray at serving area.",
        "initial": "Noor looks towards the serving area and waits.",
        "waiting": "Noor pauses before starting to put finished tray at serving area.",
        "gestureNoResponse": "Noor notices your gesture towards the serving area but does not start yet.",
        "independent": "Noor completes “Put finished tray at serving area” independently.",
        "gestureDone": "Noor completes “Put finished tray at serving area” after your gestural cue.",
        "modelDone": "Noor watches your demonstration and completes “Put finished tray at serving area”."
      }
    ],
    "patterns": [
      {
        "id": "A",
        "name": "Initial rehearsal",
        "needs": [
          0,
          1,
          2,
          0,
          1
        ]
      },
      {
        "id": "B",
        "name": "More independent responses",
        "needs": [
          0,
          1,
          0,
          0,
          0
        ]
      },
      {
        "id": "C",
        "name": "Mixed support opportunities",
        "needs": [
          1,
          2,
          0,
          1,
          2
        ]
      }
    ]
  }
];
