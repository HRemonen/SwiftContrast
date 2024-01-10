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
    <div className="flex p-1 border-1 dark:bg-gray-50 dark:bg-opacity-15 rounded-md dark:border-gray-300">
      <input
        className="h-10 p-2 mr-2 border-1 border-gray-300 rounded-md"
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
      <div className="px-4 lg:px-24 mx-auto flex max-w-8xl items-center justify-between">
        <div className="block justify-center">
          <h2 className="mb-4 block whitespace-nowrap text-2xl font-semibold text-left">
            Set Text Color
          </h2>
          <ColorPicker
            id="textColor"
            label="Text color"
            color={textColor}
            onChange={setTextColor}
          />
        </div>
        <div className="block justify-center">
          <h2 className="mb-4 block whitespace-nowrap text-2xl font-semibold text-left">
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
