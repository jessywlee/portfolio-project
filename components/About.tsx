import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-400 text-6xl">
        About
      </h3>
    </div>
  );
}
