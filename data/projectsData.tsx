import Image from "next/image";
import Lmj from "../images/lmj.png";
import Mern from "../images/mern.png";
import Country from "../images/country.png";
import Portfolio from "../images/portfolio.png";

export const projectsData = [
  {
    id: 1,
    icon: <Image src={Mern} alt="Projet Mern" />,
    projectName: "Projet Mern - Racoont",
    description:
      "Ici, vous découvrirez un site de réseau social type Instagram. C'est un projet FULLSTACK, le backend tourne sur un autre serveur. Ce projet m'a beaucoup appris quant au fonctionnement et le développement des fonctionnalités que l'on peut voir sur ce genre de sites. Bonne visite ✌️",
    link: "https://warm-anchorage-60753.herokuapp.com/racoont-mern/home",
  },
  {
    id: 2,
    icon: <Image src={Lmj} alt="Projet e-commerce" />,
    projectName: "Projet React - La Maison Jungle",
    description:
      "Projet e-commerce, `La Maison Jungle` est une React app de vente de plantes. Ce projet m'a permis de me familiariser avec le fonctionnement et les fonctionnalités d'un site e-commerce.",
    link: "https://mehdi-filali.github.io/la-maison-jungle/",
  },
  {
    id: 3,
    icon: <Image src={Country} alt="Projet recencement" />,
    projectName: "Projet React - Country App",
    description:
      "Une application de recensement des pays par continent et de leur population. Dans ce projet, j'ai travaillé sur les requêtes API avec Axios (useEffect, useState), le mapping et le filtrage de la data (map, filter, sort, slice).",
    link: "https://mehdi-filali.github.io/country-app/",
  },
  {
    id: 4,
    icon: <Image src={Portfolio} alt="Projet Portfolio" objectFit="cover" />,
    projectName: "Projet Template Portfolio - v1",
    description: "Ici, vous découvrirez mon premier Portfolio",
    link: "https://mehdi-filali.github.io/web-portfolio/",
  },
];
