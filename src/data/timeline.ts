interface TimelineItem {
  year: string;
  title: string;
  duration: string;
  details: string;
}

const timeline: TimelineItem[] = [
  {
    year: "today",
    title: "Bacharelado em Engenharia de Computação",
    duration: "2 anos",
    details:
      "Atualmente estou cursando Engenharia de Computação, onde estou aprimorando minhas habilidades em  focado em aprender e aplicar conceitos de engenharia de software, estruturas de dados, algoritmos e design de sistemas, Aprendi sobre arquitetura de computadores, teoria da ciência da computação, uma variedade de programação e aspectos de inteligência artificial..",
  },
  {
    year: "2021 - 2023",
    title: "Experiência Profissional",
    duration: "2 anos",
    details:
      "Tenho dois anos de experiência profissional em várias empresas de tecnologia. Trabalhei como Analista de Soluções, Desenvolvedor Front-end e Desenvolvedor Web. Durante esse tempo, desenvolvi interfaces front-end utilizando Angular 8 e React, e back-end em Java e Node.js. Utilizei Docker, Jira e Git Flow para gerenciar o desenvolvimento e garantir a qualidade do código. Colaborei ativamente em todas as fases do ciclo de vida do desenvolvimento de software, contribuindo para o desenvolvimento de soluções escaláveis e aplicando as melhores práticas e padrões de design.",
  },
  {
    year: "2020 - 2021",
    title: "Técnico em Desenvolvimento de Sistemas",
    duration: "2 anos",
    details:
      "Completei um curso técnico em Desenvolvimento de Sistemas, onde aprendi lógica de programação, modelagem de sistemas, banco de dados, programação de aplicativos, desenvolvimento de sistemas, teste de sistemas, implantação e manutenção de sistemas e implementação de projetos.",
  },
  {
    year: "2010",
    title: "Freelancer",
    duration: "14 anos",
    details:
      "Comecei a programar em 2010, com jogos e outras aplicações interessantes. Ao longo dos anos, aprimorei minhas habilidades e agora sou capaz de desenvolver soluções completas para qualquer desafio de programação.",
  },
];

export default timeline;