"use client";

import React, { useState } from "react";

import ColorPicker from "./ColorPicker";
import ColorPreview from "./ColorPreview";

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
    return { backgroundColor: "#bdffc0", color: "#005704" };
  }

  if (AACompliant) {
    return { backgroundColor: "#fddeaf", color: "#6b3600" };
  }

  return { backgroundColor: "#ffb3b3", color: "#6b0000" };
};

const ContrastChecker = ({ textColor, backgroundColor }: Colors) => {
  const contrast = calculateRGBsContrast(textColor, backgroundColor);
  const conformance = calculateWCAGConformance(contrast);

  const smallTextStyles = generateComplianceColor(
    conformance.AA.normal,
    conformance.AAA.normal,
  );
  const largeTextStyles = generateComplianceColor(
    conformance.AA.large,
    conformance.AAA.large,
  );
  const componentsStyles = generateComplianceColor(
    conformance.AA.components,
    conformance.AA.components,
  );

  return (
    <div className="mx-2 lg:mx-0 lg:pr-8">
      <p className="mb-2 lg:mb-4 capitalize whitespace-nowrap text-md lg:text-lg font-semibold text-left">
        Contrast Ratio: {contrast}:1
      </p>
      <div
        className="rounded-t-md px-4 pt-4 pb-2"
        style={{ ...smallTextStyles }}
      >
        <p className="capitalize whitespace-nowrap text-md lg:text-lg font-semibold text-left">
          Small Text 14pt / 18.5px
        </p>
        <p>AA: {conformance.AA.normal ? "Pass" : "Fail"}</p>
        <p>AAA: {conformance.AAA.normal ? "Pass" : "Fail"}</p>
      </div>
      <div className="px-4 py-2" style={{ ...largeTextStyles }}>
        <p className="capitalize whitespace-nowrap text-md lg:text-lg font-semibold text-left">
          Large Text 18pt / 24px
        </p>
        <p>AA: {conformance.AA.large ? "Pass" : "Fail"}</p>
        <p>AAA: {conformance.AAA.large ? "Pass" : "Fail"}</p>
      </div>
      <div
        className="rounded-b-md px-4 pt-2 pb-4"
        style={{ ...componentsStyles }}
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
