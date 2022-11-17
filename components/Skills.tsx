import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { skillsData } from "../data/skillsData";
import { frameworksData } from "../data/skillsData";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="w-full mb-8 md:mb-0 md:mt-12">
        <h4 className="mx-auto w-2/3 uppercase tracking-[10px] text-gray-500 text-md mb-4 xl:mb-8">
          Langages
        </h4>
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 text-center mx-auto w-5/6 mb:w-2/3 mb-4 md:mb-12 xl:mb-24">
          {skillsData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: i * 0.15 }}
            >
              <Skill
                id={item.id}
                icon={item.icon}
                skillName={item.skillName}
                exp={item.exp}
                years={item.years}
              />
            </motion.div>
          ))}
        </div>

        <h4 className="mx-auto w-2/3 uppercase tracking-[10px] text-gray-500 text-md mb-4 xl:mb-8">
          Frameworks & Librairies
        </h4>
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 md:gap-y-8 text-center mx-auto w-5/6 md:w-2/3">
          {frameworksData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: i * 0.15 }}
            >
              <Skill
                id={item.id}
                icon={item.icon}
                skillName={item.skillName}
                exp={item.exp}
                years={item.years}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
