import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 py-2 px-3 flex items-center justify-between max-w-7xl mx-auto z-30">
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.socialUrl}
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
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
        <SocialIcon
          target="_blank"
          rel="noreferrer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className="cursor-pointer email-icon"
        />
        {/* </a> */}
      </motion.div>
    </header>
  );
}
