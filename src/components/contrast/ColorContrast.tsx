"use client";
import React, { useState } from "react";
import { text } from "stream/consumers";

interface ColorPickerProps {
  id: string;
  label: string;
  color: string;
  onChange: (color: string) => void;
}

const ColorPickerInput = ({ id, label, color, onChange }: ColorPickerProps) => {
  const textInputId = `${id}-hex-input`;
  const colorInputId = `${id}-picker-input`;

  return (
    <div className="flex flex-col">
      <div className="flex p-1 border-solid border-[1px] dark:border-0 w-full md:w-[300px] lg:w-[200px] border-gray-400 dark:bg-gray-50 dark:bg-opacity-15 rounded-md">
        <label className="sr-only" htmlFor={textInputId}>
          {label} HEX
        </label>
        <input
          className="h-10 p-2 mr-2 border-1 w-[100%] border-gray-300 rounded-md"
          id={textInputId}
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
        />

        <label className="sr-only" htmlFor={colorInputId}>
          {label} picker
        </label>
        <input
          className="w-10 h-10 border-1 border-gray-300 rounded-md"
          id={colorInputId}
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

const ColorPicker = ({ id, label, color, onChange }: ColorPickerProps) => (
  <div className="mx-2 md:mx-8 lg:mx-0 mb-8">
    <h2 className="mb-2 lg:mb-4 block capitalize whitespace-nowrap text-md lg:text-lg font-semibold text-left">
      Set {label}
    </h2>
    <ColorPickerInput id={id} label={label} color={color} onChange={onChange} />
  </div>
);

interface ColorPreviewProps {
  textColor: string;
  backgroundColor: string;
}

const ColorPreview = ({ textColor, backgroundColor }: ColorPreviewProps) => (
  <div
    className="flex flex-col justify-center items-center mx-2 lg:mx-0 mb-4 md:mb-0 md:order-3 w-full max-w-[600px] h-[200px] lg:h-[400px] lg:p-4 border-solid border-[1px] border-gray-400 dark:border-0 rounded-md"
    style={{ backgroundColor, color: textColor }}
  >
    <p className="text-center font-semibold text-2xl">Preview Window</p>
    <p className="text-center font-semibold text-md">Text</p>
  </div>
);

const ColorContrast = () => {
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  return (
    <section
      id="color-contrast"
      className="mt-8 lg:mt-12 max-w-[1200px] mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-center items-center">
        <ColorPreview textColor={textColor} backgroundColor={backgroundColor} />
        <div className="flex flex-col lg:flex-row lg:space-x-8 md:items-end lg:items-start md:pr-2 lg:pr-8 w-full max-w-[600px]">
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
      </div>
    </section>
  );
};

export default ColorContrast;
