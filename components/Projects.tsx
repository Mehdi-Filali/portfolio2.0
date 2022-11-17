import Image from "next/image";
import React from "react";
import Design from "../images/design.jpg";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import Link from "next/link";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projectsData.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-8 md:p-44 h-screen"
            key={project.id}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              // viewport={{ once: true }}
              className="flex flex-col justify-center items-center space-y-6"
            >
              <div className="relative w-64 h-36 rounded-lg overflow-hidden md:w-96 md:h-[213px] lg:w-[500px] lg:h-[275px]">
                {project.icon}
              </div>

              <div className="space-y-4 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl md:text-4xl font-semibold text-center">
                  <span className="italic text-[#F7AB0A]/50">
                    Projet {index + 1} sur {projects.length}:
                  </span>{" "}
                  {project.projectName}
                </h4>
                <p className="text-sm md:text-lg text-left">
                  {project.description}
                </p>
                <Link href={project.link}>
                  <button className="heroButton">Voir le Site</button>
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
