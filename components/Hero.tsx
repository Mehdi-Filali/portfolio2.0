import Image from "next/image";
import React from "react";
import ProfilPic from "../images/profil-pic.jpg";
import Typed from "react-typed";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative h-32 w-32 mx-auto">
        <Image
          src={ProfilPic}
          alt="Photo de profil"
          layout="fill"
          objectFit="contain"
          className="rounded-full object-cover"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">
            <Typed
              loop
              typeSpeed={30}
              backSpeed={20}
              backDelay={2000}
              strings={[
                "Salut ! Bienvenue sur mon portfolio ✌️",
                "Moi c'est Mehdi, je suis Développeur React 👋",
                "Contacte moi si tu veux discuter !",
              ]}
            />
          </span>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
