// ==========================================
// Exercise database, grouped by muscle.
// Each entry: { name, sets, reps } — the sets/reps keep the stimulus
// consistent even when the specific exercise varies day-to-day.
// ==========================================
const EXERCISES = {
  chest: [
    { name: "Barbell Bench Press",    sets: 4, reps: "6-8"   },
    { name: "Dumbbell Bench Press",   sets: 4, reps: "8-10"  },
    { name: "Incline Dumbbell Press", sets: 3, reps: "8-12"  },
    { name: "Incline Barbell Press",  sets: 4, reps: "6-8"   },
    { name: "Dumbbell Flyes",         sets: 3, reps: "10-12" },
    { name: "Cable Crossover",        sets: 3, reps: "12-15" },
    { name: "Push-ups",               sets: 3, reps: "AMRAP" },
    { name: "Dips (Chest Lean)",      sets: 3, reps: "8-12"  },
    { name: "Machine Chest Press",    sets: 3, reps: "10-12" },
    { name: "Pec Deck",               sets: 3, reps: "12-15" },
  ],
  back: [
    { name: "Deadlift",               sets: 4, reps: "5"     },
    { name: "Pull-ups",               sets: 4, reps: "AMRAP" },
    { name: "Barbell Row",            sets: 4, reps: "6-8"   },
    { name: "Dumbbell Row",           sets: 3, reps: "8-10"  },
    { name: "Lat Pulldown",           sets: 3, reps: "10-12" },
    { name: "Seated Cable Row",       sets: 3, reps: "10-12" },
    { name: "T-Bar Row",              sets: 3, reps: "8-10"  },
    { name: "Chin-ups",               sets: 3, reps: "AMRAP" },
    { name: "Face Pulls",             sets: 3, reps: "12-15" },
    { name: "Straight-arm Pulldown",  sets: 3, reps: "12-15" },
  ],
  shoulders: [
    { name: "Overhead Press",         sets: 4, reps: "6-8"   },
    { name: "Seated Dumbbell Press",  sets: 4, reps: "8-10"  },
    { name: "Arnold Press",           sets: 3, reps: "8-10"  },
    { name: "Lateral Raises",         sets: 4, reps: "12-15" },
    { name: "Cable Lateral Raise",    sets: 3, reps: "12-15" },
    { name: "Rear Delt Flyes",        sets: 3, reps: "12-15" },
    { name: "Reverse Pec Deck",       sets: 3, reps: "12-15" },
    { name: "Front Raises",           sets: 3, reps: "10-12" },
    { name: "Upright Row",            sets: 3, reps: "10-12" },
    { name: "Landmine Press",         sets: 3, reps: "8-10"  },
  ],
  biceps: [
    { name: "Barbell Curl",           sets: 4, reps: "8-10"  },
    { name: "Dumbbell Curl",          sets: 3, reps: "10-12" },
    { name: "Hammer Curl",            sets: 3, reps: "10-12" },
    { name: "Incline Dumbbell Curl",  sets: 3, reps: "10-12" },
    { name: "Preacher Curl",          sets: 3, reps: "10-12" },
    { name: "Cable Curl",             sets: 3, reps: "12-15" },
    { name: "Concentration Curl",     sets: 3, reps: "10-12" },
    { name: "EZ-Bar Curl",            sets: 3, reps: "10-12" },
  ],
  triceps: [
    { name: "Close-Grip Bench",       sets: 4, reps: "8-10"  },
    { name: "Tricep Pushdown",        sets: 3, reps: "10-12" },
    { name: "Overhead Tricep Ext.",   sets: 3, reps: "10-12" },
    { name: "Skull Crushers",         sets: 3, reps: "8-10"  },
    { name: "Dips (Triceps)",         sets: 3, reps: "8-12"  },
    { name: "Rope Pushdown",          sets: 3, reps: "12-15" },
    { name: "Dumbbell Kickback",      sets: 3, reps: "12-15" },
    { name: "Diamond Push-ups",       sets: 3, reps: "AMRAP" },
  ],
  legs: [
    { name: "Back Squat",             sets: 4, reps: "5-8"   },
    { name: "Front Squat",            sets: 4, reps: "6-8"   },
    { name: "Romanian Deadlift",      sets: 4, reps: "8-10"  },
    { name: "Leg Press",              sets: 4, reps: "8-12"  },
    { name: "Walking Lunges",         sets: 3, reps: "10/leg" },
    { name: "Bulgarian Split Squat",  sets: 3, reps: "8/leg"  },
    { name: "Leg Extension",          sets: 3, reps: "12-15" },
    { name: "Leg Curl",               sets: 3, reps: "10-12" },
    { name: "Hip Thrust",             sets: 3, reps: "8-10"  },
    { name: "Goblet Squat",           sets: 3, reps: "10-12" },
    { name: "Step-ups",               sets: 3, reps: "10/leg" },
  ],
  calves: [
    { name: "Standing Calf Raise",    sets: 4, reps: "10-12" },
    { name: "Seated Calf Raise",      sets: 4, reps: "12-15" },
    { name: "Donkey Calf Raise",      sets: 3, reps: "12-15" },
    { name: "Single-Leg Calf Raise",  sets: 3, reps: "12/leg" },
    { name: "Smith Machine Calf Raise", sets: 3, reps: "10-12" },
  ],
  core: [
    { name: "Plank",                  sets: 3, reps: "45-60s" },
    { name: "Hanging Leg Raise",      sets: 3, reps: "10-12"  },
    { name: "Cable Crunch",           sets: 3, reps: "12-15"  },
    { name: "Russian Twists",         sets: 3, reps: "20 total" },
    { name: "Ab Wheel Rollout",       sets: 3, reps: "8-10"   },
    { name: "Bicycle Crunch",         sets: 3, reps: "20 total" },
    { name: "Dead Bug",               sets: 3, reps: "10/side" },
    { name: "Side Plank",             sets: 3, reps: "30s/side" },
    { name: "Mountain Climbers",      sets: 3, reps: "30s"    },
  ],
};

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
};

const state = {
  selected: new Set(loadJSON(STORAGE_KEYS.selected, [])),
  today:    loadJSON(STORAGE_KEYS.today, null),
  history:  loadJSON(STORAGE_KEYS.history, []),
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
function saveSelected() {
  saveJSON(STORAGE_KEYS.selected, [...state.selected]);
}
function saveToday() {
  if (state.today) saveJSON(STORAGE_KEYS.today, state.today);
  else localStorage.removeItem(STORAGE_KEYS.today);
}
function saveHistory() {
  saveJSON(STORAGE_KEYS.history, state.history);
}

// ==========================================
// Workout generation
//   - Uses recent history to penalize recently-used exercises per muscle.
//   - Guarantees "similar end goal": always picks N from the same muscle pool.
// ==========================================
function recentExerciseNames(muscle) {
  const recent = new Set();
  const slice = state.history.slice(0, HISTORY_WINDOW);
  for (const w of slice) {
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

function pickForMuscle(muscle, count) {
  const pool = EXERCISES[muscle] || [];
  if (pool.length === 0) return [];

  const recent = recentExerciseNames(muscle);
  const fresh  = pool.filter(e => !recent.has(e.name));
  const stale  = pool.filter(e =>  recent.has(e.name));

  // Prefer fresh exercises; fall back to stale if we need more.
  const ordered = [...shuffle(fresh), ...shuffle(stale)];
  return ordered.slice(0, Math.min(count, pool.length));
}

function generateWorkout(muscles, intensity) {
  const perGroup = INTENSITY_COUNT[intensity] || 4;
  const groups = {};
  for (const m of muscles) groups[m] = pickForMuscle(m, perGroup);
  return {
    date: new Date().toISOString(),
    intensity,
    muscles: [...muscles],
    groups,
  };
}

// ==========================================
// Rendering
// ==========================================
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

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
  $("#today-subtitle").textContent =
    `${d.toLocaleDateString(undefined, { weekday:"long", month:"short", day:"numeric" })} · ${state.today.intensity} · ${state.today.muscles.join(", ")}`;

  const list = $("#today-list");
  list.innerHTML = "";
  for (const m of state.today.muscles) {
    const block = document.createElement("div");
    block.className = "group-block";
    const h3 = document.createElement("h3");
    h3.textContent = m;
    block.appendChild(h3);
    for (const ex of state.today.groups[m]) {
      const row = document.createElement("div");
      row.className = "exercise";
      row.innerHTML = `<span class="name">${ex.name}</span><span class="sets">${ex.sets} × ${ex.reps}</span>`;
      block.appendChild(row);
    }
    list.appendChild(block);
  }
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
  const last = h[0] ? new Date(h[0].date) : null;

  const stats = [
    { num: totalWorkouts, label: "Workouts" },
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
    const d = new Date(w.date);
    const dateStr = d.toLocaleDateString(undefined, { weekday:"short", month:"short", day:"numeric" });
    const exItems = w.muscles.flatMap(m =>
      (w.groups[m] || []).map(ex => `<li>${m}: ${ex.name} — ${ex.sets}×${ex.reps}</li>`)
    ).join("");
    card.innerHTML = `
      <div class="date">${dateStr}</div>
      <div class="groups">${w.muscles.join(" · ")} <span class="muted">(${w.intensity})</span></div>
      <details><summary>Show exercises</summary><ul>${exItems}</ul></details>
    `;
    listEl.appendChild(card);
  }
}

// ==========================================
// Tabs
// ==========================================
function showTab(name) {
  $$(".tab").forEach(el => el.classList.toggle("active", el.id === name));
  $$(".tab-btn").forEach(el => el.classList.toggle("active", el.dataset.tab === name));
  if (name === "today")   renderToday();
  if (name === "history") renderHistory();
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
    showTab("today");
  });

  $("#regen-btn").addEventListener("click", () => {
    if (!state.today) return;
    state.today = generateWorkout(state.today.muscles, state.today.intensity);
    saveToday();
    renderToday();
  });

  $("#complete-btn").addEventListener("click", () => {
    if (!state.today) return;
    state.history.unshift({ ...state.today, completedAt: new Date().toISOString() });
    saveHistory();
    state.today = null;
    saveToday();
    showTab("history");
  });

  $("#clear-history").addEventListener("click", () => {
    if (!confirm("Clear all workout history? This cannot be undone.")) return;
    state.history = [];
    saveHistory();
    renderHistory();
  });

  renderToday();
}

init();
