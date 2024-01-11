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
      <div className="flex p-1 border-solid border-[1px] dark:border-0 w-full md:w-[300px] lg:w-[250px] border-gray-400 dark:bg-gray-50 dark:bg-opacity-15 rounded-md">
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

interface Colors {
  textColor: string;
  backgroundColor: string;
}

const ColorPreview = ({ textColor, backgroundColor }: Colors) => (
  <div
    className="flex flex-col justify-center items-center mx-2 lg:mx-0 mb-4 md:mb-0 md:order-3 w-full max-w-[600px] h-[200px] lg:h-[400px] lg:p-4 border-solid border-[1px] border-gray-400 dark:border-0 rounded-md"
    style={{ backgroundColor, color: textColor }}
  >
    <p className="text-center font-semibold text-[18.5px]">
      Small text 14pt / 18.5px
    </p>
    <p className="text-center font-semibold text-[24px]">
      Large text 18pt / 24px
    </p>
  </div>
);

const hexToRgb = (hex: string) => {
  const hexValue = hex.replace("#", "");

  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);

  return { r, g, b };
};

const calculateLuminance = (rgb: { r: number; g: number; b: number }) => {
  const { r, g, b } = rgb;

  const rsrgb = r / 255;
  const gsrgb = g / 255;
  const bsrgb = b / 255;

  const rL =
    rsrgb <= 0.03928 ? rsrgb / 12.92 : ((rsrgb + 0.055) / 1.055) ** 2.4;
  const gL =
    gsrgb <= 0.03928 ? gsrgb / 12.92 : ((gsrgb + 0.055) / 1.055) ** 2.4;
  const bL =
    bsrgb <= 0.03928 ? bsrgb / 12.92 : ((bsrgb + 0.055) / 1.055) ** 2.4;

  const luminance = 0.2126 * rL + 0.7152 * gL + 0.0722 * bL;

  return luminance;
};

const calculateRGBsContrast = (text: string, background: string) => {
  const rgbText = hexToRgb(text);
  const rgbBackground = hexToRgb(background);

  const luminanceText = calculateLuminance(rgbText);
  const luminanceBackground = calculateLuminance(rgbBackground);

  const contrast =
    (Math.max(luminanceText, luminanceBackground) + 0.05) /
    (Math.min(luminanceText, luminanceBackground) + 0.05);

  return +contrast.toFixed(2);
};

const calculateWCAGConformance = (contrast: number) => {
  const thresholds = {
    AA: { normal: 4.5, large: 3.0, components: 3.0 },
    AAA: { normal: 7.0, large: 4.5 },
  };

  return {
    AA: {
      normal: contrast >= thresholds.AA.normal,
      large: contrast >= thresholds.AA.large,
      components: contrast >= thresholds.AA.components,
    },
    AAA: {
      normal: contrast >= thresholds.AAA.normal,
      large: contrast >= thresholds.AAA.large,
    },
  };
};

const generateComplianceColor = (
  AACompliant: boolean,
  AAACompliant: boolean,
) => {
  if (AACompliant && AAACompliant) {
    return "#81c784";
  }

  if (AACompliant) {
    return "#ffb74d";
  }

  return "#e57373";
};

const ContrastChecker = ({ textColor, backgroundColor }: Colors) => {
  const contrast = calculateRGBsContrast(textColor, backgroundColor);
  const conformance = calculateWCAGConformance(contrast);

  return (
    <div className="mx-2 lg:mx-0 md:pr-2 lg:pr-8">
      <p className="mb-2 lg:mb-4 capitalize whitespace-nowrap text-md lg:text-lg font-semibold text-left">
        Contrast Ratio: {contrast}:1
      </p>
      <div
        className="rounded-t-md px-2 py-1"
        style={{
          backgroundColor: generateComplianceColor(
            conformance.AA.normal,
            conformance.AAA.normal,
          ),
        }}
      >
        <p className="capitalize whitespace-nowrap text-md lg:text-lg font-semibold text-left">
          Small Text 14pt / 18.5px
        </p>
        <p>AA: {conformance.AA.normal ? "Pass" : "Fail"}</p>
        <p>AAA: {conformance.AAA.normal ? "Pass" : "Fail"}</p>
      </div>
      <div
        className="px-2 py-1"
        style={{
          backgroundColor: generateComplianceColor(
            conformance.AA.large,
            conformance.AAA.large,
          ),
        }}
      >
        <p className="capitalize whitespace-nowrap text-md lg:text-lg font-semibold text-left">
          Large Text 18pt / 24px
        </p>
        <p>AA: {conformance.AA.large ? "Pass" : "Fail"}</p>
        <p>AAA: {conformance.AAA.large ? "Pass" : "Fail"}</p>
      </div>
      <div
        className="rounded-b-md px-2 py-1"
        style={{
          backgroundColor: generateComplianceColor(
            conformance.AA.components,
            conformance.AA.components,
          ),
        }}
      >
        <p className="capitalize whitespace-nowrap text-md lg:text-lg font-semibold text-left">
          UI Components
        </p>
        <p>AA: {conformance.AA.components ? "Pass" : "Fail"}</p>
      </div>
    </div>
  );
};

const ColorContrast = () => {
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  return (
    <section
      id="color-contrast"
      className="mt-8 lg:mt-12 max-w-[1200px] mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-center items-center lg:justify-normal lg:items-start">
        <ColorPreview textColor={textColor} backgroundColor={backgroundColor} />

        <div className="w-full max-w-[600px]">
          <div className="flex flex-col lg:flex-row lg:space-x-8 md:items-end lg:items-start md:pr-2 lg:pr-8 ">
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
