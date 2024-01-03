"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello! I am an enthusiastic <b> FULL STACK DEVELOPER</b> with nearly 2
        years of hands-on experience in the software development field. I am
        deeply passionate about crafting engaging and responsive web and mobile
        applications. My skill set encompasses a wide array of technologies,
        including{" "}
        <b>
          {" "}
          JavaScript, React, React Native, TypeScript, Redux, Node.js, Express,
          PostgreSQL, Sequelize, AWS, Bootstrap, HTML, CSS, and Git.
        </b>{" "}
        My expertise extends to <b>agile methodologies</b> , and I take pride in
        my ability to swiftly adapt and learn new technologies. I am constantly
        on the lookout for opportunities to broaden my knowledge and enhance my
        skill set. Collaboration is at the heart of my approach, and I thrive in
        team environments, where I can collaborate with others to bring
        exceptional experiences to life.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing the
        bass, watching movies or tv shows, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <b>IA </b>and<b> astronomy</b>.
      </p>
    </motion.section>
  );
}
