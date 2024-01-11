"use client";

import React from "react";
import { useTheme } from "next-themes";
import { ToggleButton } from "react-aria-components";

import { RiMoonLine, RiSunLine } from "react-icons/ri";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const Icon =
    theme === "light" ? <RiMoonLine size={24} /> : <RiSunLine size={24} />;

  return (
    <ToggleButton
      className="border-orange-400 hover:border-orange-200 focus:border-orange-200 dark:border-cyan-200 dark:hover:border-cyan-400 dark:focus:border-cyan-400 inline-flex w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition focus:outline-none"
      onChange={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {Icon}
    </ToggleButton>
  );
};

export default DarkModeToggle;
