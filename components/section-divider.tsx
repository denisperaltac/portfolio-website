"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function SectionDivider() {
  return (
    <div className="w-[100%] my-14 h-16 rounded-full dark:bg-opacity-20 text-center text-[black] dark:text-[#dbd7fb]">
      <TypeAnimation
        sequence={[
          "I'm Denis",
          1000,
          "I'm Web Developer",
          1000,
          "I'm Mobile Developer",
          1000,
          "I'm UI/UX Designer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
}
