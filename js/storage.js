const STORE_KEY="fiscalTransportesV2";
const defaultState=()=>({doneDays:[],attempts:{},errors:{},settings:{version:2}});
function loadState(){try{return Object.assign(defaultState(),JSON.parse(localStorage.getItem(STORE_KEY)||"{}"));}catch(e){return defaultState();}}
let STATE=loadState();
function saveState(){localStorage.setItem(STORE_KEY,JSON.stringify(STATE));}
function getHistory(key){return STATE.attempts[key]||[];}
function addAttempt(key,record){if(!STATE.attempts[key])STATE.attempts[key]=[];STATE.attempts[key].push(record);saveState();}
function addError(q){if(!STATE.errors[q.id])STATE.errors[q.id]={question:q,wrong:0,right:0};STATE.errors[q.id].wrong++;saveState();}
function removeError(id){delete STATE.errors[id];saveState();}
function markDay(day){const i=STATE.doneDays.indexOf(String(day));if(i>=0)STATE.doneDays.splice(i,1);else STATE.doneDays.push(String(day));saveState();}
function resetAnswersOnly(){document.querySelectorAll('input[type="radio"]').forEach(x=>x.checked=false);document.querySelectorAll(".feedback").forEach(x=>x.innerHTML="");}
function resetAll(){if(confirm("Apagar TODO o histórico, tentativas, erros e progresso dos 21 dias?")){STATE=defaultState();saveState();location.reload();}}

