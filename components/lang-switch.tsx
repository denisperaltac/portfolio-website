"use client";

import { useTheme } from "@/context/theme-context";
import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function LangSwitch() {
  const [t, i18n] = useTranslation("global");
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");
  return (
    <button
      className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white"
      onClick={() => {
        setIsEnglish(!isEnglish);
        const newLanguage = !isEnglish ? "en" : "es"; // Cambiar de español a inglés o viceversa
        i18n.changeLanguage(newLanguage);
      }}
    >
      {isEnglish ? <p>EN</p> : <p>ES</p>}
    </button>
  );
}
