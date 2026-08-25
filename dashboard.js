const DAYS=[
["1","Específicos","SNT: órgãos, competências e fiscalização"],
["2","Específicos","Normas de circulação e conduta"],
["3","Específicos","Infrações e enquadramentos"],
["4","Específicos","Penalidades e medidas administrativas"],
["5","Específicos","Técnicas de fiscalização e abordagem"],
["6","Específicos","Transporte coletivo/individual, direitos e gratuidades"],
["7","Revisão","Simulado + análise dos erros"],
["8","Específicos","Auto de infração e elaboração de relatórios"],
["9","Específicos","Lotação, itinerários e horários"],
["10","Específicos","Concessões, permissões, regulação e qualidade"],
["11","Específicos","Mecânica de veículos leves e pesados"],
["12","Português","Interpretação, coesão, inferência e estrutura"],
["13","Português","Morfologia, sintaxe, concordância, crase e pontuação"],
["14","Matemática","Porcentagem, razão, proporção e regra de três"],
["15","Matemática","Frações, MMC/MDC, equações, geometria e probabilidade"],
["16","Informática","Windows, Word, Excel e PowerPoint"],
["17","Informática","Internet, segurança, certificação e assinatura digital"],
["18","Gerais","Ponta Grossa, Paraná, Brasil, atualidades e Lei Orgânica"],
["19","Revisão","Conhecimentos Específicos — revisão geral"],
["20","Simulado","Prova completa"],
["21","Simulado","Prova final + caderno de erros"]
];
const DISC=[["portugues","Português"],["matematica","Matemática"],["informatica","Informática"],["gerais","Conhecimentos Gerais"],["especificos","Conhecimentos Específicos"]];
function renderDays(){document.getElementById("days").innerHTML=DAYS.map(d=>`<div class="day ${STATE.doneDays.includes(d[0])?"done":""}"><div class="num">DIA ${d[0]}</div><div style="flex:1"><b>${d[1]}</b><br><span class="muted">${d[2]}</span></div><button onclick="markDay('${d[0]}');renderDays();renderDashboard()"> ${STATE.doneDays.includes(d[0])?"✓ Concluído":"Concluir"} </button></div>`).join("");}
function aggregate(){let all=[];Object.values(STATE.attempts).forEach(a=>a.forEach(x=>all.push(x)));let q=all.reduce((n,x)=>n+x.answered,0),r=all.reduce((n,x)=>n+x.right,0);return {q,r,p:q?Math.round(r/q*100):0};}
function renderDashboard(){const a=aggregate();document.getElementById("dashboard").innerHTML=`<div class="stats"><div class="stat"><strong>${STATE.doneDays.length}/21</strong>dias concluídos</div><div class="stat"><strong>${a.q}</strong>questões</div><div class="stat"><strong>${a.p}%</strong>acerto geral</div><div class="stat"><strong>${Object.keys(STATE.errors).length}</strong>erros no caderno</div></div><p><b>Progresso:</b> ${Math.round(STATE.doneDays.length/21*100)}%</p><div class="progress"><span style="width:${Math.round(STATE.doneDays.length/21*100)}%"></span></div><h3>Desempenho por disciplina</h3><div class="topic-grid">${DISC.map(([k,n])=>{let h=getHistory(k);let p=h.length?Math.round(h.reduce((a,x)=>a+x.pct,0)/h.length):0;let l=level(p);return `<div class="topic"><b>${n}</b><br>${h.length?p+"% — "+l[0]:"Ainda não iniciado"}<br><small>${h.length} tentativa(s)</small></div>`}).join("")}</div><div class="actions"><button class="danger" onclick="resetAll()">⚠️ Resetar todo o progresso</button></div>`;}
function renderErrors(){const el=document.getElementById("errors");const arr=Object.values(STATE.errors);if(!arr.length){el.innerHTML="<p class='muted'>Nenhuma questão registrada no caderno de erros.</p>";return;}el.innerHTML=`<p>${arr.length} questão(ões) com erro.</p>`+arr.sort((a,b)=>b.wrong-a.wrong).map(e=>`<div class="error-item"><b>${e.question.enunciado}</b><p>Erros registrados: ${e.wrong}</p><p>Resposta correta: <b>${String.fromCharCode(65+e.question.correta)}) ${e.question.alternativas[e.question.correta]}</b></p><p><small>${e.question.explicacao||""}</small></p><button onclick="removeError('${e.question.id}');renderErrors()">Remover do caderno</button></div>`).join("");}
