"use client";
import React, { useState } from "react";

interface ColorPickerProps {
  id: string;
  label: string;
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker = ({ id, label, color, onChange }: ColorPickerProps) => (
  <div className="flex flex-col">
    <label className="sr-only capitalize" htmlFor={id}>
      {label}
    </label>
    <div className="flex p-1 border-solid border-[1px] dark:border-0 w-full lg:w-[400px] border-gray-400 dark:bg-gray-50 dark:bg-opacity-15 rounded-md">
      <input
        className="h-10 p-2 mr-2 border-1 w-[100%] border-gray-300 rounded-md"
        id={id}
        type="text"
        value={color}
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        className="w-10 h-10 border-1 border-gray-300 rounded-md"
        id={id}
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
);

const ColorContrast = () => {
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  return (
    <section id="color-contrast" className="mt-8 lg:mt-12">
      <div className="px-2 lg:px-24 lg:mx-auto block lg:flex max-w-8xl items-center lg:justify-between">
        <div className="mb-8 mx-8 lg:mx-0 lg:mb-0 block justify-center">
          <h2 className="mb-2 lg:mb-4 block whitespace-nowrap text-md lg:text-2xl font-semibold text-left">
            Set Text Color
          </h2>
          <ColorPicker
            id="textColor"
            label="Text color"
            color={textColor}
            onChange={setTextColor}
          />
        </div>
        <div className="mb-8 mx-8 lg:mx-0 lg:mb-0 block justify-center">
          <h2 className="mb-2 lg:mb-4 block whitespace-nowrap text-md lg:text-2xl font-semibold text-left">
            Set Background Color
          </h2>
          <ColorPicker
            id="backgroundColor"
            label="Background color"
            color={backgroundColor}
            onChange={setBackgroundColor}
          />
        </div>
      </div>
    </section>
  );
};

export default ColorContrast;
