import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../public/profile-pic.jpeg";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-400 text-6xl">
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
        className="mt-[120px] md:mt-0 -mb-10 md:mb-0 flex-shrink-0  
					">
        <Image
          className="w-56 h-56 grayscale rounded-full 
					object-cover md:rounded-lg md:w-64 md:h-64 
					xl:w-[300] xl:h-[300]"
          src={profilePic}
          alt="profile picture"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background.</h4>
        <p>
          There was something in the tree. It was difficult to tell from the
          ground, but Rachael could see movement. She squinted her eyes and
          peered in the direction of the movement, trying to decipher exactly
          what she had spied. The more she peered, however, the more she thought
          it might be a figment of her imagination. Nothing seemed to move until
          the moment she began to take her eyes off the tree. Then in the corner
          of her eye, she would see the movement again and begin the process of
          staring again.
        </p>
      </div>
    </div>
  );
}
