import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GiWingedArrow } from "react-icons/gi";
import Logo from "../images/logo.png";

type Props = {
  id: number;
  icon: string | JSX.Element;
  skillName: string;
  exp: string;
  years: number;
};

export default function Skill({ id, icon, skillName, exp, years }: Props) {
  let xpYears = 2;
  let progressBar = (years / xpYears) * 100 + "%";
  let progress = (years / xpYears) * 100;

  return (
    <div className="group">
      <div className="flex flex-col items-start space-y-2">
        <div className="text-4xl xl:text-5xl">{icon}</div>
        <p className="text-xl">{skillName}</p>
        <div className="bg-gray-500 w-full h-1 rounded">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: ["0%", progressBar] }}
            transition={{ delay: 2 }}
            className={`bg-[#F7AB0A] h-1 rounded relative`}
          >
            {/* <div className="absolute top-0 right-0 -translate-y-6 bg-inherit rounded">
              <p className="text-xs">{exp}</p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
