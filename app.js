
const FOODS = [{"id": "oats", "name": "Oats", "unit": "g", "per": 100, "cal": 389, "protein": 16.9, "carbs": 66.3, "fat": 6.9, "fiber": 10.6, "default": 40, "source": "estimate"}, {"id": "whey", "name": "Whey Protein (1 scoop)", "unit": "scoop", "per": 1, "cal": 120, "protein": 25, "carbs": 3, "fat": 2, "fiber": 0, "default": 1, "source": "user"}, {"id": "mixedberries", "name": "Frozen Mixed Berries", "unit": "g", "per": 140, "cal": 80, "protein": 1.2, "carbs": 18, "fat": 0.5, "fiber": 6, "default": 60, "source": "user-cal-est-macros"}, {"id": "chia", "name": "Chia Seeds", "unit": "g", "per": 100, "cal": 486, "protein": 16.5, "carbs": 42.1, "fat": 30.7, "fiber": 34.4, "default": 10, "source": "estimate"}, {"id": "greekyogurt", "name": "Greek Yogurt", "unit": "g", "per": 170, "cal": 100, "protein": 17, "carbs": 6, "fat": 0.7, "fiber": 0, "default": 100, "source": "user-cal-protein-est-rest"}, {"id": "blueberries", "name": "Blueberries", "unit": "g", "per": 100, "cal": 57, "protein": 0.7, "carbs": 14.5, "fat": 0.3, "fiber": 2.4, "default": 40, "source": "estimate"}, {"id": "chicken", "name": "Chicken Breast", "unit": "g", "per": 112, "cal": 120, "protein": 24, "carbs": 0, "fat": 2.5, "fiber": 0, "default": 250, "source": "user-cal-protein-est-fat"}, {"id": "rice", "name": "Raw Basmati Rice", "unit": "g", "per": 100, "cal": 365, "protein": 7.1, "carbs": 80, "fat": 0.7, "fiber": 1.3, "default": 125, "source": "estimate"}, {"id": "ghee", "name": "Ghee", "unit": "ml", "per": 1, "cal": 8.1, "protein": 0, "carbs": 0, "fat": 0.9, "fiber": 0, "default": 3, "source": "estimate"}, {"id": "carrot", "name": "Carrot", "unit": "g", "per": 100, "cal": 41, "protein": 0.9, "carbs": 9.6, "fat": 0.2, "fiber": 2.8, "default": 100, "source": "estimate"}, {"id": "onion", "name": "Onion", "unit": "g", "per": 100, "cal": 40, "protein": 1.1, "carbs": 9.3, "fat": 0.1, "fiber": 1.7, "default": 55, "source": "estimate"}, {"id": "tomato", "name": "Tomato", "unit": "g", "per": 100, "cal": 18, "protein": 0.9, "carbs": 3.9, "fat": 0.2, "fiber": 1.2, "default": 60, "source": "estimate"}, {"id": "avocado", "name": "Avocado", "unit": "g", "per": 100, "cal": 160, "protein": 2, "carbs": 8.5, "fat": 14.7, "fiber": 6.7, "default": 75, "source": "estimate"}, {"id": "almonds", "name": "Almonds", "unit": "g", "per": 100, "cal": 579, "protein": 21.2, "carbs": 21.6, "fat": 49.9, "fiber": 12.5, "default": 15, "source": "estimate"}, {"id": "walnuts", "name": "Walnuts", "unit": "g", "per": 100, "cal": 654, "protein": 15.2, "carbs": 13.7, "fat": 65.2, "fiber": 6.7, "default": 10, "source": "estimate"}, {"id": "banana", "name": "Banana", "unit": "g", "per": 100, "cal": 89, "protein": 1.1, "carbs": 22.8, "fat": 0.3, "fiber": 2.6, "default": 118, "source": "estimate"}];
const LIFE_START = new Date('2026-07-27T00:00:00');
const LIFE_END = new Date(LIFE_START); LIFE_END.setDate(LIFE_START.getDate()+99);
const PAY_AMOUNT = 2800;
const PAY_DATES = ["2026-08-12","2026-08-26","2026-09-09","2026-09-23","2026-10-07","2026-10-21","2026-11-04","2026-11-18","2026-12-02","2026-12-16","2026-12-30","2027-01-13","2027-01-27","2027-02-10","2027-02-24","2027-03-10","2027-03-24","2027-04-07","2027-04-21"];
let moneyType='expense';

const $=id=>document.getElementById(id);
const now=new Date(); now.setHours(0,0,0,0);
const ymd=d=>d.toISOString().slice(0,10);
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(Number(n||0));
const r=n=>Math.round((Number(n)||0)*10)/10;
$('todayLabel').textContent=now.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'});
$('mealDate').value=ymd(now);$('lifeDate').value=ymd(now);$('moneyDate').value=ymd(now);

function lifeStore(){return JSON.parse(localStorage.getItem('life100v2')||'{}')}
function financeStore(){return JSON.parse(localStorage.getItem('moneyDashV1')||'{"transactions":[],"receivedPaychecks":[]}')}
function saveFinance(d){localStorage.setItem('moneyDashV1',JSON.stringify(d))}
function mealStore(){return JSON.parse(localStorage.getItem('macroMasterV1')||'{}')}
function saveMeals(d){localStorage.setItem('macroMasterV1',JSON.stringify(d))}
function toast(t){$('toast').textContent=t;$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),1300)}
function diffDays(a,b){return Math.floor((a-b)/86400000)}

function foodCalc(food,qty){
 const k=(Number(qty)||0)/food.per;
 return {cal:food.cal*k,protein:food.protein*k,carbs:food.carbs*k,fat:food.fat*k,fiber:food.fiber*k};
}
function mealTotals(date){
 const list=mealStore()[date]||[];
 return list.reduce((t,x)=>{t.cal+=+x.cal;t.protein+=+x.protein;t.carbs+=+x.carbs;t.fat+=+x.fat;t.fiber+=+x.fiber;return t},{cal:0,protein:0,carbs:0,fat:0,fiber:0});
}
function financeTotals(){
 const f=financeStore();let income=0,spent=0;
 f.transactions.forEach(x=>x.type==='income'?income+=+x.amount:spent+=+x.amount);
 return {income,spent,left:income-spent};
}
function nextPay(){
 const f=financeStore();return PAY_DATES.find(x=>!f.receivedPaychecks.includes(x))||null;
}
function lifeEntry(date){return lifeStore()[date]?.daily||{}}
function currentChallengeDay(){
 let n=diffDays(now,LIFE_START)+1;return Math.max(1,Math.min(100,n));
}

function renderHome(){
 const today=ymd(now), mt=mealTotals(today), le=lifeEntry(today), ft=financeTotals(), np=nextPay();
 const lifeCal=+le.calories||0, lifeProt=+le.protein||0;
 const cal=mt.cal||lifeCal, prot=mt.protein||lifeProt;
 $('challengeDay').textContent=`Day ${currentChallengeDay()} / 100`;
 $('homeCalories').textContent=`${Math.round(cal)} / 2200`;
 $('homeProtein').textContent=`${Math.round(prot)} / 160g`;
 $('homeWater').textContent=`${le.water||0} / 4L`;
 $('homeSteps').textContent=`${le.steps||0} / 8k`;
 $('calBar').style.width=Math.min(100,cal/2200*100)+'%';$('proteinBar').style.width=Math.min(100,prot/160*100)+'%';
 $('waterBar').style.width=Math.min(100,(+le.water||0)/4*100)+'%';$('stepsBar').style.width=Math.min(100,(+le.steps||0)/8000*100)+'%';
 $('hp').textContent=r(mt.protein)+'g';$('hc').textContent=r(mt.carbs)+'g';$('hf').textContent=r(mt.fat)+'g';$('hfi').textContent=r(mt.fiber)+'g';
 $('homeWorkout').textContent=le.workoutDone?'Completed ✓':(le.workoutPlan||'—');$('homeSleep').textContent=le.sleep?le.sleep+' hrs':'—';$('homeStudy').textContent=le.studyHours?le.studyHours+' hrs':'—';$('homeLifeScore').textContent=(le.score||0)+'%';
 $('homeIncome').textContent=money(ft.income);$('homeSpent').textContent=money(ft.spent);$('homeAvailable').textContent=money(ft.left);$('homeNextPay').textContent=np?new Date(np+'T00:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'}):'Complete';
 $('moneyTop').textContent=money(ft.left);
 $('weightTop').textContent=(le.weight?le.weight:'169')+' → 159';
 let streak=0,cursor=new Date(now),store=lifeStore();
 while(cursor>=LIFE_START){const e=store[ymd(cursor)]?.daily;if(e&&e.score>=70){streak++;cursor.setDate(cursor.getDate()-1)}else break}
 $('streakTop').textContent=streak+' day'+(streak===1?'':'s');
 $('masterScore').textContent=(le.score||0)+'%';
}

function setupFoods(){
 $('foodSelect').innerHTML=FOODS.map(f=>`<option value="${f.id}">${f.name}</option>`).join('');
 $('foodSelect').onchange=()=>{const f=FOODS.find(x=>x.id===$('foodSelect').value);$('foodQty').value=f.default;previewFood()};
 $('foodQty').oninput=previewFood;
 $('foodSelect').dispatchEvent(new Event('change'));
}
function previewFood(){
 const f=FOODS.find(x=>x.id===$('foodSelect').value),q=+$('foodQty').value||0,m=foodCalc(f,q);
 $('foodPreview').innerHTML=`${q} ${f.unit} = <b>${Math.round(m.cal)} kcal</b> • P ${r(m.protein)}g • C ${r(m.carbs)}g • F ${r(m.fat)}g • Fiber ${r(m.fiber)}g`;
}
function addMealItem(date,item){
 const d=mealStore();if(!d[date])d[date]=[];item.id=Date.now()+Math.random();d[date].push(item);saveMeals(d);renderMeals();renderHome();renderMasterHistory();
}
$('addFoodBtn').onclick=()=>{
 const f=FOODS.find(x=>x.id===$('foodSelect').value),q=+$('foodQty').value||0;if(q<=0)return toast('Enter quantity');
 const m=foodCalc(f,q);addMealItem($('mealDate').value,{name:f.name,qty:q,unit:f.unit,meal:$('mealType').value,...m});toast('Food added');
};
$('addCustomBtn').onclick=()=>{
 const name=$('customName').value.trim();if(!name)return toast('Enter food name');
 addMealItem($('mealDate').value,{name,qty:1,unit:'serving',meal:$('customMeal').value,cal:+$('customCal').value||0,protein:+$('customProt').value||0,carbs:+$('customCarbs').value||0,fat:+$('customFat').value||0,fiber:+$('customFiber').value||0});
 ['customName','customCal','customProt','customCarbs','customFat','customFiber'].forEach(id=>$(id).value='');toast('Manual food added');
};

const QUICK={
 breakfast:[['oats',40],['whey',1],['mixedberries',60]],
 snack:[['greekyogurt',100],['blueberries',40],['avocado',75]],
 lunch:[['chicken',250],['rice',125],['ghee',3],['carrot',100],['onion',27.5],['tomato',30]],
 dinner:[['chicken',250],['rice',125],['ghee',3],['carrot',100],['onion',27.5],['tomato',30]],
 preworkout:[['banana',118]],
 bed:[['almonds',15],['walnuts',10]]
};
document.querySelectorAll('[data-meal]').forEach(b=>b.onclick=()=>{
 const type=b.dataset.meal,date=$('mealDate').value,labels={breakfast:'Breakfast',snack:'Snack',lunch:'Lunch',dinner:'Dinner',preworkout:'Pre Workout',bed:'Before Bed'};
 QUICK[type].forEach(([id,q])=>{const f=FOODS.find(x=>x.id===id),m=foodCalc(f,q);addMealItem(date,{name:f.name,qty:q,unit:f.unit,meal:labels[type],...m})});
 toast(labels[type]+' added');
});
$('clearMealDay').onclick=()=>{const date=$('mealDate').value;if(confirm('Clear all foods for '+date+'?')){const d=mealStore();delete d[date];saveMeals(d);renderMeals();renderHome();renderMasterHistory()}};
$('mealDate').onchange=renderMeals;

function renderMeals(){
 const date=$('mealDate').value,list=mealStore()[date]||[],t=mealTotals(date);
 $('mCal').textContent=Math.round(t.cal);$('mProt').textContent=r(t.protein)+'g';$('mCarbs').textContent=r(t.carbs)+'g';$('mFat').textContent=r(t.fat)+'g';$('mFiber').textContent=r(t.fiber)+'g';$('mRemain').textContent=Math.max(0,Math.round(2200-t.cal));
 $('foodLog').innerHTML=list.length?list.map(x=>`<div class="food-item"><div class="row"><div><strong>${x.name}</strong><small>${x.meal} • ${x.qty} ${x.unit}</small></div><div><strong>${Math.round(x.cal)} kcal</strong><button class="delete-btn" data-food="${x.id}">Delete</button></div></div><div class="food-macros"><span>P ${r(x.protein)}g</span><span>C ${r(x.carbs)}g</span><span>F ${r(x.fat)}g</span><span>Fiber ${r(x.fiber)}g</span></div></div>`).join(''):'<div class="empty">No food logged for this day.</div>';
 document.querySelectorAll('[data-food]').forEach(b=>b.onclick=()=>{const d=mealStore();d[date]=(d[date]||[]).filter(x=>String(x.id)!==String(b.dataset.food));saveMeals(d);renderMeals();renderHome();renderMasterHistory()});
}

function renderLife(){
 const date=$('lifeDate').value,e=lifeEntry(date),dt=new Date(date+'T00:00:00');
 $('lifeDateTitle').textContent=dt.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'});
 $('lifeScore').textContent=(e.score||0)+'%';$('lifeWeight').textContent=e.weight?e.weight+' lb':'—';$('lifeWorkout').textContent=e.workoutPlan||'—';$('lifeStudy').textContent=e.studyHours?e.studyHours+'h':'—';
 const details=[['Calories',e.calories||'—'],['Protein',e.protein?e.protein+'g':'—'],['Water',e.water?e.water+'L':'—'],['Steps',e.steps||'—'],['Sleep',e.sleep?e.sleep+'h':'—'],['Cardio',e.cardio?e.cardio+' min':'—'],['Creatine',e.creatine?'✓':'—'],['Fish Oil',e.fishOil?'✓':'—'],['Work',e.workDone?'Done ✓':'—'],['Notes',e.notes||'—']];
 $('lifeDetails').innerHTML=details.map(x=>`<div><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join('');
 const s=lifeStore(),keys=Object.keys(s).filter(k=>s[k].daily).sort().reverse();
 $('lifeHistory').innerHTML=keys.length?keys.slice(0,30).map(k=>{const x=s[k].daily;return `<div class="life-item" data-life="${k}"><div class="row"><div><strong>${new Date(k+'T00:00:00').toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}</strong><small>${x.workoutPlan||''}</small></div><strong>${x.score||0}%</strong></div></div>`}).join(''):'<div class="empty">No 100-day data yet.</div>';
 document.querySelectorAll('[data-life]').forEach(b=>b.onclick=()=>{$('lifeDate').value=b.dataset.life;renderLife()});
}
$('lifeDate').onchange=renderLife;

function renderMoney(){
 const f=financeStore(),t=financeTotals(),np=nextPay();
 $('moneyIncome').textContent=money(t.income);$('moneySpent').textContent=money(t.spent);$('moneyAvailable').textContent=money(t.left);$('nextPayPill').textContent=np?new Date(np+'T00:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'}):'Complete';
 $('paycheckList').innerHTML=PAY_DATES.map(pd=>{const rec=f.receivedPaychecks.includes(pd),dt=new Date(pd+'T00:00:00');return `<div class="pay-item"><div class="row"><div><strong>${dt.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}</strong><small>${money(PAY_AMOUNT)} expected</small></div><button class="${rec?'received':''}" data-pay="${pd}">${rec?'Received ✓':'Mark Received'}</button></div></div>`}).join('');
 document.querySelectorAll('[data-pay]').forEach(b=>b.onclick=()=>togglePay(b.dataset.pay));
 const arr=[...f.transactions].sort((a,b)=>b.date.localeCompare(a.date)||b.id-a.id);
 $('moneyHistory').innerHTML=arr.length?arr.slice(0,25).map(x=>`<div class="money-item"><div class="row"><div><strong>${x.category}</strong><small>${x.date}${x.note?' • '+x.note:''}</small></div><div><strong class="${x.type==='income'?'positive':'negative'}">${x.type==='income'?'+':'-'}${money(x.amount)}</strong><button class="delete-btn" data-money="${x.id}">Delete</button></div></div></div>`).join(''):'<div class="empty">No transactions yet.</div>';
 document.querySelectorAll('[data-money]').forEach(b=>b.onclick=()=>{const d=financeStore();d.transactions=d.transactions.filter(x=>String(x.id)!==String(b.dataset.money));saveFinance(d);renderMoney();renderHome()});
}
function togglePay(pd){
 const f=financeStore(),rec=f.receivedPaychecks.includes(pd);
 if(rec){if(!confirm('Remove this paycheck?'))return;f.receivedPaychecks=f.receivedPaychecks.filter(x=>x!==pd);f.transactions=f.transactions.filter(x=>!(x.category==='Paycheck'&&x.date===pd&&x.note==='Scheduled biweekly paycheck'))}
 else{f.receivedPaychecks.push(pd);f.transactions.push({id:Date.now()+Math.random(),type:'income',amount:PAY_AMOUNT,category:'Paycheck',date:pd,note:'Scheduled biweekly paycheck'})}
 saveFinance(f);renderMoney();renderHome();toast(rec?'Paycheck removed':'Paycheck added');
}
document.querySelectorAll('.moneyType').forEach(b=>b.onclick=()=>{moneyType=b.dataset.type;document.querySelectorAll('.moneyType').forEach(x=>x.classList.toggle('active',x===b));if(moneyType==='income')$('moneyCategory').value='Other'});
$('saveMoneyTx').onclick=()=>{const amount=+$('moneyAmount').value,date=$('moneyDate').value,category=$('moneyCategory').value,note=$('moneyNote').value;if(!amount||amount<=0)return toast('Enter amount');const f=financeStore();f.transactions.push({id:Date.now()+Math.random(),type:moneyType,amount,category,date,note});saveFinance(f);$('moneyAmount').value='';$('moneyNote').value='';renderMoney();renderHome();toast('Transaction saved')};

function renderMasterHistory(){
 const ms=mealStore(),ls=lifeStore(),keys=[...new Set([...Object.keys(ms),...Object.keys(ls)])].sort().reverse().slice(0,40);
 $('masterHistory').innerHTML=keys.length?keys.map(k=>{const mt=mealTotals(k),le=ls[k]?.daily||{},d=new Date(k+'T00:00:00');return `<div class="timeline-item"><div class="row"><div><strong>${d.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}</strong><small>${le.workoutPlan||''}</small></div><strong>${le.score||0}%</strong></div><div class="food-macros"><span>${Math.round(mt.cal||(+le.calories||0))} kcal</span><span>${Math.round(mt.protein||(+le.protein||0))}g protein</span><span>${le.steps||0} steps</span><span>${le.weight||'—'} lb</span></div></div>`}).join(''):'<div class="empty">No saved activity yet.</div>';
}

function switchTab(name){
 document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.nav').forEach(x=>x.classList.toggle('active',x.dataset.tab===name));$('page'+name).classList.add('active');
 if(name==='Meals')renderMeals();if(name==='Life')renderLife();if(name==='Money')renderMoney();if(name==='History')renderMasterHistory();window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('.nav').forEach(b=>b.onclick=()=>switchTab(b.dataset.tab));
document.querySelectorAll('.go-tab').forEach(b=>b.onclick=()=>switchTab(b.dataset.tab));

setupFoods();renderMeals();renderLife();renderMoney();renderHome();renderMasterHistory();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
