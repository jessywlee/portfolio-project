import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../public/profile-pic.jpeg";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import ShinyCircle from "./ShinyCircle";
import { mouseMoveEffect } from "../utils/Util";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  useEffect(() => {
    const background = document.querySelector('.about-container') as HTMLElement
     mouseMoveEffect(background)
  },[])
  return (
    <div className="relative about-container">
      <ShinyCircle />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="h-screen flex flex-col relative 
				text-center md:text-left md:flex-row max-w-7xl 
				px-10 justify-evenly mx-auto items-center z-20"
      >
        <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-400 text-4xl">
          About
        </h3>

        <motion.div
          initial={{
            x: -200,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{
            once: true,
          }}
          className="mt-[60px] sm:mt-[120px] md:mt-0 -mb-10 md:mb-0 flex-shrink-0  
					"
        >
          <Image
            className="w-56 h-56 grayscale rounded-full 
					object-cover md:rounded-lg md:w-64 md:h-64 
					xl:w-[300] xl:h-[300]"
            src={urlFor(pageInfo.profilePic).url()}
            width={300}
            height={300}
            alt="profile picture"
          />
        </motion.div>

        <div className="space-y-2 sm:space-y-5 px-0 md:px-10 -mt-10 sm:-mt-0">
          <h4 className="text-4xl font-semibold">Hello there!</h4>
          <p className=" sm:leading-6 text-sm sm:text-base">
            {pageInfo.backgroundInformation}
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute p-0 w-full top-[30%] bg-[#e05abd]/10 h-[400px] -skew-y-12"
      ></motion.div>
    </div>
  );
}
