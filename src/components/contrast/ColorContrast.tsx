"use client";

import React, { useState } from "react";

import ColorPicker from "./ColorPicker";
import ColorPreview from "./ColorPreview";
import ContrastChecker from "./ContrastChecker";
import SwapButton from "../common/SwapButton";

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
      className="mt-12 lg:mt-24 max-w-[1024px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <ColorPreview textColor={textColor} backgroundColor={backgroundColor} />

        <div className="w-full max-w-[600px]">
          <div className="flex flex-col lg:flex-row lg:space-x-2 md:pr-2 lg:pr-8 ">
            <ColorPicker
              id="textColor"
              label="Text color"
              color={textColor}
              onChange={setTextColor}
            />

            <SwapButton handleSwapColors={handleSwapColors} />

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
