import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import CardPic from "../images/web-coding.jpg";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { experiencesData } from "../data/experiencesData";

type Props = {
  id: number;
  picture: StaticImageData;
  jobName: string;
  companyName: string;
  date: string;
  missions: string[];
};

export default function ExperienceCard({
  id,
  picture,
  jobName,
  companyName,
  date,
  missions,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      key={id}
      className="flex flex-col items-center space-y-5 md:space-y-7 flex-shrink-0 w-full bg-[#2f2f2f] border-x-2 border-x-[#F7AB0A]/20 p-3 md:p-10"
    >
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden xl:w-[200px] xl:h-[200px] border-1 border-black shadow-md bg-white">
        <Image
          src={picture}
          alt="Photo about"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>

      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-light">{jobName}</h4>
        <p className="md:text-2xl text-lg font-bold mt-1">{companyName}</p>

        <p className="uppercase py-3 md:py-5 text-gray-400">{date}</p>

        <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg">
          {missions.map((item) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
