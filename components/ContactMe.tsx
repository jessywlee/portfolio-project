import React, { useEffect } from "react";
import ShinyCircle from "./ShinyCircle";
import { mouseMoveEffect } from "../utils/Util";


type Props = {};

export default function ContactMe({}: Props) {
  useEffect(() => {
    const background = document.querySelector('.contact-container') as HTMLElement
     mouseMoveEffect(background)
  },[])
  return (
    <div
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full
		justify-evenly mx-auto items-center z-0 contact-container">
      <ShinyCircle />
      <h3 className="absolute top-24 uppercase tracking-[20px] -mr-[20px] text-gray-400 text-4xl">
        Let&apos;s Talk
      </h3>

      <div className="flex flex-col justify-center items-center space-y-10">
        <p className="w-full p-4 sm:p-2 text-xl md:text-2xl text-semibold text-center max-w-[550px]">
          Whether you have a question or just want to chat, my inbox is always
          open. 💌 Let&apos;s keep in touch! 🤓
        </p>

        <button className="p-4 border border-gray-400 text-gray-400 rounded-md w-fit">
          <a
            className="uppercase text-xl text-semibold"
            href="mailto:to.jessywlee@gmail.com"
            target="_blank"
            rel="noreferrer">
            Say Hello
          </a>
        </button>
      </div>
    </div>
  );
}
