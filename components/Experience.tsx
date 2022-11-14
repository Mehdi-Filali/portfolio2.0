import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiencesData } from "../data/experiencesData";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full">
        <Swiper
          modules={[EffectCards, Navigation]}
          navigation
          speed={800}
          grabCursor={true}
          effect="cards"
          className="w-full md:w-4/5 xl:w-1/2"
        >
          {experiencesData.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center !rounded-lg md:w-2/3 xl:w-1/2"
            >
              <ExperienceCard
                id={item.id}
                picture={item.picture}
                jobName={item.jobName}
                companyName={item.companyName}
                languageIcons={item.languageIcons}
                date={item.date}
                missions={item.missions}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}

export default Experience;
