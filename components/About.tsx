import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Design from "../images/design.jpg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-16 md:mt-24 md:mb-0 flex-shrink-0"
      >
        <div className="relative w-32 h-32 md:w-64 rounded-full md:h-95 xl:w-[500px] xl:h-[600px] md:rounded-lg overflow-hidden">
          <Image
            src={Design}
            alt="Photo about"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom center"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="px-0 mb-28 md:mb-8 md:px-10 space-y-1 md:space-y-6"
      >
        <h4 className="xl:text-4xl text-2xl font-semibold">
          Un aperçu de mon parcours
        </h4>
        <p className="hidden xl:block text-sm">
          Mon parcours débute à l’école Webstart (Paris 10e). J’y ai appris les
          bases du développement web côté front et back. J’ai également appris à
          utiliser les logiciels de la suite Adobe. Ce qui, aujourd’hui, me
          permet d’avoir un profil polyvalent, de développeur/designer
          front-end.
          <br />
        </p>
        <p className="text-sm">
          <br />
          Passionné par le monde digital, j’aime me challengé en apprenant de
          nouvelles technologies et réaliser de nouveaux projets afin de grandir
          professionnellement. Mon profil polyvalent m’aide à avoir un regard
          que d’autres développeurs n’ont pas et m’aide à stimuler ma créativité
          dans mes projets.
          <br />
          <br />
          Aujourd’hui auto-entrepreneur, je reste à l’écoute des propositions
          qui s’offrent à moi 👍.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
