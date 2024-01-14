"use client";

import React, { useState } from "react";

import { IoSwapHorizontal } from "react-icons/io5";

import ColorPicker from "./ColorPicker";
import ColorPreview from "./ColorPreview";
import ContrastChecker from "./ContrastChecker";

const ColorContrast = () => {
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleSwapColors = () => {
    setTextColor(backgroundColor);
    setBackgroundColor(textColor);
  };

  return (
    <section
      id="color-contrast"
      className="mt-8 lg:mt-12 max-w-[1024px] mx-auto"
    >
      <div className="flex flex-col md:flex-row">
        <ColorPreview textColor={textColor} backgroundColor={backgroundColor} />

        <div className="w-full max-w-[600px]">
          <div className="flex flex-col md:flex-row lg:space-x-4 md:pr-2 lg:pr-8 ">
            <ColorPicker
              id="textColor"
              label="Text color"
              color={textColor}
              onChange={setTextColor}
            />

            <div className="flex flex-col justify-center items-center">
              <button
                className="flex items-center justify-center md:mt-6 lg:mt-3 w-10 h-10 rounded-md border-solid border-[1px] dark:border-0 border-gray-400 hover:border-2 dark:hover:border-2 hover:border-blue-600 dark:hover:border-blue-300 dark:bg-gray-50 dark:bg-opacity-15"
                aria-label="Swap color values"
                onClick={handleSwapColors}
              >
                <IoSwapHorizontal size={24} />
              </button>
            </div>

            <ColorPicker
              id="backgroundColor"
              label="Background color"
              color={backgroundColor}
              onChange={setBackgroundColor}
            />
          </div>

          <ContrastChecker
            textColor={textColor}
            backgroundColor={backgroundColor}
          />
        </div>
      </div>
    </section>
  );
};

export default ColorContrast;
