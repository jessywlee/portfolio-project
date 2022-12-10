import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/profile-pic.jpeg";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [introText, count] = useTypewriter({
    words: [
      "Hi, I'm Jessica Lee.",
      "Girl-who-loves-coffee.tsx",
      "<LearnerAndCreator/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-8 text-center overflow-hidden pt-10">
      <BackgroundCircles />
      <Image
        src={profilePic}
        alt="profile picture"
        className="relative w-32 h-32 rounded-full mx-auto grayscale"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-400 tracking-[15px] py-2">
          Frontend Developer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span>{introText}</span>
          <Cursor cursorColor="#e05abd" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skils">
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
