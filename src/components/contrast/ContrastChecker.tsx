import { calculateRGBsContrast } from "@/_lib/colors";
import {
  calculateWCAGCompliance,
  generateComplianceColor,
} from "@/_lib/compliance";

const ContrastChecker = ({ textColor, backgroundColor }: Colors) => {
  const contrast = calculateRGBsContrast(textColor, backgroundColor);
  const conformance = calculateWCAGCompliance(contrast);

  const minimumStyles = generateComplianceColor(
    conformance.AA.normal,
    conformance.AA.large,
  );
  const enhancedStyles = generateComplianceColor(
    conformance.AAA.normal,
    conformance.AAA.large,
  );
  const componentStyles = generateComplianceColor(
    conformance.AA.components,
    conformance.AA.components,
  );

  return (
    <div className="mx-2 lg:mx-0 lg:pr-8">
      <p className="mb-2 lg:mb-4 capitalize whitespace-nowrap text-md lg:text-lg font-semibold text-left">
        Contrast Ratio: {contrast}:1
      </p>

      <div className="mb-4">
        <div className="px-4 rounded-sm py-2" style={{ ...minimumStyles }}>
          <p className="capitalize text-sm md:text-base font-semibold text-left">
            1.4.3 Contrast (Minimum) - Level AA
          </p>
        </div>
        <div className="my-2 px-4 text-sm md:flex justify-between">
          <p>
            {conformance.AA.normal ? "Pass" : "Fail"} (Small Text 14pt/18.67px)
          </p>
          <p>{conformance.AA.large ? "Pass" : "Fail"} (Large Text 18pt/24px)</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="px-4 rounded-sm py-2" style={{ ...enhancedStyles }}>
          <p className="capitalize text-sm md:text-base font-semibold text-left">
            1.4.6 Contrast (Enhanced) - Level AAA
          </p>
        </div>
        <div className="my-2 px-4 text-sm md:flex justify-between">
          <p>
            {conformance.AAA.normal ? "Pass" : "Fail"} (Small Text 14pt/18.67px)
          </p>
          <p>
            {conformance.AAA.large ? "Pass" : "Fail"} (Large Text 18pt/24px)
          </p>
        </div>
      </div>

      <div>
        <div className="px-4 rounded-sm py-2" style={{ ...componentStyles }}>
          <p className="capitalize text-sm md:text-base font-semibold text-left">
            1.4.11 Non-text Contrast - Level AA
          </p>
        </div>
        <div className="my-2 px-4 text-sm">
          <p>
            {conformance.AA.components ? "Pass" : "Fail"} (UI Components and
            Graphical Objects)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContrastChecker;
