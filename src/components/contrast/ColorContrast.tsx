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
    <input
      id={id}
      type="color"
      value={color}
      onChange={(e) => onChange(e.target.value)}
    />
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
