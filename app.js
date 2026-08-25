const TOPICS={
portugues:["Interpretação e inferências","Coesão e estrutura textual","Classes gramaticais","Sintaxe","Concordância","Crase","Pontuação","Acentuação"],
matematica:["Operações e frações","MMC/MDC e conjuntos","Matrizes e sistemas","Equações e polinômios","Porcentagem e regra de três","Médias e medidas","Geometria","Probabilidade, PA e combinatória"],
informatica:["Windows e arquivos","Word","Excel","PowerPoint","Internet e intranet","Segurança da informação","Certificação e assinatura digital"],
gerais:["Ponta Grossa","Paraná","Brasil","Atualidades","Lei Orgânica Municipal"],
especificos:["CTB e SNT","Infrações","Penalidades e medidas administrativas","Fiscalização","Transporte coletivo/individual","Lotação e itinerários","Autos e relatórios","Concessões e permissões","Direitos e gratuidades","Mecânica"]
};
function show(id){document.querySelectorAll(".page").forEach(x=>x.classList.add("hidden"));document.getElementById(id).classList.remove("hidden");if(id==="inicio"){renderDashboard();renderDays();}if(id==="erros")renderErrors();}
function setupDiscipline(key,label){
 document.getElementById(key+"-topics").innerHTML=`<div class="topic-grid">${TOPICS[key].map(x=>`<div class="topic">${x}</div>`).join("")}</div>`;
 renderQuiz(key+"-quiz",key,10,"Questões — "+label);
 document.getElementById(key+"-quiz").insertAdjacentHTML("beforeend",`<hr><h3>Histórico de tentativas</h3><div id="${key}-history">${renderHistory(key)}</div>`);
}
document.querySelectorAll("nav button").forEach(b=>b.addEventListener("click",()=>show(b.dataset.page)));
registerBank("portugues",PORTUGUES_QUESTIONS);
registerBank("matematica",MATEMATICA_QUESTIONS);
registerBank("informatica",INFORMATICA_QUESTIONS);
registerBank("gerais",GERAIS_QUESTIONS);
registerBank("especificos",ESPECIFICOS_QUESTIONS);
registerBank("simulado",[...ESPECIFICOS_QUESTIONS,...PORTUGUES_QUESTIONS,...MATEMATICA_QUESTIONS,...INFORMATICA_QUESTIONS,...GERAIS_QUESTIONS]);
setupDiscipline("portugues","Português");
setupDiscipline("matematica","Matemática");
setupDiscipline("informatica","Informática");
setupDiscipline("gerais","Conhecimentos Gerais");
setupDiscipline("especificos","Conhecimentos Específicos");
renderQuiz("simulado-quiz","simulado",20,"Simulado — 20 questões");
renderDashboard();renderDays();renderErrors();
