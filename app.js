
const FOODS=[{"id": "oats", "name": "Oats", "unit": "g", "per": 100, "cal": 389, "protein": 16.9, "carbs": 66.3, "fat": 6.9, "fiber": 10.6, "default": 40}, {"id": "whey", "name": "Whey Protein", "unit": "scoop", "per": 1, "cal": 120, "protein": 25, "carbs": 3, "fat": 2, "fiber": 0, "default": 1}, {"id": "berries", "name": "Frozen Mixed Berries", "unit": "g", "per": 140, "cal": 80, "protein": 1.2, "carbs": 18, "fat": 0.5, "fiber": 6, "default": 60}, {"id": "chia", "name": "Chia Seeds", "unit": "g", "per": 100, "cal": 486, "protein": 16.5, "carbs": 42.1, "fat": 30.7, "fiber": 34.4, "default": 10}, {"id": "yogurt", "name": "Greek Yogurt", "unit": "g", "per": 170, "cal": 100, "protein": 17, "carbs": 6, "fat": 0.7, "fiber": 0, "default": 100}, {"id": "blueberries", "name": "Blueberries", "unit": "g", "per": 100, "cal": 57, "protein": 0.7, "carbs": 14.5, "fat": 0.3, "fiber": 2.4, "default": 40}, {"id": "chicken", "name": "Chicken Breast", "unit": "g", "per": 112, "cal": 120, "protein": 24, "carbs": 0, "fat": 2.5, "fiber": 0, "default": 250}, {"id": "rice", "name": "Raw Basmati Rice", "unit": "g", "per": 100, "cal": 365, "protein": 7.1, "carbs": 80, "fat": 0.7, "fiber": 1.3, "default": 62.5}, {"id": "ghee", "name": "Ghee", "unit": "ml", "per": 1, "cal": 8.1, "protein": 0, "carbs": 0, "fat": 0.9, "fiber": 0, "default": 3}, {"id": "carrot", "name": "Carrot", "unit": "g", "per": 100, "cal": 41, "protein": 0.9, "carbs": 9.6, "fat": 0.2, "fiber": 2.8, "default": 100}, {"id": "onion", "name": "Onion", "unit": "g", "per": 100, "cal": 40, "protein": 1.1, "carbs": 9.3, "fat": 0.1, "fiber": 1.7, "default": 27.5}, {"id": "tomato", "name": "Tomato", "unit": "g", "per": 100, "cal": 18, "protein": 0.9, "carbs": 3.9, "fat": 0.2, "fiber": 1.2, "default": 30}, {"id": "avocado", "name": "Avocado", "unit": "g", "per": 100, "cal": 160, "protein": 2, "carbs": 8.5, "fat": 14.7, "fiber": 6.7, "default": 75}, {"id": "almonds", "name": "Almonds", "unit": "g", "per": 100, "cal": 579, "protein": 21.2, "carbs": 21.6, "fat": 49.9, "fiber": 12.5, "default": 15}, {"id": "walnuts", "name": "Walnuts", "unit": "g", "per": 100, "cal": 654, "protein": 15.2, "carbs": 13.7, "fat": 65.2, "fiber": 6.7, "default": 10}, {"id": "banana", "name": "Banana", "unit": "g", "per": 100, "cal": 89, "protein": 1.1, "carbs": 22.8, "fat": 0.3, "fiber": 2.6, "default": 118}];
const PROGRAM=[{"title": "Monday \u2014 Push (Strength)", "short": "Push Strength", "exercises": [["Barbell Bench Press", 4, "6\u20138", "75\u201395 lb total", "1\u20132 RIR"], ["Incline DB Press", 4, "8\u201310", "25\u201335 lb each", "1 RIR"], ["Machine Chest Press", 3, "10\u201312", "50\u201380 lb / moderate", "Last set failure"], ["Seated DB Shoulder Press", 3, "8\u201310", "20\u201330 lb each", "1\u20132 RIR"], ["Cable Lateral Raise", 4, "12\u201315", "5\u201310 lb each", "Last set failure"], ["Rope Pushdown", 3, "12\u201315", "20\u201335 lb", "Last set failure"], ["Overhead Rope Extension", 3, "12\u201315", "15\u201330 lb", "Last set failure"]]}, {"title": "Tuesday \u2014 Pull (Strength)", "short": "Pull Strength", "exercises": [["Pull-ups / Assisted", 4, "AMRAP", "Assistance for clean reps", "1\u20132 RIR"], ["Wide Lat Pulldown", 4, "8\u201310", "60\u201390 lb", "1 RIR"], ["Chest Supported Row", 4, "8\u201310", "50\u201380 lb machine", "1 RIR"], ["Cable Row", 3, "10\u201312", "50\u201380 lb", "1 RIR"], ["Face Pull", 4, "12\u201315", "15\u201330 lb", "Last set failure"], ["Incline DB Curl", 3, "10\u201312", "12.5\u201320 lb each", "Last set failure"], ["Hammer Curl", 3, "10\u201312", "15\u201325 lb each", "Last set failure"]]}, {"title": "Wednesday \u2014 Legs", "short": "Legs", "exercises": [["Hack Squat", 4, "6\u20138", "Controlled starting weight", "1\u20132 RIR"], ["Leg Press", 3, "10", "90\u2013180 lb plates", "1 RIR"], ["Romanian Deadlift", 3, "8\u201310", "65\u201395 lb total", "1\u20132 RIR"], ["Leg Curl", 3, "12\u201315", "30\u201360 lb", "Last set failure"], ["Walking Lunges", 3, "12 / leg", "10\u201320 lb DB each", "1 RIR"], ["Standing Calf Raise", 4, "15", "Bodyweight / 25\u201350 lb", "Last set failure"]]}, {"title": "Thursday \u2014 Cardio + Abs", "short": "Cardio + Abs", "exercises": [["Incline Walk", 1, "40 min", "Bodyweight", "Steady cardio"], ["Hanging Leg Raise", 3, "15", "Bodyweight", "1 RIR"], ["Cable Crunch", 3, "15", "25\u201345 lb", "Last set failure"], ["Ab Wheel", 3, "10", "Bodyweight", "1 RIR"], ["Plank", 3, "60 sec", "Bodyweight", "Controlled"]]}, {"title": "Friday \u2014 Push (Hypertrophy)", "short": "Push Hypertrophy", "exercises": [["Incline Smith Press", 4, "10", "50\u201380 lb total", "1 RIR"], ["Cable Fly", 3, "15", "10\u201320 lb each side", "Last set failure"], ["Machine Shoulder Press", 3, "10", "30\u201360 lb", "1 RIR"], ["DB Lateral Raise", 5, "15", "8\u201315 lb each", "Last set failure"], ["Rear Delt Fly", 4, "15", "5\u201315 lb DB / light machine", "Last set failure"], ["Close Grip Bench", 3, "10", "55\u201375 lb total", "1 RIR"], ["Rope Pushdown", 3, "15", "20\u201335 lb", "Last set failure"]]}, {"title": "Saturday \u2014 Pull (Hypertrophy)", "short": "Pull Hypertrophy", "exercises": [["Close Grip Pulldown", 4, "10", "55\u201385 lb", "1 RIR"], ["Single Arm DB Row", 3, "12", "30\u201345 lb each", "1 RIR"], ["Machine Row", 3, "12", "45\u201375 lb", "1 RIR"], ["Reverse Pec Deck", 4, "15", "25\u201350 lb", "Last set failure"], ["EZ Curl", 3, "10", "25\u201340 lb total", "Last set failure"], ["Preacher Curl", 3, "12", "20\u201335 lb total / machine", "Last set failure"], ["Cable Curl", 3, "15", "15\u201330 lb", "Last set failure"]]}, {"title": "Sunday \u2014 Cardio", "short": "Cardio", "exercises": [["Incline Walk / Stairmaster / Bike", 1, "45\u201360 min", "Moderate resistance", "Steady cardio"], ["Stretching", 1, "15 min", "Bodyweight", "Easy"]]}];
const START=new Date('2026-07-27T00:00:00');
const END=new Date(START);END.setDate(START.getDate()+99);
const PAY_AMOUNT=2800;
const PAY_DATES=["2026-08-12","2026-08-26","2026-09-09","2026-09-23","2026-10-07","2026-10-21","2026-11-04","2026-11-18","2026-12-02","2026-12-16","2026-12-30","2027-01-13","2027-01-27","2027-02-10","2027-02-24","2027-03-10","2027-03-24","2027-04-07","2027-04-21"];

const $=id=>document.getElementById(id);
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(Number(n||0));
const round=n=>Math.round((Number(n)||0)*10)/10;
const ymd=d=>d.toISOString().slice(0,10);
const diffDays=(a,b)=>Math.floor((a-b)/86400000);
let current=new Date();current.setHours(0,0,0,0);
if(current<START)current=new Date(START);if(current>END)current=new Date(END);
let moneyType='expense';

function clampDate(d){if(d<START)return new Date(START);if(d>END)return new Date(END);return d}
function lifeStore(){return JSON.parse(localStorage.getItem('life100v2')||'{}')}
function saveLife(d){localStorage.setItem('life100v2',JSON.stringify(d))}
function mealStore(){return JSON.parse(localStorage.getItem('macroMasterV2')||'{}')}
function saveMeals(d){localStorage.setItem('macroMasterV2',JSON.stringify(d))}
function financeStore(){
 let v=localStorage.getItem('moneyDashV1');
 if(!v) v=localStorage.getItem('moneyDashboardV1');
 return JSON.parse(v||'{"transactions":[],"receivedPaychecks":[]}')
}
function saveFinance(d){localStorage.setItem('moneyDashV1',JSON.stringify(d))}
function showToast(t){$('toast').textContent=t;$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),1300)}
function dayIndex(d=current){return diffDays(d,START)}
function programFor(d=current){return PROGRAM[((dayIndex(d)%7)+7)%7]}
function isMonday(d=current){return d.getDay()===1}
function formatDuration(mins){if(mins==null||isNaN(mins))return '—';return `${Math.floor(mins/60)}h ${mins%60}m`}
function calcDuration(start,end,overnight=true){
 if(!start||!end)return null;
 const [sh,sm]=start.split(':').map(Number),[eh,em]=end.split(':').map(Number);
 let a=sh*60+sm,b=eh*60+em;if(overnight&&b<a)b+=1440;return Math.max(0,b-a)
}
function calcFood(f,q){const k=(+q||0)/f.per;return{cal:f.cal*k,protein:f.protein*k,carbs:f.carbs*k,fat:f.fat*k,fiber:f.fiber*k}}
function mealTotals(date){
 return (mealStore()[date]||[]).reduce((t,x)=>{['cal','protein','carbs','fat','fiber'].forEach(k=>t[k]+=+x[k]||0);return t},{cal:0,protein:0,carbs:0,fat:0,fiber:0})
}
function financeTotals(){const f=financeStore();let income=0,spent=0;f.transactions.forEach(x=>x.type==='income'?income+=+x.amount:spent+=+x.amount);return{income,spent,left:income-spent}}
function nextPay(){const f=financeStore();return PAY_DATES.find(x=>!f.receivedPaychecks.includes(x))||null}

$('headerDate').textContent=new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'});
$('moneyDate').value=ymd(new Date());

/* NAV */
function switchPage(name){
 document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
 document.querySelectorAll('.nav').forEach(x=>x.classList.toggle('active',x.dataset.page===name));
 $('page'+name).classList.add('active');
 if(name==='Meals')renderMeals();if(name==='Today')loadDay();if(name==='Gym'){$('gymDate').value=ymd(current);buildGym()}if(name==='Money')renderMoney();if(name==='Progress')renderProgress();if(name==='Home')renderHome();
 window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('.nav').forEach(b=>b.onclick=()=>switchPage(b.dataset.page));
document.querySelectorAll('.goto').forEach(b=>b.onclick=()=>switchPage(b.dataset.page));
document.querySelectorAll('.jumpToday').forEach(b=>b.onclick=()=>{let t=new Date();t.setHours(0,0,0,0);current=clampDate(t);$('mealDate').value=ymd(current);loadDay();switchPage('Today')});

/* MEALS */
function setupFoods(){
 $('foodSelect').innerHTML=FOODS.map(f=>`<option value="${f.id}">${f.name}</option>`).join('');
 $('foodSelect').onchange=()=>{const f=FOODS.find(x=>x.id===$('foodSelect').value);$('foodQty').value=f.default;previewFood()};
 $('foodQty').oninput=previewFood;$('foodSelect').dispatchEvent(new Event('change'));
}
function previewFood(){const f=FOODS.find(x=>x.id===$('foodSelect').value),q=+$('foodQty').value||0,m=calcFood(f,q);$('foodPreview').innerHTML=`<b>${q} ${f.unit}</b> • ${Math.round(m.cal)} kcal • P ${round(m.protein)}g • C ${round(m.carbs)}g • F ${round(m.fat)}g • Fiber ${round(m.fiber)}g`}
function addMealItem(date,item){const s=mealStore();if(!s[date])s[date]=[];item.id=Date.now()+Math.random();s[date].push(item);saveMeals(s);renderMeals();renderHome();if(date===ymd(current))updateSyncedNutrition()}
$('addFood').onclick=()=>{const f=FOODS.find(x=>x.id===$('foodSelect').value),q=+$('foodQty').value;if(!q)return showToast('Enter quantity');addMealItem($('mealDate').value,{name:f.name,qty:q,unit:f.unit,meal:$('foodMeal').value,...calcFood(f,q)});showToast('Food added ✓')};
$('addManual').onclick=()=>{const name=$('manualName').value.trim();if(!name)return showToast('Enter food name');addMealItem($('mealDate').value,{name,qty:1,unit:'serving',meal:$('manualMeal').value,cal:+$('manualCal').value||0,protein:+$('manualProtein').value||0,carbs:+$('manualCarbs').value||0,fat:+$('manualFat').value||0,fiber:+$('manualFiber').value||0});['manualName','manualCal','manualProtein','manualCarbs','manualFat','manualFiber'].forEach(id=>$(id).value='');showToast('Manual food added ✓')};

const QUICK={
 breakfast:[['oats',40],['whey',1],['berries',60]],
 snack:[['yogurt',100],['blueberries',40],['avocado',75]],
 lunch:[['chicken',250],['rice',62.5],['ghee',3],['carrot',100],['onion',27.5],['tomato',30]],
 dinner:[['chicken',250],['rice',62.5],['ghee',3],['carrot',100],['onion',27.5],['tomato',30]],
 pre:[['banana',118]],bed:[['almonds',15],['walnuts',10]]
};
const QLABEL={breakfast:'Breakfast',snack:'Snack',lunch:'Lunch',dinner:'Dinner',pre:'Pre Workout',bed:'Before Bed'};
document.querySelectorAll('[data-quick]').forEach(b=>b.onclick=()=>{
 const key=b.dataset.quick,date=$('mealDate').value;
 QUICK[key].forEach(([id,q])=>{const f=FOODS.find(x=>x.id===id);addMealItem(date,{name:f.name,qty:q,unit:f.unit,meal:QLABEL[key],...calcFood(f,q)})});
 if(key==='breakfast'&&$('includeChia').checked){const f=FOODS.find(x=>x.id==='chia');addMealItem(date,{name:f.name,qty:10,unit:f.unit,meal:'Breakfast',...calcFood(f,10)})}
 showToast(QLABEL[key]+' added ✓');
});
$('mealDate').onchange=renderMeals;
$('clearFoodDay').onclick=()=>{const d=$('mealDate').value;if(confirm('Clear all food for this date?')){const s=mealStore();delete s[d];saveMeals(s);renderMeals();renderHome();if(d===ymd(current))updateSyncedNutrition()}};
function renderMeals(){
 const date=$('mealDate').value||ymd(current);if(!$('mealDate').value)$('mealDate').value=date;
 const t=mealTotals(date),list=mealStore()[date]||[];
 $('mealCalories').textContent=Math.round(t.cal);$('mealProtein').textContent=round(t.protein)+'g';$('mealCarbs').textContent=round(t.carbs)+'g';$('mealFat').textContent=round(t.fat)+'g';$('mealFiber').textContent=round(t.fiber)+'g';$('mealRemain').textContent=Math.max(0,Math.round(2200-t.cal));
 $('mealCalBar').style.width=Math.min(100,t.cal/2200*100)+'%';$('mealProteinBar').style.width=Math.min(100,t.protein/160*100)+'%';
 $('foodLog').innerHTML=list.length?list.map(x=>`<div class="food-item"><div class="row"><div><strong>${x.name}</strong><small>${x.meal} • ${x.qty} ${x.unit}</small></div><div><strong>${Math.round(x.cal)} kcal</strong><button class="delete-btn" data-food="${x.id}">Delete</button></div></div><div class="food-macros"><span>P ${round(x.protein)}g</span><span>C ${round(x.carbs)}g</span><span>F ${round(x.fat)}g</span><span>Fiber ${round(x.fiber)}g</span></div></div>`).join(''):'<div class="empty">No food logged for this day.</div>';
 document.querySelectorAll('[data-food]').forEach(b=>b.onclick=()=>{const s=mealStore();s[date]=(s[date]||[]).filter(x=>String(x.id)!==String(b.dataset.food));saveMeals(s);renderMeals();renderHome();if(date===ymd(current))updateSyncedNutrition()});
}

/* TODAY */
const dailyFields=['workoutDone','workoutStart','workoutEnd','cardio','water','steps','bedTime','wakeTime','weight','waist','chest','bodyFat','leftArm','rightArm','thigh','creatine','fishOil','vitaminD','amMoist','sunscreen','nightBrush','pmMoist','hairSerum','facePack','thursdaySerum','hairOil','studyHours','studyTopic','tasksDone','tasksPending','workDone','notes'];
function getField(id){const el=$(id);return el.type==='checkbox'?el.checked:el.value}
function setField(id,v){const el=$(id);if(el.type==='checkbox')el.checked=!!v;else el.value=v??''}
function applySchedule(){
 const dow=current.getDay(),p=programFor();
 $('dayTitle').textContent=`Day ${dayIndex()+1} / 100`;$('dateLabel').textContent=current.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'});$('datePicker').value=ymd(current);$('workoutPlan').textContent=p.short;$('gymDayTitle').textContent=p.title;
 $('vitaminDRow').classList.toggle('hidden',![1,4,6].includes(dow));$('facePackRow').classList.toggle('hidden',dow!==6);$('serumRow').classList.toggle('hidden',dow!==4);$('hairOilRow').classList.toggle('hidden',dow!==0);
 $('studyGoal').textContent=(dow===0||dow===6)?'Goal 4–5 hrs':'Goal 2 hrs';
 $('mondayFields').classList.toggle('hidden',!isMonday());$('mondayMessage').textContent=isMonday()?'Weekly weigh-in + measurements are open today.':'Weight and measurements unlock every Monday.';
}
function loadDay(){
 applySchedule();const d=lifeStore()[ymd(current)]?.daily||{};
 dailyFields.forEach(id=>setField(id,d[id]));
 if(!$('bedTime').value)$('bedTime').value='21:30';if(!$('wakeTime').value)$('wakeTime').value='05:00';
 $('gymDate').value=ymd(current);updateAutoTimes();updateSyncedNutrition();updateScoreUI();renderHome();
}
function updateAutoTimes(){
 const sleep=calcDuration($('bedTime').value,$('wakeTime').value,true),workout=calcDuration($('workoutStart').value,$('workoutEnd').value,true);
 $('sleepResult').textContent=formatDuration(sleep);$('workoutDuration').textContent=formatDuration(workout);
}
['bedTime','wakeTime','workoutStart','workoutEnd'].forEach(id=>$(id).addEventListener('input',()=>{updateAutoTimes();updateScoreUI()}));
function updateSyncedNutrition(){
 const t=mealTotals(ymd(current));$('syncedCalories').textContent=Math.round(t.cal);$('syncedProtein').textContent=round(t.protein)+'g';$('syncedCarbs').textContent=round(t.carbs)+'g';$('syncedFat').textContent=round(t.fat)+'g';
}
function dailyScore(){
 const dow=current.getDay(),t=mealTotals(ymd(current)),sleep=calcDuration($('bedTime').value,$('wakeTime').value,true),checks=[];
 checks.push(sleep!=null&&sleep>=420);checks.push(t.cal>=2100&&t.cal<=2200);checks.push(t.protein>=160);checks.push(+$('water').value>=4);checks.push(+$('steps').value>=8000&&+$('steps').value<=11000);checks.push($('workoutDone').checked);checks.push($('creatine').checked);checks.push($('fishOil').checked);
 if([1,4,6].includes(dow))checks.push($('vitaminD').checked);
 checks.push($('amMoist').checked&&$('sunscreen').checked&&$('nightBrush').checked&&$('pmMoist').checked&&$('hairSerum').checked);
 if(dow===6)checks.push($('facePack').checked);if(dow===4)checks.push($('thursdaySerum').checked);if(dow===0)checks.push($('hairOil').checked);
 checks.push(+$('studyHours').value>=((dow===0||dow===6)?4:2));checks.push($('workDone').checked);
 return Math.round(100*checks.filter(Boolean).length/checks.length)
}
function updateScoreUI(){const s=dailyScore();$('topScore').textContent=s+'%';$('scoreOrb').style.background=`conic-gradient(#1595ff ${s*3.6}deg,rgba(80,100,125,.22) 0deg)`;renderTopSummary()}
dailyFields.forEach(id=>$(id).addEventListener('input',updateScoreUI));
$('saveToday').onclick=()=>{
 const all=lifeStore(),key=ymd(current),entry=all[key]||{},daily={};
 dailyFields.forEach(id=>daily[id]=getField(id));
 const mt=mealTotals(key);daily.calories=Math.round(mt.cal);daily.protein=round(mt.protein);daily.carbs=round(mt.carbs);daily.fat=round(mt.fat);daily.fiber=round(mt.fiber);
 daily.sleepMinutes=calcDuration($('bedTime').value,$('wakeTime').value,true);daily.sleep=round((daily.sleepMinutes||0)/60);daily.workoutMinutes=calcDuration($('workoutStart').value,$('workoutEnd').value,true);daily.score=dailyScore();daily.workoutPlan=programFor().short;
 if(!isMonday())['weight','waist','chest','bodyFat','leftArm','rightArm','thigh'].forEach(k=>delete daily[k]);
 entry.daily=daily;all[key]=entry;saveLife(all);renderHome();renderProgress();showToast('Today saved ✓');
};
$('prevDay').onclick=()=>{current=clampDate(new Date(current.setDate(current.getDate()-1)));loadDay()};
$('nextDay').onclick=()=>{current=clampDate(new Date(current.setDate(current.getDate()+1)));loadDay()};
$('datePicker').onchange=e=>{current=clampDate(new Date(e.target.value+'T00:00:00'));loadDay()};

/* GYM */
$('gymDate').onchange=e=>{current=clampDate(new Date(e.target.value+'T00:00:00'));loadDay();buildGym()};
function buildGym(){
 const p=programFor(),saved=lifeStore()[ymd(current)]?.gym||{};$('gymDayTitle').textContent=p.title;$('gymExerciseList').innerHTML='';
 p.exercises.forEach((ex,ei)=>{const [name,sets,reps,start,effort]=ex,old=(saved.exercises||[])[ei]||{};let rows='';
  for(let s=1;s<=sets;s++){const sd=(old.sets||[])[s-1]||{};rows+=`<div class="set-no">${s}</div><input class="gym-input" data-e="${ei}" data-s="${s-1}" data-f="reps" placeholder="${reps}" value="${sd.reps??''}"><input class="gym-input" data-e="${ei}" data-s="${s-1}" data-f="weight" placeholder="Weight" value="${sd.weight??''}"><input class="gym-input" data-e="${ei}" data-s="${s-1}" data-f="rir" placeholder="RIR" value="${sd.rir??''}">`}
  const card=document.createElement('div');card.className='exercise-card';card.innerHTML=`<div class="exercise-head"><h4>${name}</h4><div class="exercise-target">${sets} sets • ${reps}</div></div><div class="exercise-meta">Suggested: ${start} • ${effort}</div><div class="set-grid"><div class="head">SET</div><div class="head">REPS / TIME</div><div class="head">WEIGHT</div><div class="head">RIR / NOTE</div>${rows}</div>`;$('gymExerciseList').appendChild(card)
 });
 $('gymNotes').value=saved.notes||'';
}
function collectGym(){const p=programFor(),out={program:p.title,notes:$('gymNotes').value,exercises:p.exercises.map(ex=>({name:ex[0],sets:[]}))};document.querySelectorAll('.gym-input').forEach(inp=>{const e=+inp.dataset.e,s=+inp.dataset.s,f=inp.dataset.f;while(out.exercises[e].sets.length<=s)out.exercises[e].sets.push({});out.exercises[e].sets[s][f]=inp.value});return out}
$('saveGym').onclick=()=>{const all=lifeStore(),key=ymd(current),entry=all[key]||{};entry.gym=collectGym();all[key]=entry;saveLife(all);renderProgress();showToast('Gym log saved ✓')};

/* MONEY */
document.querySelectorAll('.money-type').forEach(b=>b.onclick=()=>{moneyType=b.dataset.moneyType;document.querySelectorAll('.money-type').forEach(x=>x.classList.toggle('active',x===b));if(moneyType==='income')$('moneyCategory').value='Other'});
$('saveMoney').onclick=()=>{const a=+$('moneyAmount').value;if(!a)return showToast('Enter amount');const f=financeStore();f.transactions.push({id:Date.now()+Math.random(),type:moneyType,amount:a,date:$('moneyDate').value,category:$('moneyCategory').value,note:$('moneyNote').value});saveFinance(f);$('moneyAmount').value='';$('moneyNote').value='';renderMoney();renderHome();showToast('Transaction saved ✓')};
function togglePay(pd){const f=financeStore(),rec=f.receivedPaychecks.includes(pd);if(rec){if(!confirm('Remove this paycheck?'))return;f.receivedPaychecks=f.receivedPaychecks.filter(x=>x!==pd);f.transactions=f.transactions.filter(x=>!(x.category==='Paycheck'&&x.date===pd&&x.note==='Scheduled biweekly paycheck'))}else{f.receivedPaychecks.push(pd);f.transactions.push({id:Date.now()+Math.random(),type:'income',amount:PAY_AMOUNT,category:'Paycheck',date:pd,note:'Scheduled biweekly paycheck'})}saveFinance(f);renderMoney();renderHome();showToast(rec?'Paycheck removed':'Paycheck added ✓')}
function renderMoney(){
 const f=financeStore(),t=financeTotals(),np=nextPay();$('moneyIncome').textContent=money(t.income);$('moneySpent').textContent=money(t.spent);$('moneyAvailable').textContent=money(t.left);$('nextPayTag').textContent=np?'Next '+new Date(np+'T00:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'}):'Complete';
 $('payList').innerHTML=PAY_DATES.map(pd=>{const rec=f.receivedPaychecks.includes(pd),dt=new Date(pd+'T00:00:00');return `<div class="pay-item"><div class="row"><div><strong>${dt.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric',year:'numeric'})}</strong><small>${money(2800)} expected</small></div><button class="${rec?'received':''}" data-pay="${pd}">${rec?'Received ✓':'Mark Received'}</button></div></div>`}).join('');
 document.querySelectorAll('[data-pay]').forEach(b=>b.onclick=()=>togglePay(b.dataset.pay));
 const arr=[...f.transactions].sort((a,b)=>b.date.localeCompare(a.date)||b.id-a.id);$('moneyHistory').innerHTML=arr.length?arr.map(x=>`<div class="money-item"><div class="row"><div><strong>${x.category}</strong><small>${x.date}${x.note?' • '+x.note:''}</small></div><div><strong style="color:${x.type==='income'?'#56df8e':'#ff9299'}">${x.type==='income'?'+':'-'}${money(x.amount)}</strong><button class="delete-btn" data-money="${x.id}">Delete</button></div></div></div>`).join(''):'<div class="empty">No transactions yet.</div>';
 document.querySelectorAll('[data-money]').forEach(b=>b.onclick=()=>{const d=financeStore();d.transactions=d.transactions.filter(x=>String(x.id)!==String(b.dataset.money));saveFinance(d);renderMoney();renderHome()});
}

/* HOME + TOP */
function latestMondayWeight(){const s=lifeStore(),keys=Object.keys(s).filter(k=>s[k]?.daily?.weight).sort();return keys.length?+s[keys.at(-1)].daily.weight:169}
function renderTopSummary(){
 const pct=Math.max(1,Math.min(100,dayIndex()+1));$('topProgress').textContent=pct+'%';$('topWeight').textContent=latestMondayWeight().toFixed(1)+' → 159 lb';$('topMoney').textContent=money(financeTotals().left);
 const s=lifeStore();let streak=0,cursor=new Date(current);while(cursor>=START){const d=s[ymd(cursor)]?.daily;if(d&&d.score>=70){streak++;cursor.setDate(cursor.getDate()-1)}else break}$('topStreak').textContent=streak+' day'+(streak===1?'':'s');
}
function renderHome(){
 const date=ymd(current),mt=mealTotals(date),d=lifeStore()[date]?.daily||{},f=financeTotals(),np=nextPay(),p=programFor();
 $('homeDayTitle').textContent=`Day ${dayIndex()+1} / 100`;$('homeWorkoutTitle').textContent=p.title;$('homeCalories').textContent=Math.round(mt.cal);$('homeProtein').textContent=round(mt.protein)+'g';$('homeCarbs').textContent=round(mt.carbs)+'g';$('homeFat').textContent=round(mt.fat)+'g';$('homeFiber').textContent=round(mt.fiber)+'g';$('homeCalBar').style.width=Math.min(100,mt.cal/2200*100)+'%';
 $('homeWorkout').textContent=d.workoutDone?'Completed ✓':p.short;$('homeSleep').textContent=d.sleepMinutes!=null?formatDuration(d.sleepMinutes):'—';$('homeSteps').textContent=d.steps||'—';$('homeStudy').textContent=d.studyHours?d.studyHours+'h':'—';
 $('homeIncome').textContent=money(f.income);$('homeSpent').textContent=money(f.spent);$('homeAvailable').textContent=money(f.left);$('nextPayHome').textContent=np?new Date(np+'T00:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'}):'Complete';
 const daysToMon=(8-current.getDay())%7;$('nextWeigh').textContent=daysToMon===0?'Today':daysToMon===1?'Tomorrow':`In ${daysToMon} days`;renderTopSummary();
}

/* PROGRESS */
function renderProgress(){
 const s=lifeStore(),keys=Object.keys(s).filter(k=>s[k].daily||s[k].gym).sort().reverse(),pct=Math.max(1,Math.min(100,dayIndex()+1));$('challengePercent').textContent=pct+'%';$('challengeBar').style.width=pct+'%';$('daysLogged').textContent=keys.filter(k=>s[k].daily).length+' days logged';
 $('historyList').innerHTML=keys.length?keys.map(k=>{const x=s[k].daily||{},e=s[k],d=new Date(k+'T00:00:00'),mini=[];if(x.weight)mini.push(`⚖️ ${x.weight} lb`);if(x.calories)mini.push(`🔥 ${x.calories} kcal`);if(x.protein)mini.push(`🥩 ${x.protein}g protein`);if(x.steps)mini.push(`👟 ${x.steps} steps`);if(e.gym)mini.push('🏋️ Gym saved');return `<div class="history-item" data-hist="${k}"><div class="row"><div><strong>${d.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}</strong><small>${x.workoutPlan||e.gym?.program||''}</small></div><strong>${x.score??'—'}${x.score==null?'':'%'}</strong></div><div class="history-mini">${mini.map(m=>`<span>${m}</span>`).join('')}</div></div>`}).join(''):'<div class="empty">No saved days yet.</div>';
 document.querySelectorAll('[data-hist]').forEach(b=>b.onclick=()=>{current=new Date(b.dataset.hist+'T00:00:00');loadDay();switchPage('Today')});
 drawWeightChart();
}
function drawWeightChart(){
 const c=$('weightChart'),ctx=c.getContext('2d'),s=lifeStore(),pts=[];Object.keys(s).sort().forEach(k=>{const d=new Date(k+'T00:00:00'),w=+s[k]?.daily?.weight;if(d.getDay()===1&&w)pts.push({k,w})});
 ctx.clearRect(0,0,c.width,c.height);ctx.fillStyle='#071522';ctx.fillRect(0,0,c.width,c.height);ctx.strokeStyle='#163149';for(let i=1;i<5;i++){let y=i*c.height/5;ctx.beginPath();ctx.moveTo(40,y);ctx.lineTo(c.width-20,y);ctx.stroke()}
 if(pts.length<2){ctx.fillStyle='#89a0b9';ctx.font='15px system-ui';ctx.fillText('Log weight on Mondays to build your trend.',42,130);return}
 const min=Math.min(...pts.map(p=>p.w),159)-1,max=Math.max(...pts.map(p=>p.w),169)+1;ctx.strokeStyle='#1da2ff';ctx.lineWidth=4;ctx.beginPath();pts.forEach((p,i)=>{const x=42+i*(c.width-72)/(pts.length-1),y=18+(max-p.w)*(c.height-45)/(max-min);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke();ctx.fillStyle='#e8f6ff';ctx.font='11px system-ui';ctx.fillText(pts[0].w.toFixed(1)+' lb',43,17);ctx.fillText(pts.at(-1).w.toFixed(1)+' lb',c.width-78,17)
}

/* INIT */
setupFoods();$('mealDate').value=ymd(current);$('gymDate').value=ymd(current);renderMeals();loadDay();buildGym();renderMoney();renderProgress();renderHome();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
