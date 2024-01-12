import { calculateRGBsContrast } from "@/_lib/colors";
import {
  calculateWCAGCompliance,
  generateComplianceColor,
} from "@/_lib/compliance";

const ContrastChecker = ({ textColor, backgroundColor }: Colors) => {
  const contrast = calculateRGBsContrast(textColor, backgroundColor);
  const conformance = calculateWCAGCompliance(contrast);

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
    <div className="mx-2 lg:mx-0 lg:pr-8 divide-y-2 divide-solid">
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

export default ContrastChecker;
