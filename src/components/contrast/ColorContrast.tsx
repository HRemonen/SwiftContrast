"use client";

import React, { useState } from "react";

import ColorPicker from "./ColorPicker";
import ColorPreview from "./ColorPreview";
import ContrastChecker from "./ContrastChecker";

const ColorContrast = () => {
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  return (
    <section
      id="color-contrast"
      className="mt-8 lg:mt-12 max-w-[1024px] mx-auto"
    >
      <div className="flex flex-col md:flex-row">
        <ColorPreview textColor={textColor} backgroundColor={backgroundColor} />

        <div className="w-full max-w-[600px]">
          <div className="flex flex-col md:flex-row md:space-x-4 md:pr-2 lg:pr-8 ">
            <ColorPicker
              id="textColor"
              label="Text color"
              color={textColor}
              onChange={setTextColor}
            />

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
