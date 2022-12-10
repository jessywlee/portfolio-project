import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky py-2 flex items-center justify-between max-w-7xl mx-auto">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}>
        <SocialIcon
          url="https://linkedin.com/in/jessywlee"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://jessywlee.medium.com/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/jessywlee"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}>
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
      </motion.div>
    </header>
  );
}
