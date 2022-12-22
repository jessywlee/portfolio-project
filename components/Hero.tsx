import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [introText, count] = useTypewriter({
    words: pageInfo?.name,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-8 text-center overflow-hidden pt-[150px]">
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Jessica's profile image generated by midjourney AI"
        className="relative rounded-full mx-auto"
        width={128}
        height={128}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-400 tracking-[15px] py-2">
          {pageInfo.role}
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
