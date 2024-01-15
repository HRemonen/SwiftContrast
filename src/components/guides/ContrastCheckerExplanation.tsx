import { generateComplianceColor } from "@/_lib/compliance";

const ContrastCheckerExplanation = () => {
  const successStyles = generateComplianceColor(true, true);
  const warningStyles = generateComplianceColor(true, false);
  const failureStyles = generateComplianceColor(false, false);

  return (
    <>
      <p>
        Input the text and background colors you want to compare in hexadecimal
        format (e.g. #000000 for black) or use the color picker to select
        desired colors.
      </p>

      <p className="mt-8">
        The contrast ratio is calculated using the relative luminance of the
        text and background colors. The contrast ratio is a number between 1 and
        21, with 1 being the lowest contrast and 21 being the highest contrast.
      </p>

      <p className="mt-8">
        The contrast ratio is used to determine if the text and background
        colors meet the WCAG 2.2 contrast ratio requirements for accessibility.
      </p>

      <p className="mt-8">
        Meeting the requirements for a conformance level means that the
        conformance level is displayed on a{" "}
        <span className="px-1" style={{ ...successStyles }}>
          green
        </span>{" "}
        background.
      </p>
      <p className="mt-8">
        Meeting only partial requirements for a conformance level means that the
        conformance level is displayed on a{" "}
        <span className="px-1" style={{ ...warningStyles }}>
          yellow
        </span>{" "}
        background.
      </p>
      <p className="mt-8">
        Not meeting the requirements for a conformance level means that the
        conformance level is displayed on a{" "}
        <span className="px-1" style={{ ...failureStyles }}>
          red
        </span>{" "}
        background.
      </p>

      <p className="mt-8">
        The contrast ratio is calculated using the{" "}
        <a
          className="underline text-blue-500"
          href="https://www.w3.org/WAI/GL/wiki/Relative_luminance#:~:text=Note%201%3A%20For%20the%20sRGB,%2B0.055)%2F1.055)%20%5E%202.4"
        >
          formula provided by the W3C
        </a>
        .
      </p>
    </>
  );
};

export default ContrastCheckerExplanation;
