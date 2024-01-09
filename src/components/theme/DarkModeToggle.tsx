"use client";

import React from "react";
import { useTheme } from "next-themes";
import { ToggleButton } from "react-aria-components";

import { RiMoonLine, RiSunLine } from "react-icons/ri";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const Icon = theme === "light" ? <RiMoonLine /> : <RiSunLine />;

  return (
    <ToggleButton
      className="border-gray-400 hover:border-gray-200 focus:border-gray-200 dark:border-gray-200 dark:hover:border-gray-400 dark:focus:border-gray-400 inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition focus:outline-none w-14"
      onChange={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {Icon}
    </ToggleButton>
  );
};

export default DarkModeToggle;
