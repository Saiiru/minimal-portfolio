interface PortfolioItem {
  title: string;
  description: string;
  imgUrl: string;
  stack: string[];
  link: string;
}

const portfolio: PortfolioItem[] = [
  {
    title: "Portfolio",
    description: "A portfolio website to showcase my projects and skills.",
    imgUrl: "https://th.bing.com/th/id/OIG4..ooY2SS_xLAOB4vZ.Ant?pid=ImgGn",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    link: "github.com/sairu/portfolio",
  },
  {
    title: "Portfolio2",
    description: "A portfolio website to showcase my projects and skills.",
    imgUrl: "",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    link: "github.com/sairu/portfolio",
  },
  {
    title: "Portfolio3",
    description: "A portfolio website to showcase my projects and skills.",
    imgUrl: "https://th.bing.com/th/id/OIG4..ooY2SS_xLAOB4vZ.Ant?pid=ImgGn",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    link: "github.com/sairu/portfolio",
  },
  {
    title: "Portfolio4",
    description: "A portfolio website to showcase my projects and skills.",
    imgUrl: "https://th.bing.com/th/id/OIG4..ooY2SS_xLAOB4vZ.Ant?pid=ImgGn",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    link: "github.com/sairu/portfolio",
  },
];

export default portfolio;