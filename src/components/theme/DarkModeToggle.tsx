"use client";

import React from "react";
import { useTheme } from "next-themes";

import { RiMoonLine, RiSunLine } from "react-icons/ri";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const Icon =
    theme === "light" ? (
      <RiMoonLine role="img" aria-hidden="true" focusable="false" size={24} />
    ) : (
      <RiSunLine role="img" aria-hidden="true" focusable="false" size={24} />
    );

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Toggle light mode" : "Toggle dark mode"}
      className="border-orange-400 hover:border-orange-200 focus:border-orange-200 dark:border-cyan-200 dark:hover:border-cyan-400 dark:focus:border-cyan-400 inline-flex w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition focus:outline-none"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {Icon}
    </button>
  );
};

export default DarkModeToggle;
