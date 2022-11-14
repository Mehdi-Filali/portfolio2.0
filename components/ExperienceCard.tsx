import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import CardPic from "../images/web-coding.jpg";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { experiencesData } from "../data/experiencesData";

type Props = {
  id: number;
  picture: string;
  jobName: string;
  companyName: string;
  languageIcons: [string];
  date: string;
  missions: [string];
};

export default function ExperienceCard({
  id,
  picture,
  jobName,
  companyName,
  languageIcons,
  date,
  missions,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      key={id}
      className="flex flex-col items-center space-y-7 flex-shrink-0 w-full h-full bg-[#2f2f2f] border-x-2 border-x-[#F7AB0A]/20 p-10"
    >
      <div className="relative w-32 h-32 rounded-full overflow-hidden xl:w-[200px] xl:h-[200px] border-1 border-black shadow-md bg-white">
        <Image
          src={picture}
          alt="Photo about"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{jobName}</h4>
        <p className="text-2xl font-bold mt-1">{companyName}</p>

        <div className="">
          <div className="flex space-x-2 my-2 text-xl">{languageIcons}</div>
        </div>

        <p className="uppercase py-5 text-gray-400">{date}</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {missions.map((item) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}