import { TbBrandJavascript, TbBrandCss3 } from "react-icons/tb";
import { FaReact, FaSass, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
} from "react-icons/si";

export const skillsData = [
  {
    id: 1,
    icon: <TbBrandJavascript color="#F7C427" />,
    skillName: "Javascript",
    exp: "50%",
    years: 1.3,
  },
  {
    id: 2,
    icon: <TbBrandCss3 color="#254BDD" />,
    skillName: "Css3",
    exp: "50%",
    years: 1.8,
  },
  {
    id: 3,
    icon: <SiTypescript color="#3073BF" />,
    skillName: "Typescript",
    exp: "50%",
    years: 0.9,
  },
  {
    id: 4,
    icon: <SiHtml5 color="#F75420" />,
    skillName: "HTML5",
    exp: "50%",
    years: 1.9,
  },
];

export const frameworksData = [
  {
    id: 1,
    icon: <FaReact color="#5ED3F2" />,
    skillName: "React",
    exp: "60%",
    years: 1.4,
  },
  {
    id: 2,
    icon: <FaSass color="#CF6A9E" />,
    skillName: "Sass",
    exp: "50%",
    years: 1.8,
  },
  {
    id: 3,
    icon: <SiTailwindcss color="#36B7F0" />,
    skillName: "TailwindCss",
    exp: "50%",
    years: 1.8,
  },
  {
    id: 4,
    icon: <SiNextdotjs color="#000" />,
    skillName: "NextJs",
    exp: "50%",
    years: 1.4,
  },
  {
    id: 5,
    icon: <SiBootstrap color="#7912F2" />,
    skillName: "Bootstrap",
    exp: "50%",
    years: 1.8,
  },
  {
    id: 6,
    icon: <FaNodeJs color="#89C34D" />,
    skillName: "NodeJs",
    exp: "50%",
    years: 1.2,
  },
];
