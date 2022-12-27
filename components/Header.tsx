import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 z-30 bg-[rgb(36,36,36)] ">
      <div className="max-w-7xl w-full flex items-center justify-between mx-auto py-2 px-3">
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
          }}
        >
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
          }}
        >
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
      </div>
    </header>
  );
}
