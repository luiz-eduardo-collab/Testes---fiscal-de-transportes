const ESPECIFICOS_QUESTIONS = [
  {
    "id": "ESP-001",
    "assunto": "CTB",
    "enunciado": "O CONTRAN é:",
    "alternativas": [
      "órgão máximo normativo e consultivo do Sistema Nacional de Trânsito",
      "órgão executivo estadual",
      "JARI",
      "órgão municipal"
    ],
    "correta": 0,
    "explicacao": "O CONTRAN exerce competências normativas e consultivas previstas no CTB."
  },
  {
    "id": "ESP-002",
    "assunto": "CTB",
    "enunciado": "A SENATRAN integra a estrutura executiva de trânsito da União e exerce competências definidas no CTB.",
    "alternativas": [
      "Verdadeiro",
      "Falso",
      "Somente em municípios",
      "Somente para transporte coletivo"
    ],
    "correta": 0,
    "explicacao": "A alternativa descreve corretamente a atuação executiva federal prevista na legislação."
  },
  {
    "id": "ESP-003",
    "assunto": "Circulação",
    "enunciado": "Em uma rotatória, na ausência de sinalização específica, a preferência é:",
    "alternativas": [
      "de quem entra",
      "de quem já circula por ela",
      "do maior veículo",
      "sempre do ônibus"
    ],
    "correta": 1,
    "explicacao": "A regra geral de preferência considera o veículo que já circula na rotatória."
  },
  {
    "id": "ESP-004",
    "assunto": "Medidas administrativas",
    "enunciado": "A remoção de veículo, quando prevista para determinada infração, é classificada no CTB como:",
    "alternativas": [
      "penalidade",
      "medida administrativa",
      "recurso",
      "infração autônoma"
    ],
    "correta": 1,
    "explicacao": "Remoção é medida administrativa, distinta da penalidade."
  },
  {
    "id": "ESP-005",
    "assunto": "Fiscalização",
    "enunciado": "Durante uma fiscalização, o veículo de transporte está fora do itinerário informado. A primeira providência adequada é:",
    "alternativas": [
      "aplicar automaticamente a maior punição",
      "verificar o itinerário, a autorização e eventual exceção aplicável",
      "ignorar a situação",
      "cancelar a linha"
    ],
    "correta": 1,
    "explicacao": "O fiscal deve primeiro verificar os fatos e a documentação/norma aplicável antes do enquadramento."
  },
  {
    "id": "ESP-006",
    "assunto": "Relatórios",
    "enunciado": "Um relatório de fiscalização deve priorizar:",
    "alternativas": [
      "opiniões pessoais",
      "fatos objetivos, verificáveis e devidamente identificados",
      "boatos",
      "informações sem data"
    ],
    "correta": 1,
    "explicacao": "O registro administrativo deve ser objetivo e permitir verificar o ocorrido."
  },
  {
    "id": "ESP-007",
    "assunto": "Lotação",
    "enunciado": "Um ônibus tem capacidade autorizada para 45 passageiros e transporta 53. O excesso é de:",
    "alternativas": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correta": 2,
    "explicacao": "53 − 45 = 8 passageiros."
  },
  {
    "id": "ESP-008",
    "assunto": "Mecânica",
    "enunciado": "O radiador integra principalmente o sistema de:",
    "alternativas": [
      "arrefecimento",
      "direção",
      "transmissão",
      "alimentação elétrica"
    ],
    "correta": 0,
    "explicacao": "O radiador participa da troca de calor do sistema de arrefecimento."
  },
  {
    "id": "ESP-009",
    "assunto": "Mecânica",
    "enunciado": "Freios pneumáticos são especialmente comuns em:",
    "alternativas": [
      "veículos pesados",
      "bicicletas",
      "veículos sem motor",
      "somente motocicletas"
    ],
    "correta": 0,
    "explicacao": "Sistemas pneumáticos são amplamente empregados em veículos pesados."
  },
  {
    "id": "ESP-010",
    "assunto": "Regulação",
    "enunciado": "Uma concessionária de transporte público:",
    "alternativas": [
      "não pode ser fiscalizada",
      "deve cumprir a legislação e as condições do contrato",
      "pode alterar livremente o serviço",
      "não precisa observar padrões de segurança"
    ],
    "correta": 1,
    "explicacao": "A concessão não elimina a fiscalização nem as obrigações legais e contratuais."
  },
  {
    "id": "ESP-011",
    "assunto": "Fiscalização",
    "enunciado": "Uma boa prática ao elaborar um auto ou relatório é:",
    "alternativas": [
      "registrar fatos, local, data, horário e identificação pertinente",
      "omitir informações inconvenientes",
      "usar linguagem ofensiva",
      "substituir fatos por opiniões"
    ],
    "correta": 0,
    "explicacao": "Informações objetivas e identificáveis dão consistência ao registro."
  },
  {
    "id": "ESP-012",
    "assunto": "Transporte",
    "enunciado": "O controle de lotação busca, entre outras finalidades:",
    "alternativas": [
      "verificar o atendimento da capacidade autorizada e condições de segurança",
      "aumentar a velocidade do veículo",
      "dispensar manutenção",
      "substituir documentos do veículo"
    ],
    "correta": 0,
    "explicacao": "A capacidade autorizada é relevante para segurança e regularidade do serviço."
  },
  {
    "id": "ESP-013",
    "assunto": "Direitos",
    "enunciado": "Ao fiscalizar uma gratuidade ou benefício tarifário, a conduta adequada é:",
    "alternativas": [
      "ignorar as regras",
      "verificar os requisitos previstos na legislação/regulamentação aplicável",
      "criar requisitos no momento da fiscalização",
      "recusar qualquer benefício"
    ],
    "correta": 1,
    "explicacao": "O fiscal deve aplicar os critérios previstos na legislação e regulamentação vigente."
  },
  {
    "id": "ESP-014",
    "assunto": "Fiscalização",
    "enunciado": "Antes de enquadrar uma irregularidade, é recomendável:",
    "alternativas": [
      "confirmar os fatos e relacioná-los ao dispositivo aplicável",
      "escolher qualquer enquadramento",
      "aplicar a infração mais grave sempre",
      "dispensar o registro"
    ],
    "correta": 0,
    "explicacao": "O enquadramento deve decorrer da constatação objetiva e da norma aplicável."
  },
  {
    "id": "ESP-015",
    "assunto": "Mecânica",
    "enunciado": "A verificação de pneus é relevante para fiscalização por estar relacionada principalmente a:",
    "alternativas": [
      "segurança e condições de circulação",
      "apenas conforto",
      "somente consumo de combustível",
      "somente aparência"
    ],
    "correta": 0,
    "explicacao": "Pneus em condições inadequadas podem comprometer a segurança."
  }
];
