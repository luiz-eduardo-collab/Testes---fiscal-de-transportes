const QUIZ_BANK={};
let activeQuizzes={};
function registerBank(key,arr){QUIZ_BANK[key]=arr;}
function shuffle(a){return [...a].sort(()=>Math.random()-0.5);}
function makeAttempt(key,amount=10){const bank=QUIZ_BANK[key]||[];return shuffle(bank).slice(0,Math.min(amount,bank.length));}
function level(p){if(p<60)return ["CRÍTICO","level-red"];if(p<70)return ["FRACO","level-red"];if(p<80)return ["ATENÇÃO","level-yellow"];if(p<90)return ["BOM","level-green"];return ["DOMÍNIO","level-blue"];}
function renderQuiz(containerId,key,amount=10,title="Questões"){
 const el=document.getElementById(containerId); const qs=makeAttempt(key,amount); activeQuizzes[key]={qs,containerId};
 if(!qs.length){el.innerHTML="<p>Nenhuma questão cadastrada ainda.</p>";return;}
 el.innerHTML=`<div class="quiz-head"><h2>${title}</h2><span class="badge">${qs.length} questões nesta tentativa</span></div>
 <div class="actions"><button onclick="resetAnswersOnly()">🧹 Limpar respostas</button><button onclick="renderQuiz('${containerId}','${key}',${amount},'${title.replaceAll("'","")}')">🔄 Nova tentativa</button></div>
 <div id="${containerId}-questions">${qs.map((q,i)=>questionHTML(q,i,key)).join("")}</div>
 <button class="primary" onclick="finishQuiz('${key}')">Finalizar tentativa</button>
 <div id="${containerId}-result"></div>`;
}
function questionHTML(q,i,key){
 return `<div class="question" data-q="${q.id}"><p><b>${i+1}. ${q.enunciado}</b></p>${q.alternativas.map((a,j)=>`<label class="option"><input type="radio" name="${key}-${q.id}" value="${j}"> ${String.fromCharCode(65+j)}) ${a}</label>`).join("")}<div class="feedback" id="fb-${key}-${q.id}"></div></div>`;
}
function finishQuiz(key){
 const data=activeQuizzes[key]; if(!data)return;
 let right=0,answered=0; const mistakes=[];
 data.qs.forEach(q=>{
   const el=document.querySelector(`input[name="${key}-${q.id}"]:checked`);
   const fb=document.getElementById(`fb-${key}-${q.id}`);
   if(!el){fb.className="feedback wrong";fb.textContent="Não respondida.";return;}
   answered++;
   if(Number(el.value)===q.correta){right++;fb.className="feedback correct";fb.innerHTML=`✓ Correto.<br><small>${q.explicacao||""}</small>`;}
   else{mistakes.push(q.id);addError(q);fb.className="feedback wrong";fb.innerHTML=`✗ Incorreto. <b>Resposta: ${String.fromCharCode(65+q.correta)}) ${q.alternativas[q.correta]}</b><br><small>${q.explicacao||""}</small>`;}
 });
 const pct=answered?Math.round(right/answered*100):0;
 addAttempt(key,{date:new Date().toISOString(),total:data.qs.length,answered,right,pct});
 const result=document.getElementById(data.containerId+"-result");
 const [label,cls]=level(pct);
 result.innerHTML=`<div class="result"><h3>${right}/${answered} — ${pct}%</h3><b class="${cls}">${label}</b><p>Erros nesta tentativa: ${mistakes.length}</p><p>O resultado foi salvo no histórico.</p><button onclick="show('erros')">📕 Ver caderno de erros</button></div>`;
 renderDashboard(); renderErrors();
}
function renderHistory(key){
 const h=getHistory(key); if(!h.length)return "<p class='muted'>Ainda não há tentativas.</p>";
 const best=Math.max(...h.map(x=>x.pct)),avg=Math.round(h.reduce((a,x)=>a+x.pct,0)/h.length),last=h[h.length-1].pct;
 return `<p><b>Tentativas:</b> ${h.length} &nbsp; <b>Última:</b> ${last}% &nbsp; <b>Melhor:</b> ${best}% &nbsp; <b>Média:</b> ${avg}%</p>
 <table class="history"><tr><th>#</th><th>Data</th><th>Questões</th><th>Acertos</th><th>%</th></tr>${h.slice().reverse().map((x,i)=>`<tr><td>${h.length-i}</td><td>${new Date(x.date).toLocaleString("pt-BR")}</td><td>${x.answered}/${x.total}</td><td>${x.right}</td><td>${x.pct}%</td></tr>`).join("")}</table>`;
}
