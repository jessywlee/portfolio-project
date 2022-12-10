import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profilePic from "../public/profile-pic.jpeg";

type Props = {};

export default function Hero({}: Props) {
  const [introText, count] = useTypewriter({
    words: [
      "Hi, I'm Jessica Lee.",
      "Girl-who-loves-coffee.tsx",
      "<ButLovesToMakeSomethingCoolMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={profilePic}
        alt="profile picture"
        className="relative w-32 h-32 rounded-full mx-auto grayscale"
      />
      <div>
        <h1>
          <span>{introText}</span>
          <Cursor cursorColor="orange" />
        </h1>
      </div>
    </div>
  );
}
