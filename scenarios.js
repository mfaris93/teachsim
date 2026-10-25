/* TeachSim V6.7: pre-authored fictional learner outcomes; provisional for specialist review. */
window.TEACHLAB_SEED_SCENARIOS = [
  {
    "id": "handwashing",
    "title": "Handwashing routine",
    "domain": "Daily Living Skills",
    "learnerName": "Sam",
    "learnerProfile": "Sam can follow short directions and is learning to complete a handwashing routine with less support.",
    "objective": "Practise giving a task direction, allowing a response opportunity, using the specified least-to-most prompts, and acknowledging completion.",
    "procedure": "Least-to-most prompting (illustrative): Give the task direction and wait for an independent response. If the learner does not respond or responds incorrectly, use the planned gestural prompt, then wait/observe. If still needed, model the action, then wait/observe. Acknowledge a correct response. If the step remains incomplete after modelling, pause and consult the teaching plan or trainer before proceeding. Confirm prompt hierarchy and error-correction procedures for the learner and task.",
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
        "modelDone": "The learner watches your demonstration and then pumps soap.",
        "correctCriterion": "The learner pumps soap independently.",
        "incorrectResponse": "Sam reaches for the towel instead of the soap dispenser.",
        "unresolvedAfterModel": "Sam observes the demonstration but does not complete the step."
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
        "modelDone": "The learner watches your demonstration and rubs their hands.",
        "correctCriterion": "The learner rubs their soapy hands independently.",
        "incorrectResponse": "Sam moves their hands under the tap instead of rubbing them together.",
        "unresolvedAfterModel": "Sam observes the demonstration but does not complete the step."
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
        "modelDone": "The learner watches your demonstration and rinses their hands.",
        "correctCriterion": "The learner rinses their hands independently.",
        "incorrectResponse": "Sam reaches for the towel before rinsing the soap off.",
        "unresolvedAfterModel": "Sam observes the demonstration but does not complete the step."
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
        "modelDone": "The learner watches your demonstration and dries their hands.",
        "correctCriterion": "The learner picks up the towel and dries their hands independently.",
        "incorrectResponse": "Sam turns away from the clean towel with hands still wet.",
        "unresolvedAfterModel": "Sam observes the demonstration but does not complete the step."
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
        ],
        "responses": [
          [
            "incorrect",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "incorrect",
            "no_response",
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "correct"
          ],
          [
            "incorrect",
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "no_response",
            "incorrect",
            "unresolved"
          ],
          [
            "incorrect",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ]
        ]
      }
    ]
  },
  {
    "id": "template-school-bag",
    "title": "Packing a school bag",
    "domain": "Daily Living Skills",
    "learnerName": "Ari",
    "learnerProfile": "Learner uses a visual checklist to pack school materials and is practising greater independence.",
    "objective": "Rehearse an agreed task direction, response opportunity, prompting, and acknowledgement when packing essential school items.",
    "procedure": "Least-to-most prompting (illustrative): Give the task direction and wait for an independent response. If the learner does not respond or responds incorrectly, use the planned gestural prompt, then wait/observe. If still needed, model the action, then wait/observe. Acknowledge a correct response. If the step remains incomplete after modelling, pause and consult the teaching plan or trainer before proceeding. Confirm prompt hierarchy and error-correction procedures for the learner and task.",
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
        "modelDone": "The learner watches your model and then starts to open the bag.",
        "correctCriterion": "The learner starts to open the bag independently.",
        "incorrectResponse": "Ari reaches for the book without opening the bag.",
        "unresolvedAfterModel": "Ari observes the demonstration but does not complete the step."
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
        "modelDone": "The learner watches your model and then starts to place the book inside.",
        "correctCriterion": "The learner starts to place the book inside independently.",
        "incorrectResponse": "Ari places the book beside the open bag rather than inside.",
        "unresolvedAfterModel": "Ari observes the demonstration but does not complete the step."
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
        "modelDone": "The learner watches your model and then starts to place the water bottle inside.",
        "correctCriterion": "The learner starts to place the water bottle inside independently.",
        "incorrectResponse": "Ari puts the water bottle beside the bag instead of inside.",
        "unresolvedAfterModel": "Ari observes the demonstration but does not complete the step."
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
        "modelDone": "The learner watches your model and then starts to close the bag.",
        "correctCriterion": "The learner starts to close the bag independently.",
        "incorrectResponse": "Ari moves the bag aside while leaving the zipper open.",
        "unresolvedAfterModel": "Ari observes the demonstration but does not complete the step."
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "no_response",
            "no_response",
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "incorrect",
            "correct"
          ],
          [
            "no_response",
            "incorrect",
            "unresolved"
          ],
          [
            "correct"
          ],
          [
            "incorrect",
            "correct"
          ]
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
    "procedure": "Least-to-most prompting (illustrative): Give the task direction and wait for an independent response. If the learner does not respond or responds incorrectly, use the planned gestural prompt, then wait/observe. If still needed, model the action, then wait/observe. Acknowledge a correct response. If the step remains incomplete after modelling, pause and consult the teaching plan or trainer before proceeding. Confirm prompt hierarchy and error-correction procedures for the learner and task.",
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
        "modelDone": "The learner watches your model and then starts to open the packing box.",
        "correctCriterion": "The learner starts to open the packing box independently.",
        "incorrectResponse": "The learner reaches for an item before opening the box.",
        "unresolvedAfterModel": "Rae observes the demonstration but does not complete the step."
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
        "modelDone": "The learner watches your model and then starts to place an item into the box.",
        "correctCriterion": "The learner starts to place an item into the box independently.",
        "incorrectResponse": "The learner places the item beside the box instead of inside.",
        "unresolvedAfterModel": "Rae observes the demonstration but does not complete the step."
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
        "modelDone": "The learner watches your model and then starts to add the order slip.",
        "correctCriterion": "The learner starts to add the order slip independently.",
        "incorrectResponse": "The learner places the order slip outside the box.",
        "unresolvedAfterModel": "Rae observes the demonstration but does not complete the step."
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
        "modelDone": "The learner watches your model and then starts to close the packing box.",
        "correctCriterion": "The learner starts to close the packing box independently.",
        "incorrectResponse": "The learner leaves the box lid open and moves the box aside.",
        "unresolvedAfterModel": "Rae observes the demonstration but does not complete the step."
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
        ],
        "responses": [
          [
            "no_response",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "incorrect",
            "incorrect",
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "no_response",
            "incorrect",
            "unresolved"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ]
        ]
      }
    ]
  },
  {
    "id": "clear-meal-area",
    "title": "Clear a meal area",
    "domain": "Daily Living Skills",
    "learnerName": "Ari",
    "learnerProfile": "Learner is practising clearing used items and tidying a meal space.",
    "objective": "Rehearse supporting a learner to clear their eating area using opportunities for independent responding, prompts and acknowledgement.",
    "procedure": "Least-to-most prompting (illustrative): Give the task direction and wait for an independent response. If the learner does not respond or responds incorrectly, use the planned gestural prompt, then wait/observe. If still needed, model the action, then wait/observe. Acknowledge a correct response. If the step remains incomplete after modelling, pause and consult the teaching plan or trainer before proceeding. Confirm prompt hierarchy and error-correction procedures for the learner and task.",
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
        "modelDone": "Ari watches your demonstration and completes “Place used cup on tray”.",
        "correctCriterion": "Ari completes “Place used cup on tray” independently.",
        "incorrectResponse": "The learner places the used cup on the table instead of the tray.",
        "unresolvedAfterModel": "Ari observes the demonstration but does not complete the step."
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
        "modelDone": "Ari watches your demonstration and completes “Place plate on tray”.",
        "correctCriterion": "Ari completes “Place plate on tray” independently.",
        "incorrectResponse": "The learner puts the plate beside the tray.",
        "unresolvedAfterModel": "Ari observes the demonstration but does not complete the step."
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
        "modelDone": "Ari watches your demonstration and completes “Carry tray to collection point”.",
        "correctCriterion": "Ari completes “Carry tray to collection point” independently.",
        "incorrectResponse": "The learner starts carrying the tray away from the collection point.",
        "unresolvedAfterModel": "Ari observes the demonstration but does not complete the step."
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
        "modelDone": "Ari watches your demonstration and completes “Return to table”.",
        "correctCriterion": "Ari completes “Return to table” independently.",
        "incorrectResponse": "The learner walks to another area instead of returning to the table.",
        "unresolvedAfterModel": "Ari observes the demonstration but does not complete the step."
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "no_response",
            "no_response",
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "no_response",
            "correct"
          ],
          [
            "no_response",
            "incorrect",
            "unresolved"
          ],
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ]
        ]
      }
    ]
  },
  {
    "id": "wipe-table",
    "title": "Wipe a shared table",
    "domain": "Daily Living Skills",
    "learnerName": "Min",
    "learnerProfile": "Learner follows familiar cleaning directions and is practising a table-wiping routine.",
    "objective": "Practise implementing instruction and graded prompting during a simple table-wiping routine.",
    "procedure": "Least-to-most prompting (illustrative): Give the task direction and wait for an independent response. If the learner does not respond or responds incorrectly, use the planned gestural prompt, then wait/observe. If still needed, model the action, then wait/observe. Acknowledge a correct response. If the step remains incomplete after modelling, pause and consult the teaching plan or trainer before proceeding. Confirm prompt hierarchy and error-correction procedures for the learner and task.",
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
        "modelDone": "Min watches your demonstration and completes “Collect cleaning cloth”.",
        "correctCriterion": "Min completes “Collect cleaning cloth” independently.",
        "incorrectResponse": "The learner reaches for a used cloth rather than the clean cloth.",
        "unresolvedAfterModel": "Min observes the demonstration but does not complete the step."
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
        "modelDone": "Min watches your demonstration and completes “Wipe the table surface”.",
        "correctCriterion": "Min completes “Wipe the table surface” independently.",
        "incorrectResponse": "The learner wipes only the cloth itself instead of the table surface.",
        "unresolvedAfterModel": "Min observes the demonstration but does not complete the step."
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
        "modelDone": "Min watches your demonstration and completes “Place cloth in used-cloth basket”.",
        "correctCriterion": "Min completes “Place cloth in used-cloth basket” independently.",
        "incorrectResponse": "The learner puts the used cloth back on the table.",
        "unresolvedAfterModel": "Min observes the demonstration but does not complete the step."
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
        "modelDone": "Min watches your demonstration and completes “Check that the surface is clear”.",
        "correctCriterion": "Min completes “Check that the surface is clear” independently.",
        "incorrectResponse": "The learner turns away while items remain on the table.",
        "unresolvedAfterModel": "Min observes the demonstration but does not complete the step."
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
        ],
        "responses": [
          [
            "no_response",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "incorrect",
            "no_response",
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "correct"
          ],
          [
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "no_response",
            "incorrect",
            "unresolved"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "incorrect",
            "correct"
          ]
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
    "procedure": "Least-to-most prompting (illustrative): Give the task direction and wait for an independent response. If the learner does not respond or responds incorrectly, use the planned gestural prompt, then wait/observe. If still needed, model the action, then wait/observe. Acknowledge a correct response. If the step remains incomplete after modelling, pause and consult the teaching plan or trainer before proceeding. Confirm prompt hierarchy and error-correction procedures for the learner and task.",
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
        "modelDone": "Jia watches your demonstration and completes “Pick up one towel”.",
        "correctCriterion": "Jia completes “Pick up one towel” independently.",
        "incorrectResponse": "The learner picks up two towels instead of one.",
        "unresolvedAfterModel": "Jia observes the demonstration but does not complete the step."
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
        "modelDone": "Jia watches your demonstration and completes “Lay towel flat”.",
        "correctCriterion": "Jia completes “Lay towel flat” independently.",
        "incorrectResponse": "The learner holds the towel upright instead of laying it flat.",
        "unresolvedAfterModel": "Jia observes the demonstration but does not complete the step."
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
        "modelDone": "Jia watches your demonstration and completes “Fold towel in half”.",
        "correctCriterion": "Jia completes “Fold towel in half” independently.",
        "incorrectResponse": "The learner rolls the towel instead of folding it in half.",
        "unresolvedAfterModel": "Jia observes the demonstration but does not complete the step."
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
        "modelDone": "Jia watches your demonstration and completes “Fold towel again”.",
        "correctCriterion": "Jia completes “Fold towel again” independently.",
        "incorrectResponse": "The learner unfolds the towel instead of folding it again.",
        "unresolvedAfterModel": "Jia observes the demonstration but does not complete the step."
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
        "modelDone": "Jia watches your demonstration and completes “Place folded towel in stack”.",
        "correctCriterion": "Jia completes “Place folded towel in stack” independently.",
        "incorrectResponse": "The learner puts the folded towel away from the designated stack.",
        "unresolvedAfterModel": "Jia observes the demonstration but does not complete the step."
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "incorrect",
            "correct"
          ],
          [
            "no_response",
            "incorrect",
            "correct"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "incorrect",
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "no_response",
            "correct"
          ],
          [
            "incorrect",
            "no_response",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "no_response",
            "incorrect",
            "unresolved"
          ],
          [
            "no_response",
            "correct"
          ]
        ]
      }
    ]
  },
  {
    "id": "restock-shelf",
    "title": "Restock a retail shelf",
    "domain": "Vocational Education",
    "learnerName": "Kai",
    "learnerProfile": "Learner is practising placing items into labelled shelf positions.",
    "objective": "Practise implementing a step sequence and prompts for a supported retail restocking activity.",
    "procedure": "Least-to-most prompting (illustrative): Give the task direction and wait for an independent response. If the learner does not respond or responds incorrectly, use the planned gestural prompt, then wait/observe. If still needed, model the action, then wait/observe. Acknowledge a correct response. If the step remains incomplete after modelling, pause and consult the teaching plan or trainer before proceeding. Confirm prompt hierarchy and error-correction procedures for the learner and task.",
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
        "modelDone": "Kai watches your demonstration and completes “Check the item label”.",
        "correctCriterion": "Kai completes “Check the item label” independently.",
        "incorrectResponse": "The learner looks at a different product's label.",
        "unresolvedAfterModel": "Kai observes the demonstration but does not complete the step."
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
        "modelDone": "Kai watches your demonstration and completes “Find the matching shelf marker”.",
        "correctCriterion": "Kai completes “Find the matching shelf marker” independently.",
        "incorrectResponse": "The learner points to a shelf marker for a different item.",
        "unresolvedAfterModel": "Kai observes the demonstration but does not complete the step."
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
        "modelDone": "Kai watches your demonstration and completes “Place item on the correct shelf”.",
        "correctCriterion": "Kai completes “Place item on the correct shelf” independently.",
        "incorrectResponse": "The learner puts the item on a different shelf.",
        "unresolvedAfterModel": "Kai observes the demonstration but does not complete the step."
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
        "modelDone": "Kai watches your demonstration and completes “Align item with front edge”.",
        "correctCriterion": "Kai completes “Align item with front edge” independently.",
        "incorrectResponse": "The learner places the item behind the front edge of the display.",
        "unresolvedAfterModel": "Kai observes the demonstration but does not complete the step."
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
        "modelDone": "Kai watches your demonstration and completes “Check finished display”.",
        "correctCriterion": "Kai completes “Check finished display” independently.",
        "incorrectResponse": "The learner moves on without checking the finished shelf display.",
        "unresolvedAfterModel": "Kai observes the demonstration but does not complete the step."
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "no_response",
            "incorrect",
            "correct"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ]
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "no_response",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "incorrect",
            "incorrect",
            "correct"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "no_response",
            "incorrect",
            "unresolved"
          ]
        ]
      }
    ]
  },
  {
    "id": "prepare-snack-tray",
    "title": "Prepare a simple snack tray",
    "domain": "Daily Living Skills",
    "learnerName": "Noor",
    "learnerProfile": "Learner is practising a supervised, no-heat food-serving routine using ready-to-eat items.",
    "objective": "Rehearse task directions and prompts during a supervised snack-serving routine. Actual food safety and individual support plans are outside this simulation.",
    "procedure": "Least-to-most prompting (illustrative): Give the task direction and wait for an independent response. If the learner does not respond or responds incorrectly, use the planned gestural prompt, then wait/observe. If still needed, model the action, then wait/observe. Acknowledge a correct response. If the step remains incomplete after modelling, pause and consult the teaching plan or trainer before proceeding. Confirm prompt hierarchy and error-correction procedures for the learner and task.",
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
        "modelDone": "Noor watches your demonstration and completes “Collect an empty tray”.",
        "correctCriterion": "Noor completes “Collect an empty tray” independently.",
        "incorrectResponse": "Noor collects a plate instead of an empty tray.",
        "unresolvedAfterModel": "Noor observes the demonstration but does not complete the step."
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
        "modelDone": "Noor watches your demonstration and completes “Place a plate on tray”.",
        "correctCriterion": "Noor completes “Place a plate on tray” independently.",
        "incorrectResponse": "Noor puts the plate beside the tray.",
        "unresolvedAfterModel": "Noor observes the demonstration but does not complete the step."
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
        "modelDone": "Noor watches your demonstration and completes “Add ready-to-eat snack packet”.",
        "correctCriterion": "Noor completes “Add ready-to-eat snack packet” independently.",
        "incorrectResponse": "Noor places the snack packet beside the tray rather than on it.",
        "unresolvedAfterModel": "Noor observes the demonstration but does not complete the step."
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
        "modelDone": "Noor watches your demonstration and completes “Place a napkin on tray”.",
        "correctCriterion": "Noor completes “Place a napkin on tray” independently.",
        "incorrectResponse": "Noor puts the napkin away from the tray.",
        "unresolvedAfterModel": "Noor observes the demonstration but does not complete the step."
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
        "modelDone": "Noor watches your demonstration and completes “Put finished tray at serving area”.",
        "correctCriterion": "Noor completes “Put finished tray at serving area” independently.",
        "incorrectResponse": "Noor leaves the finished tray on the work surface rather than taking it to the serving area.",
        "unresolvedAfterModel": "Noor observes the demonstration but does not complete the step."
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ],
          [
            "no_response",
            "no_response",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "no_response",
            "correct"
          ]
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
        ],
        "responses": [
          [
            "correct"
          ],
          [
            "incorrect",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "correct"
          ],
          [
            "correct"
          ]
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
        ],
        "responses": [
          [
            "incorrect",
            "correct"
          ],
          [
            "incorrect",
            "incorrect",
            "correct"
          ],
          [
            "correct"
          ],
          [
            "incorrect",
            "correct"
          ],
          [
            "no_response",
            "incorrect",
            "unresolved"
          ]
        ]
      }
    ]
  }
];
