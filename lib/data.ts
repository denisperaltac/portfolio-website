import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineBookOpen } from "react-icons/hi";

import SHApp from "@/public/SH-app.png";
import caffitoPhoto from "@/public/caffito-photo.png";
import TruewayPicture1 from "@/public/Trueway-picture-1.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Industrial Ingeniering UTN ",
    location: "Santa Fe, AR",
    description:
      "UTN-Experience",
    icon: React.createElement(HiOutlineBookOpen),
    date: "02/01/2014 - 05/01/2020",
  },
  {
    title: "Graduated UTN E-learning",
    location: "Buenos Aires, AR",
    description:
      "UTN-E-learning",
    icon: React.createElement(LuGraduationCap),
    date: "12/01/2021 - 05/01/2022",
  },
  {
    title: "Full Stack Developer",
    location: "Cordoba, AR",
    description:
      "SH",
    icon: React.createElement(CgWorkAlt),
    date: "05/01/2022 - 09/01/2022",
  },
  {
    title: "App Developer",
    location: "Santa Fe, AR",
    description:
      "Caffalac",
    icon: React.createElement(TbDeviceMobileCode),
    date: "08/01/2022 - 11/01/2022",
  },
  {
    title: "Full Stack Developer",
    location: "Orlando, FL",
    description:
      "Trueway",
    icon: React.createElement(FaReact),
    date: "11/01/2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Trueway Realty",
    description:
      "Worked as a Full-Stack developer for one year, creating web applications for insurance and real estate sales, purchases, and rentals.",
    tags: ["React", "AWS", "Node.js", "Bootstrap", "Socket.io", "Datadog", "Twilio API"],
    imageUrl: TruewayPicture1,
  },
  {
    title: "Caffalac SRL",
    description:
      "Worked as a App developer for four months on a React Native app for supermarket management.",
    tags: ["React Native", "TypeScript", "Redux","Bootstrap"],
    imageUrl: caffitoPhoto,
  },
  {
    title: "SH",
    description:
      "Worked as a Full-Stack developer for five months on a patient management application for 'SH dermatología y estética'.",
    tags: ["React", "Redux", "Node.js", "pgAdmin", "Sequelize"],
    imageUrl: SHApp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Firebase",
  "Next.js",
  "Node.js",
  "Git",
  "Prisma",
  "Redux",
  "Express",
  "PostgreSQL",
  "Sequelize",
  "Google Cloud",
  "Bootstrap",
  "Datadog",
  "Socket.io",
  "Framer Motion",
  "Tailwind",
] as const;
