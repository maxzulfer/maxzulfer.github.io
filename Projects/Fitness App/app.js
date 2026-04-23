// ==========================================
// Exercise database, grouped by muscle.
// Each entry: { name, sets, reps } — the sets/reps keep the stimulus
// consistent even when the specific exercise varies day-to-day.
// ==========================================
// Each exercise has:
//   name        — display label
//   sets/reps   — defaults used when focus = mixed
//   rep         — "compound" | "iso" | "time"  (focus override category)
//   pattern     — sub-area / movement pattern within the muscle group.
//                 The picker covers each pattern once before doubling up,
//                 so an Incline Dumbbell Press and Incline Barbell Press
//                 (both pattern: "incline-press") won't appear together.
const EXERCISES = {
  chest: [
    { name: "Barbell Bench Press",         sets: 4, reps: "6-8",   rep: "compound", pattern: "flat-press"    },
    { name: "Dumbbell Bench Press",        sets: 4, reps: "8-10",  rep: "compound", pattern: "flat-press"    },
    { name: "Paused Bench Press",          sets: 4, reps: "5-6",   rep: "compound", pattern: "flat-press"    },
    { name: "Machine Chest Press",         sets: 3, reps: "10-12", rep: "compound", pattern: "flat-press"    },
    { name: "Push-ups",                    sets: 3, reps: "AMRAP", rep: "compound", pattern: "flat-press"    },
    { name: "Archer Push-ups",             sets: 3, reps: "6/side", rep: "compound", pattern: "flat-press"    },
    { name: "Deficit Push-ups",            sets: 3, reps: "10-12", rep: "compound", pattern: "flat-press"    },
    { name: "Incline Dumbbell Press",      sets: 3, reps: "8-12",  rep: "compound", pattern: "incline-press" },
    { name: "Incline Barbell Press",       sets: 4, reps: "6-8",   rep: "compound", pattern: "incline-press" },
    { name: "Low-Incline Dumbbell Press",  sets: 3, reps: "8-10",  rep: "compound", pattern: "incline-press" },
    { name: "Landmine Chest Press",        sets: 3, reps: "10-12", rep: "compound", pattern: "incline-press" },
    { name: "Decline Barbell Press",       sets: 3, reps: "6-8",   rep: "compound", pattern: "decline-press" },
    { name: "Dips (Chest Lean)",           sets: 3, reps: "8-12",  rep: "compound", pattern: "decline-press" },
    { name: "Dumbbell Flyes",              sets: 3, reps: "10-12", rep: "iso",      pattern: "flye"          },
    { name: "Incline Dumbbell Flyes",      sets: 3, reps: "10-12", rep: "iso",      pattern: "flye"          },
    { name: "Cable Crossover",             sets: 3, reps: "12-15", rep: "iso",      pattern: "flye"          },
    { name: "Low-to-High Cable Flye",      sets: 3, reps: "12-15", rep: "iso",      pattern: "flye"          },
    { name: "High-to-Low Cable Flye",      sets: 3, reps: "12-15", rep: "iso",      pattern: "flye"          },
    { name: "Single-Arm Cable Flye",       sets: 3, reps: "10/side", rep: "iso",    pattern: "flye"          },
    { name: "Pec Deck",                    sets: 3, reps: "12-15", rep: "iso",      pattern: "flye"          },
    { name: "Svend Press",                 sets: 3, reps: "12-15", rep: "iso",      pattern: "flye"          },
  ],
  back: [
    { name: "Deadlift",                    sets: 4, reps: "5",     rep: "compound", pattern: "deadlift"      },
    { name: "Deficit Deadlift",            sets: 4, reps: "5",     rep: "compound", pattern: "deadlift"      },
    { name: "Sumo Deadlift",               sets: 4, reps: "5",     rep: "compound", pattern: "deadlift"      },
    { name: "Rack Pull",                   sets: 4, reps: "5-6",   rep: "compound", pattern: "deadlift"      },
    { name: "Pull-ups",                    sets: 4, reps: "AMRAP", rep: "compound", pattern: "vertical-pull" },
    { name: "Wide-Grip Pull-ups",          sets: 4, reps: "AMRAP", rep: "compound", pattern: "vertical-pull" },
    { name: "Neutral-Grip Pull-ups",       sets: 4, reps: "AMRAP", rep: "compound", pattern: "vertical-pull" },
    { name: "Chin-ups",                    sets: 3, reps: "AMRAP", rep: "compound", pattern: "vertical-pull" },
    { name: "Lat Pulldown",                sets: 3, reps: "10-12", rep: "compound", pattern: "vertical-pull" },
    { name: "Wide-Grip Lat Pulldown",      sets: 3, reps: "10-12", rep: "compound", pattern: "vertical-pull" },
    { name: "Reverse-Grip Pulldown",       sets: 3, reps: "10-12", rep: "compound", pattern: "vertical-pull" },
    { name: "Barbell Row",                 sets: 4, reps: "6-8",   rep: "compound", pattern: "horizontal-pull" },
    { name: "Pendlay Row",                 sets: 4, reps: "5-6",   rep: "compound", pattern: "horizontal-pull" },
    { name: "Yates Row",                   sets: 3, reps: "8-10",  rep: "compound", pattern: "horizontal-pull" },
    { name: "Dumbbell Row",                sets: 3, reps: "8-10",  rep: "compound", pattern: "horizontal-pull" },
    { name: "Chest-Supported Dumbbell Row", sets: 3, reps: "10-12", rep: "compound", pattern: "horizontal-pull" },
    { name: "Meadows Row",                 sets: 3, reps: "8-10/side", rep: "compound", pattern: "horizontal-pull" },
    { name: "T-Bar Row",                   sets: 3, reps: "8-10",  rep: "compound", pattern: "horizontal-pull" },
    { name: "Seated Cable Row",            sets: 3, reps: "10-12", rep: "compound", pattern: "horizontal-pull" },
    { name: "Wide-Grip Cable Row",         sets: 3, reps: "10-12", rep: "compound", pattern: "horizontal-pull" },
    { name: "Kroc Row",                    sets: 2, reps: "15-20/side", rep: "compound", pattern: "horizontal-pull" },
    { name: "Straight-arm Pulldown",       sets: 3, reps: "12-15", rep: "iso",      pattern: "iso-back"      },
    { name: "Face Pulls",                  sets: 3, reps: "12-15", rep: "iso",      pattern: "iso-back"      },
    { name: "Good Mornings",               sets: 3, reps: "8-10",  rep: "compound", pattern: "lower-back"    },
    { name: "Hyperextensions",             sets: 3, reps: "12-15", rep: "iso",      pattern: "lower-back"    },
  ],
  shoulders: [
    { name: "Overhead Press",              sets: 4, reps: "6-8",   rep: "compound", pattern: "press"         },
    { name: "Push Press",                  sets: 4, reps: "5-6",   rep: "compound", pattern: "press"         },
    { name: "Seated Barbell Press",        sets: 4, reps: "6-8",   rep: "compound", pattern: "press"         },
    { name: "Seated Dumbbell Press",       sets: 4, reps: "8-10",  rep: "compound", pattern: "press"         },
    { name: "Arnold Press",                sets: 3, reps: "8-10",  rep: "compound", pattern: "press"         },
    { name: "Single-Arm Landmine Press",   sets: 3, reps: "8-10/side", rep: "compound", pattern: "press"     },
    { name: "Z-Press",                     sets: 3, reps: "8-10",  rep: "compound", pattern: "press"         },
    { name: "Machine Shoulder Press",      sets: 3, reps: "10-12", rep: "compound", pattern: "press"         },
    { name: "Lateral Raises",              sets: 4, reps: "12-15", rep: "iso",      pattern: "lateral-delt"  },
    { name: "Leaning Lateral Raise",       sets: 3, reps: "12-15/side", rep: "iso", pattern: "lateral-delt"  },
    { name: "Cable Lateral Raise",         sets: 3, reps: "12-15", rep: "iso",      pattern: "lateral-delt"  },
    { name: "Machine Lateral Raise",       sets: 3, reps: "12-15", rep: "iso",      pattern: "lateral-delt"  },
    { name: "Rear Delt Flyes",             sets: 3, reps: "12-15", rep: "iso",      pattern: "rear-delt"     },
    { name: "Reverse Pec Deck",            sets: 3, reps: "12-15", rep: "iso",      pattern: "rear-delt"     },
    { name: "Cable Reverse Flye",          sets: 3, reps: "12-15", rep: "iso",      pattern: "rear-delt"     },
    { name: "Face Pulls",                  sets: 3, reps: "12-15", rep: "iso",      pattern: "rear-delt"     },
    { name: "Front Raises",                sets: 3, reps: "10-12", rep: "iso",      pattern: "front-delt"    },
    { name: "Plate Front Raise",           sets: 3, reps: "10-12", rep: "iso",      pattern: "front-delt"    },
    { name: "Cable Front Raise",           sets: 3, reps: "12-15", rep: "iso",      pattern: "front-delt"    },
    { name: "Upright Row",                 sets: 3, reps: "10-12", rep: "compound", pattern: "upright-row"   },
    { name: "Cable Upright Row",           sets: 3, reps: "10-12", rep: "compound", pattern: "upright-row"   },
    { name: "Shrugs",                      sets: 3, reps: "10-12", rep: "iso",      pattern: "traps"         },
    { name: "Dumbbell Shrugs",             sets: 3, reps: "10-12", rep: "iso",      pattern: "traps"         },
  ],
  biceps: [
    { name: "Barbell Curl",                sets: 4, reps: "8-10",  rep: "compound", pattern: "barbell-curl"  },
    { name: "EZ-Bar Curl",                 sets: 3, reps: "10-12", rep: "compound", pattern: "barbell-curl"  },
    { name: "Wide-Grip Barbell Curl",      sets: 3, reps: "10-12", rep: "iso",      pattern: "barbell-curl"  },
    { name: "Close-Grip Barbell Curl",     sets: 3, reps: "10-12", rep: "iso",      pattern: "barbell-curl"  },
    { name: "Dumbbell Curl",               sets: 3, reps: "10-12", rep: "iso",      pattern: "dumbbell-curl" },
    { name: "Alternating Dumbbell Curl",   sets: 3, reps: "10-12/side", rep: "iso", pattern: "dumbbell-curl" },
    { name: "Incline Dumbbell Curl",       sets: 3, reps: "10-12", rep: "iso",      pattern: "dumbbell-curl" },
    { name: "Spider Curl",                 sets: 3, reps: "10-12", rep: "iso",      pattern: "dumbbell-curl" },
    { name: "Concentration Curl",          sets: 3, reps: "10-12", rep: "iso",      pattern: "dumbbell-curl" },
    { name: "Hammer Curl",                 sets: 3, reps: "10-12", rep: "iso",      pattern: "hammer"        },
    { name: "Cross-Body Hammer Curl",      sets: 3, reps: "10/side", rep: "iso",    pattern: "hammer"        },
    { name: "Zottman Curl",                sets: 3, reps: "10-12", rep: "iso",      pattern: "hammer"        },
    { name: "Reverse Curl",                sets: 3, reps: "10-12", rep: "iso",      pattern: "hammer"        },
    { name: "Preacher Curl",               sets: 3, reps: "10-12", rep: "iso",      pattern: "preacher"      },
    { name: "Machine Preacher Curl",       sets: 3, reps: "10-12", rep: "iso",      pattern: "preacher"      },
    { name: "Cable Curl",                  sets: 3, reps: "12-15", rep: "iso",      pattern: "cable-curl"    },
    { name: "Cable Rope Curl",             sets: 3, reps: "12-15", rep: "iso",      pattern: "cable-curl"    },
    { name: "Bayesian Cable Curl",         sets: 3, reps: "10-12/side", rep: "iso", pattern: "cable-curl"    },
    { name: "Chin-up",                     sets: 3, reps: "AMRAP", rep: "compound", pattern: "compound-pull" },
  ],
  triceps: [
    { name: "Close-Grip Bench",            sets: 4, reps: "8-10",  rep: "compound", pattern: "compound-press" },
    { name: "Board Press",                 sets: 4, reps: "5-6",   rep: "compound", pattern: "compound-press" },
    { name: "Dips (Triceps)",              sets: 3, reps: "8-12",  rep: "compound", pattern: "dip"           },
    { name: "Bench Dips",                  sets: 3, reps: "12-15", rep: "compound", pattern: "dip"           },
    { name: "Diamond Push-ups",            sets: 3, reps: "AMRAP", rep: "compound", pattern: "dip"           },
    { name: "Skull Crushers",              sets: 3, reps: "8-10",  rep: "iso",      pattern: "skullcrusher"  },
    { name: "JM Press",                    sets: 3, reps: "8-10",  rep: "iso",      pattern: "skullcrusher"  },
    { name: "Tate Press",                  sets: 3, reps: "10-12", rep: "iso",      pattern: "skullcrusher"  },
    { name: "Overhead Tricep Ext.",        sets: 3, reps: "10-12", rep: "iso",      pattern: "overhead-ext"  },
    { name: "Single-Arm DB Overhead Ext.", sets: 3, reps: "10-12/side", rep: "iso", pattern: "overhead-ext"  },
    { name: "Overhead Cable Ext.",         sets: 3, reps: "12-15", rep: "iso",      pattern: "overhead-ext"  },
    { name: "Tricep Pushdown",             sets: 3, reps: "10-12", rep: "iso",      pattern: "pushdown"      },
    { name: "Rope Pushdown",               sets: 3, reps: "12-15", rep: "iso",      pattern: "pushdown"      },
    { name: "V-Bar Pushdown",              sets: 3, reps: "10-12", rep: "iso",      pattern: "pushdown"      },
    { name: "Reverse-Grip Pushdown",       sets: 3, reps: "10-12", rep: "iso",      pattern: "pushdown"      },
    { name: "Dumbbell Kickback",           sets: 3, reps: "12-15", rep: "iso",      pattern: "kickback"      },
    { name: "Cable Kickback",              sets: 3, reps: "12-15/side", rep: "iso", pattern: "kickback"      },
  ],
  legs: [
    { name: "Back Squat",                  sets: 4, reps: "5-8",   rep: "compound", pattern: "quads"         },
    { name: "High-Bar Back Squat",         sets: 4, reps: "6-8",   rep: "compound", pattern: "quads"         },
    { name: "Front Squat",                 sets: 4, reps: "6-8",   rep: "compound", pattern: "quads"         },
    { name: "Paused Squat",                sets: 4, reps: "5",     rep: "compound", pattern: "quads"         },
    { name: "Tempo Squat (3-1-1)",         sets: 3, reps: "6-8",   rep: "compound", pattern: "quads"         },
    { name: "Zercher Squat",               sets: 3, reps: "6-8",   rep: "compound", pattern: "quads"         },
    { name: "Safety-Bar Squat",            sets: 4, reps: "6-8",   rep: "compound", pattern: "quads"         },
    { name: "Hack Squat",                  sets: 4, reps: "8-10",  rep: "compound", pattern: "quads"         },
    { name: "Pendulum Squat",              sets: 3, reps: "8-10",  rep: "compound", pattern: "quads"         },
    { name: "Goblet Squat",                sets: 3, reps: "10-12", rep: "compound", pattern: "quads"         },
    { name: "Leg Press",                   sets: 4, reps: "8-12",  rep: "compound", pattern: "quads"         },
    { name: "Single-Leg Press",            sets: 3, reps: "10-12/side", rep: "compound", pattern: "quads"    },
    { name: "Leg Extension",               sets: 3, reps: "12-15", rep: "iso",      pattern: "quads"         },
    { name: "Single-Leg Extension",        sets: 3, reps: "10/side", rep: "iso",    pattern: "quads"         },
    { name: "Sissy Squat",                 sets: 3, reps: "10-12", rep: "iso",      pattern: "quads"         },
    { name: "Romanian Deadlift",           sets: 4, reps: "8-10",  rep: "compound", pattern: "hamstrings"    },
    { name: "Stiff-Leg Deadlift",          sets: 3, reps: "8-10",  rep: "compound", pattern: "hamstrings"    },
    { name: "Trap-Bar Deadlift",           sets: 4, reps: "6-8",   rep: "compound", pattern: "hamstrings"    },
    { name: "Leg Curl",                    sets: 3, reps: "10-12", rep: "iso",      pattern: "hamstrings"    },
    { name: "Seated Leg Curl",             sets: 3, reps: "10-12", rep: "iso",      pattern: "hamstrings"    },
    { name: "Single-Leg Leg Curl",         sets: 3, reps: "10/side", rep: "iso",    pattern: "hamstrings"    },
    { name: "Nordic Curl",                 sets: 3, reps: "6-8",   rep: "iso",      pattern: "hamstrings"    },
    { name: "Glute-Ham Raise",             sets: 3, reps: "8-10",  rep: "iso",      pattern: "hamstrings"    },
    { name: "Hip Thrust",                  sets: 3, reps: "8-10",  rep: "compound", pattern: "glutes"        },
    { name: "B-Stance Hip Thrust",         sets: 3, reps: "10/side", rep: "compound", pattern: "glutes"      },
    { name: "Cable Pull-through",          sets: 3, reps: "12-15", rep: "iso",      pattern: "glutes"        },
    { name: "Walking Lunges",              sets: 3, reps: "10/leg", rep: "compound", pattern: "unilateral"   },
    { name: "Reverse Lunges",              sets: 3, reps: "10/leg", rep: "compound", pattern: "unilateral"   },
    { name: "Bulgarian Split Squat",       sets: 3, reps: "8/leg", rep: "compound", pattern: "unilateral"   },
    { name: "Step-ups",                    sets: 3, reps: "10/leg", rep: "compound", pattern: "unilateral"   },
    { name: "Box Step-ups (Weighted)",     sets: 3, reps: "8/leg", rep: "compound", pattern: "unilateral"   },
    { name: "Adductor Machine",            sets: 3, reps: "12-15", rep: "iso",      pattern: "adductor-abductor" },
    { name: "Abductor Machine",            sets: 3, reps: "12-15", rep: "iso",      pattern: "adductor-abductor" },
  ],
  calves: [
    { name: "Standing Calf Raise",         sets: 4, reps: "10-12", rep: "iso",      pattern: "standing"      },
    { name: "Donkey Calf Raise",           sets: 3, reps: "12-15", rep: "iso",      pattern: "standing"      },
    { name: "Single-Leg Calf Raise",       sets: 3, reps: "12/leg", rep: "iso",     pattern: "standing"      },
    { name: "Smith Machine Calf Raise",    sets: 3, reps: "10-12", rep: "iso",      pattern: "standing"      },
    { name: "Seated Calf Raise",           sets: 4, reps: "12-15", rep: "iso",      pattern: "seated"        },
    { name: "Leg Press Calf Raise",        sets: 3, reps: "12-15", rep: "iso",      pattern: "press"         },
    { name: "Tibialis Raise",              sets: 3, reps: "15-20", rep: "iso",      pattern: "tibialis"      },
    { name: "Farmer's Walk on Toes",       sets: 3, reps: "30s",   rep: "time",     pattern: "tibialis"      },
  ],
  core: [
    { name: "Plank",                       sets: 3, reps: "45-60s", rep: "time",    pattern: "anti-extension" },
    { name: "Weighted Plank",              sets: 3, reps: "30-45s", rep: "time",    pattern: "anti-extension" },
    { name: "RKC Plank",                   sets: 3, reps: "20-30s", rep: "time",    pattern: "anti-extension" },
    { name: "Hollow Body Hold",            sets: 3, reps: "20-30s", rep: "time",    pattern: "anti-extension" },
    { name: "Ab Wheel Rollout",            sets: 3, reps: "8-10",   rep: "iso",     pattern: "anti-extension" },
    { name: "Dead Bug",                    sets: 3, reps: "10/side", rep: "iso",    pattern: "anti-extension" },
    { name: "Bird Dog",                    sets: 3, reps: "10/side", rep: "iso",    pattern: "anti-extension" },
    { name: "Side Plank",                  sets: 3, reps: "30s/side", rep: "time",  pattern: "anti-lateral"   },
    { name: "Copenhagen Plank",            sets: 3, reps: "20s/side", rep: "time",  pattern: "anti-lateral"   },
    { name: "Pallof Press",                sets: 3, reps: "10/side", rep: "iso",    pattern: "anti-rotation"  },
    { name: "Hanging Leg Raise",           sets: 3, reps: "10-12",  rep: "iso",     pattern: "flexion"        },
    { name: "Hanging Knee Raise",          sets: 3, reps: "12-15",  rep: "iso",     pattern: "flexion"        },
    { name: "Toes-to-Bar",                 sets: 3, reps: "8-10",   rep: "iso",     pattern: "flexion"        },
    { name: "Cable Crunch",                sets: 3, reps: "12-15",  rep: "iso",     pattern: "flexion"        },
    { name: "Weighted Decline Crunch",     sets: 3, reps: "10-12",  rep: "iso",     pattern: "flexion"        },
    { name: "Bicycle Crunch",              sets: 3, reps: "20 total", rep: "iso",   pattern: "flexion"        },
    { name: "Russian Twists",              sets: 3, reps: "20 total", rep: "iso",   pattern: "rotation"       },
    { name: "Landmine Twist",              sets: 3, reps: "10/side", rep: "iso",    pattern: "rotation"       },
    { name: "Cable Woodchopper",           sets: 3, reps: "12/side", rep: "iso",    pattern: "rotation"       },
    { name: "Mountain Climbers",           sets: 3, reps: "30s",    rep: "time",    pattern: "dynamic"        },
  ],
};

// Session focus: rotates automatically to vary the stimulus between workouts.
// Applied only to exercises whose `rep` tag is "compound" or "iso" —
// time-based (plank, etc.) stays as written.
const FOCUS_SCHEMES = {
  strength:    { label: "Strength",    compound: { sets: 5, reps: "4-6"   }, iso: { sets: 4, reps: "6-8"   } },
  hypertrophy: { label: "Hypertrophy", compound: { sets: 4, reps: "8-10"  }, iso: { sets: 3, reps: "10-12" } },
  endurance:   { label: "Endurance",   compound: { sets: 3, reps: "12-15" }, iso: { sets: 3, reps: "15-20" } },
  mixed:       { label: "Mixed",       compound: null,                       iso: null                      },
};
const FOCUS_ORDER = ["strength", "hypertrophy", "endurance", "mixed"];

const MUSCLE_GROUPS = Object.keys(EXERCISES);
const INTENSITY_COUNT = { light: 3, normal: 4, heavy: 5 };
const HISTORY_WINDOW = 3; // avoid exercises used in last N sessions

// ==========================================
// State + localStorage
// ==========================================
const STORAGE_KEYS = {
  selected: "fitness.selected",
  today:    "fitness.today",
  history:  "fitness.history",
  saved:    "fitness.saved",
};

const state = {
  selected: new Set(loadJSON(STORAGE_KEYS.selected, [])),
  today:    loadJSON(STORAGE_KEYS.today, null),
  history:  loadJSON(STORAGE_KEYS.history, []),
  saved:    loadJSON(STORAGE_KEYS.saved, []),
};

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}
function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
const saveSelected = () => saveJSON(STORAGE_KEYS.selected, [...state.selected]);
const saveHistory  = () => saveJSON(STORAGE_KEYS.history, state.history);
const saveSaved    = () => saveJSON(STORAGE_KEYS.saved, state.saved);
function saveToday() {
  if (state.today) saveJSON(STORAGE_KEYS.today, state.today);
  else localStorage.removeItem(STORAGE_KEYS.today);
}

// ==========================================
// Workout generation
// ==========================================
function recentExerciseNames(muscle) {
  const recent = new Set();
  for (const w of state.history.slice(0, HISTORY_WINDOW)) {
    const group = w.groups && w.groups[muscle];
    if (!group) continue;
    for (const ex of group) recent.add(ex.name);
  }
  return recent;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Apply the session focus to an exercise.  For "mixed" (or time-based
// movements), keep the per-exercise defaults so form-driven reps still make sense.
function applyFocus(ex, focusKey) {
  const scheme = FOCUS_SCHEMES[focusKey] || FOCUS_SCHEMES.mixed;
  const override = scheme[ex.rep];  // "compound" | "iso" | undefined
  if (!override) return { name: ex.name, sets: ex.sets, reps: ex.reps, weight: "" };
  return { name: ex.name, sets: override.sets, reps: override.reps, weight: "" };
}

// Pick `count` exercises from a muscle, covering as many distinct movement
// patterns as possible before doubling up on any pattern. Within each
// pattern, prefer exercises not used in the last few sessions.
function pickForMuscle(muscle, count, focusKey, alreadyUsed = new Set()) {
  const pool = EXERCISES[muscle] || [];
  if (pool.length === 0) return [];

  const recent = recentExerciseNames(muscle);
  const available = pool.filter(e => !alreadyUsed.has(e.name));

  // Bucket by pattern; order each bucket: fresh shuffled, then stale shuffled.
  const byPattern = {};
  for (const ex of available) {
    const key = ex.pattern || "_other";
    (byPattern[key] = byPattern[key] || []).push(ex);
  }
  for (const key of Object.keys(byPattern)) {
    const fresh = shuffle(byPattern[key].filter(e => !recent.has(e.name)));
    const stale = shuffle(byPattern[key].filter(e =>  recent.has(e.name)));
    byPattern[key] = [...fresh, ...stale];
  }

  // Round-robin: take one exercise from each pattern in random order, then
  // loop again for seconds, etc. Stops when count reached or all empty.
  const patternOrder = shuffle(Object.keys(byPattern));
  const result = [];
  let progressed = true;
  while (result.length < count && progressed) {
    progressed = false;
    for (const key of patternOrder) {
      if (result.length >= count) break;
      const ex = byPattern[key].shift();
      if (ex) {
        result.push(ex);
        progressed = true;
      }
    }
  }

  return result.map(e => applyFocus(e, focusKey));
}

// Pick a focus that differs from the most recent completed workouts so the
// rep scheme keeps rotating even if the user doesn't touch anything.
function nextFocus() {
  const recent = state.history.slice(0, 2).map(w => w.focus).filter(Boolean);
  const candidates = FOCUS_ORDER.filter(f => !recent.includes(f));
  const pool = candidates.length ? candidates : FOCUS_ORDER;
  return pool[Math.floor(Math.random() * pool.length)];
}

function generateWorkout(muscles, intensity, focusKey) {
  const focus = focusKey || nextFocus();
  const perGroup = INTENSITY_COUNT[intensity] || 4;
  const groups = {};
  for (const m of muscles) groups[m] = pickForMuscle(m, perGroup, focus);
  return {
    date: new Date().toISOString(),
    intensity,
    focus,
    muscles: [...muscles],
    groups,
    sessionSeconds: 0,
  };
}

function swapExercise(muscle, index) {
  if (!state.today) return;
  const group = state.today.groups[muscle];
  if (!group || !group[index]) return;
  const usedNames = new Set(group.map(e => e.name));
  const [replacement] = pickForMuscle(muscle, 1, state.today.focus, usedNames);
  if (!replacement) return; // no alternatives left in pool
  group[index] = replacement;
  saveToday();
  renderToday();
}

// ==========================================
// Streak: consecutive days with a completed workout, ending today or yesterday.
// ==========================================
function dayKey(d) {
  const x = new Date(d);
  return `${x.getFullYear()}-${x.getMonth()}-${x.getDate()}`;
}

function computeStreak() {
  if (state.history.length === 0) return 0;
  const days = new Set(state.history.map(w => dayKey(w.completedAt || w.date)));
  const today = new Date();
  const yesterday = new Date(); yesterday.setDate(today.getDate() - 1);

  let cursor;
  if (days.has(dayKey(today))) cursor = today;
  else if (days.has(dayKey(yesterday))) cursor = yesterday;
  else return 0;

  let count = 0;
  while (days.has(dayKey(cursor))) {
    count++;
    cursor = new Date(cursor);
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}

// ==========================================
// Timers (session stopwatch + rest countdown)
// ==========================================
const timers = {
  sessionInterval: null,
  sessionStart:    null,   // epoch ms when started (null = paused)
  sessionOffset:   0,      // accumulated ms before current start
  restInterval:    null,
  restRemaining:   0,      // seconds
};

function formatMMSS(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function sessionElapsedSeconds() {
  const running = timers.sessionStart ? (Date.now() - timers.sessionStart) : 0;
  return Math.floor((timers.sessionOffset + running) / 1000);
}

function updateSessionDisplay() {
  const el = document.getElementById("session-timer");
  if (el) el.textContent = formatMMSS(sessionElapsedSeconds());
}

function startSession() {
  if (timers.sessionStart) {
    // Pause
    timers.sessionOffset += Date.now() - timers.sessionStart;
    timers.sessionStart = null;
    document.getElementById("session-start").textContent = "Start";
  } else {
    timers.sessionStart = Date.now();
    document.getElementById("session-start").textContent = "Pause";
    if (!timers.sessionInterval) {
      timers.sessionInterval = setInterval(updateSessionDisplay, 500);
    }
  }
}

function resetSession() {
  timers.sessionOffset = 0;
  if (timers.sessionStart) timers.sessionStart = Date.now();
  updateSessionDisplay();
}

function startRest(seconds) {
  stopRest();
  timers.restRemaining = seconds;
  updateRestDisplay();
  timers.restInterval = setInterval(() => {
    timers.restRemaining -= 1;
    updateRestDisplay();
    if (timers.restRemaining <= 0) {
      stopRest();
      try {
        if (navigator.vibrate) navigator.vibrate([200, 80, 200]);
      } catch {}
      beep();
    }
  }, 1000);
}

function stopRest() {
  if (timers.restInterval) clearInterval(timers.restInterval);
  timers.restInterval = null;
  timers.restRemaining = 0;
  updateRestDisplay();
}

function updateRestDisplay() {
  const el = document.getElementById("rest-timer");
  if (el) el.textContent = formatMMSS(timers.restRemaining);
}

// Tiny beep via WebAudio (no asset needed).
function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = 880;
    o.connect(g); g.connect(ctx.destination);
    g.gain.setValueAtTime(0.15, ctx.currentTime);
    o.start();
    o.stop(ctx.currentTime + 0.25);
    o.onended = () => ctx.close();
  } catch {}
}

// ==========================================
// Rendering
// ==========================================
const $  = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

// Find the most recent logged weight for an exercise across history.
// Returns { weight, date } or null if never logged with a weight.
function findLastWeight(exerciseName) {
  for (const w of state.history) {
    for (const m of w.muscles) {
      const group = w.groups && w.groups[m];
      if (!group) continue;
      for (const ex of group) {
        if (ex.name === exerciseName && ex.weight) {
          return { weight: String(ex.weight), date: w.completedAt || w.date };
        }
      }
    }
  }
  return null;
}

function renderMuscleGrid() {
  const grid = $("#muscle-grid");
  grid.innerHTML = "";
  for (const m of MUSCLE_GROUPS) {
    const chip = document.createElement("div");
    chip.className = "muscle-chip" + (state.selected.has(m) ? " selected" : "");
    chip.textContent = m.charAt(0).toUpperCase() + m.slice(1);
    chip.addEventListener("click", () => {
      if (state.selected.has(m)) state.selected.delete(m);
      else state.selected.add(m);
      saveSelected();
      renderMuscleGrid();
    });
    grid.appendChild(chip);
  }
}

function renderToday() {
  const empty   = $("#today-empty");
  const content = $("#today-content");
  if (!state.today) {
    empty.classList.remove("hidden");
    content.classList.add("hidden");
    return;
  }
  empty.classList.add("hidden");
  content.classList.remove("hidden");

  const d = new Date(state.today.date);
  $("#today-title").textContent = "Today's Workout";
  const focusLabel = (FOCUS_SCHEMES[state.today.focus] || FOCUS_SCHEMES.mixed).label;
  $("#today-subtitle").textContent =
    `${d.toLocaleDateString(undefined, { weekday:"long", month:"short", day:"numeric" })} · ${focusLabel} · ${state.today.intensity} · ${state.today.muscles.join(", ")}`;

  const list = $("#today-list");
  list.innerHTML = "";
  for (const m of state.today.muscles) {
    const block = document.createElement("div");
    block.className = "group-block";

    const h3 = document.createElement("h3");
    h3.textContent = m;
    block.appendChild(h3);

    state.today.groups[m].forEach((ex, i) => {
      const last = findLastWeight(ex.name);
      const lastLine = last
        ? `<div class="ex-last">Last: ${escapeHTML(last.weight)}</div>`
        : "";
      const placeholder = last ? escapeHTML(last.weight) : "weight";
      const row = document.createElement("div");
      row.className = "exercise";
      row.innerHTML = `
        <div class="ex-main">
          <div class="ex-name">${escapeHTML(ex.name)}</div>
          <div class="ex-sets">${ex.sets} × ${ex.reps}</div>
          ${lastLine}
        </div>
        <div class="ex-controls">
          <input type="text" class="weight-input" placeholder="${placeholder}"
                 value="${ex.weight ? escapeHTML(String(ex.weight)) : ""}"
                 data-muscle="${m}" data-index="${i}" />
          <button class="swap-btn" data-muscle="${m}" data-index="${i}" title="Swap for a different exercise">↻</button>
        </div>
      `;
      block.appendChild(row);
    });

    list.appendChild(block);
  }

  // Wire weight inputs + swap buttons.
  list.querySelectorAll(".weight-input").forEach(inp => {
    inp.addEventListener("change", (e) => {
      const mm = e.target.dataset.muscle;
      const i  = Number(e.target.dataset.index);
      state.today.groups[mm][i].weight = e.target.value.trim();
      saveToday();
    });
  });
  list.querySelectorAll(".swap-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const mm = btn.dataset.muscle;
      const i  = Number(btn.dataset.index);
      swapExercise(mm, i);
    });
  });

  updateSessionDisplay();
  updateRestDisplay();
}

// ==========================================
// Saved workouts (templates)
// ==========================================
function saveCurrentWorkout() {
  if (!state.today) return;
  const defaultName = `${state.today.muscles.join(", ")} (${
    (FOCUS_SCHEMES[state.today.focus] || FOCUS_SCHEMES.mixed).label
  })`;
  const raw = prompt("Name this workout:", defaultName);
  if (raw === null) return;
  const name = raw.trim() || defaultName;

  // Strip per-set logged weight; keep the routine structure.
  const groups = {};
  for (const m of state.today.muscles) {
    groups[m] = (state.today.groups[m] || []).map(ex => ({
      name: ex.name, sets: ex.sets, reps: ex.reps, weight: "",
    }));
  }
  state.saved.unshift({
    id:        Date.now().toString(36),
    name,
    intensity: state.today.intensity,
    focus:     state.today.focus,
    muscles:   [...state.today.muscles],
    groups,
    createdAt: new Date().toISOString(),
  });
  saveSaved();
  alert(`Saved "${name}"`);
}

function useSavedWorkout(id) {
  const tpl = state.saved.find(s => s.id === id);
  if (!tpl) return;
  // Deep-copy so editing today doesn't mutate the template.
  const groups = {};
  for (const m of tpl.muscles) {
    groups[m] = (tpl.groups[m] || []).map(ex => ({ ...ex, weight: "" }));
  }
  state.today = {
    date: new Date().toISOString(),
    intensity: tpl.intensity,
    focus:     tpl.focus,
    muscles:   [...tpl.muscles],
    groups,
    sessionSeconds: 0,
    fromSaved: tpl.id,
  };
  saveToday();
  // Reset session timer for fresh session.
  timers.sessionOffset = 0;
  timers.sessionStart  = null;
  stopRest();
  showTab("today");
}

function deleteSavedWorkout(id) {
  const tpl = state.saved.find(s => s.id === id);
  if (!tpl) return;
  if (!confirm(`Delete "${tpl.name}"?`)) return;
  state.saved = state.saved.filter(s => s.id !== id);
  saveSaved();
  renderSaved();
}

function renderSaved() {
  const listEl = $("#saved-list");
  listEl.innerHTML = "";

  if (state.saved.length === 0) {
    const p = document.createElement("p");
    p.className = "muted";
    p.textContent = "No saved workouts yet. Build one in the Today tab and tap Save Workout.";
    listEl.appendChild(p);
    return;
  }

  for (const tpl of state.saved) {
    const card = document.createElement("div");
    card.className = "history-card";
    const focusLabel = (FOCUS_SCHEMES[tpl.focus] || FOCUS_SCHEMES.mixed).label;
    const items = tpl.muscles.flatMap(m =>
      (tpl.groups[m] || []).map(ex =>
        `<li>${escapeHTML(m)}: ${escapeHTML(ex.name)} — ${ex.sets}×${escapeHTML(String(ex.reps))}</li>`
      )
    ).join("");
    card.innerHTML = `
      <div class="date">${escapeHTML(tpl.muscles.join(" · "))} <span class="muted">(${escapeHTML(focusLabel)} · ${escapeHTML(tpl.intensity)})</span></div>
      <div class="groups"><strong>${escapeHTML(tpl.name)}</strong></div>
      <details><summary>Show exercises</summary><ul>${items}</ul></details>
      <div class="actions" style="margin-top:10px;">
        <button class="primary" data-use="${tpl.id}">Use</button>
        <button class="danger" data-delete="${tpl.id}">Delete</button>
      </div>
    `;
    listEl.appendChild(card);
  }

  listEl.querySelectorAll("[data-use]").forEach(btn => {
    btn.addEventListener("click", () => useSavedWorkout(btn.dataset.use));
  });
  listEl.querySelectorAll("[data-delete]").forEach(btn => {
    btn.addEventListener("click", () => deleteSavedWorkout(btn.dataset.delete));
  });
}

function renderHistory() {
  const statsEl = $("#history-stats");
  const listEl  = $("#history-list");
  statsEl.innerHTML = "";
  listEl.innerHTML  = "";

  const h = state.history;
  const totalWorkouts = h.length;
  const muscleCounts = {};
  for (const w of h) {
    for (const m of w.muscles) muscleCounts[m] = (muscleCounts[m] || 0) + 1;
  }
  const topMuscle = Object.entries(muscleCounts).sort((a,b) => b[1]-a[1])[0];
  const last = h[0] ? new Date(h[0].completedAt || h[0].date) : null;
  const streak = computeStreak();

  const stats = [
    { num: totalWorkouts, label: "Workouts" },
    { num: `${streak} 🔥`, label: "Day Streak" },
    { num: topMuscle ? topMuscle[0] : "—", label: "Most Trained" },
    { num: last ? last.toLocaleDateString(undefined, { month:"short", day:"numeric" }) : "—", label: "Last Session" },
  ];
  for (const s of stats) {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<div class="num">${s.num}</div><div class="label">${s.label}</div>`;
    statsEl.appendChild(card);
  }

  if (totalWorkouts === 0) {
    const p = document.createElement("p");
    p.className = "muted";
    p.textContent = "No completed workouts yet.";
    listEl.appendChild(p);
    return;
  }

  for (const w of h) {
    const card = document.createElement("div");
    card.className = "history-card";
    const d = new Date(w.completedAt || w.date);
    const dateStr = d.toLocaleDateString(undefined, { weekday:"short", month:"short", day:"numeric" });
    const duration = w.sessionSeconds ? ` · ${formatMMSS(w.sessionSeconds)}` : "";

    const exItems = w.muscles.flatMap(m =>
      (w.groups[m] || []).map(ex => {
        const wt = ex.weight ? ` @ ${escapeHTML(String(ex.weight))}` : "";
        return `<li>${m}: ${escapeHTML(ex.name)} — ${ex.sets}×${ex.reps}${wt}</li>`;
      })
    ).join("");

    card.innerHTML = `
      <div class="date">${dateStr}${duration}</div>
      <div class="groups">${w.muscles.join(" · ")} <span class="muted">(${(FOCUS_SCHEMES[w.focus] || FOCUS_SCHEMES.mixed).label} · ${w.intensity})</span></div>
      <details><summary>Show exercises</summary><ul>${exItems}</ul></details>
    `;
    listEl.appendChild(card);
  }
}

function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ==========================================
// Tabs
// ==========================================
function showTab(name) {
  $$(".tab").forEach(el => el.classList.toggle("active", el.id === name));
  $$(".tab-btn").forEach(el => el.classList.toggle("active", el.dataset.tab === name));
  if (name === "today")   renderToday();
  if (name === "saved")   renderSaved();
  if (name === "history") renderHistory();
}

// ==========================================
// Export
// ==========================================
function exportHistory() {
  const payload = {
    exportedAt: new Date().toISOString(),
    workouts: state.history,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `fitness-history-${dayKey(new Date()).replace(/-/g, "")}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// ==========================================
// Event wiring
// ==========================================
function init() {
  renderMuscleGrid();

  $$(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => showTab(btn.dataset.tab));
  });
  $$("[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => showTab(btn.dataset.goto));
  });

  $("#generate-btn").addEventListener("click", () => {
    if (state.selected.size === 0) {
      alert("Pick at least one muscle group.");
      return;
    }
    state.today = generateWorkout([...state.selected], $("#intensity").value);
    saveToday();
    // Reset session timer for fresh workout
    timers.sessionOffset = 0;
    timers.sessionStart  = null;
    stopRest();
    showTab("today");
  });

  $("#regen-btn").addEventListener("click", () => {
    if (!state.today) return;
    const preservedSeconds = state.today.sessionSeconds || 0;
    state.today = generateWorkout(state.today.muscles, state.today.intensity, state.today.focus);
    state.today.sessionSeconds = preservedSeconds;
    saveToday();
    renderToday();
  });

  $("#save-btn").addEventListener("click", saveCurrentWorkout);

  $("#complete-btn").addEventListener("click", () => {
    if (!state.today) return;
    state.today.sessionSeconds = sessionElapsedSeconds();
    // Stop timers
    if (timers.sessionStart) {
      timers.sessionOffset += Date.now() - timers.sessionStart;
      timers.sessionStart = null;
    }
    stopRest();
    state.history.unshift({ ...state.today, completedAt: new Date().toISOString() });
    saveHistory();
    state.today = null;
    saveToday();
    // Reset timer state
    timers.sessionOffset = 0;
    document.getElementById("session-start").textContent = "Start";
    showTab("history");
  });

  // Timer controls
  $("#session-start").addEventListener("click", startSession);
  $("#session-reset").addEventListener("click", resetSession);
  $$("[data-rest]").forEach(btn => {
    btn.addEventListener("click", () => startRest(Number(btn.dataset.rest)));
  });
  $("#rest-stop").addEventListener("click", stopRest);

  // History actions
  $("#clear-history").addEventListener("click", () => {
    if (!confirm("Clear all workout history? This cannot be undone.")) return;
    state.history = [];
    saveHistory();
    renderHistory();
  });
  $("#export-history").addEventListener("click", exportHistory);

  renderToday();
}

init();
