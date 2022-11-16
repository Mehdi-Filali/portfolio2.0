import { TbBrandJavascript, TbBrandCss3 } from "react-icons/tb";
import { FaReact, FaSass, FaSpotify } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import elp from "../images/elp.png";
import dynamique from "../images/dynamic.png";
import feuille from "../images/feuille.png";

export const experiencesData = [
  {
    id: 1,
    picture: dynamique,
    jobName: "Développeur React - Mission Freelance",
    companyName: "Dynamic' Assainissement",
    date: "2021-2022",
    missions: [
      "Réalisation des maquettes graphiques sur chaque support (tablettes, mobile et desktop).",
      "Choix des effets dynamiques visuels et fonctionnalités présentes sur le site.",
      "Développement du projet avec ReactJs.",
    ],
  },
  {
    id: 2,
    picture: feuille,
    jobName: "Développeur Front-End - Mission Freelance",
    companyName: "lafeuilleposee",
    date: "2021",
    missions: [
      "Participation à la conception de la charte graphique à partir d'un logo donné.",
      "Participation à la réalisation des maquettes graphiques sur chaque support (tablettes, mobile et desktop).",
      "Participation au développement du site avec Shopify.",
    ],
  },
  {
    id: 3,
    picture: elp,
    jobName: "Développeur Front-End - Mission Freelance",
    companyName: "ELP - Ouverture",
    date: "2019-2020",
    missions: [
      "Participation à la conception de la charte graphique à partir d'une première version du site.",
      "Réalisation des maquettes graphiques sur chaque support (tablettes, mobile et desktop).",
      "Participation au développement du site avec Wordpress et le template DIVI.",
    ],
  },
];
