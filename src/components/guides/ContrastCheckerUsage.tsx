import { IoSwapHorizontal } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";

const ContrastCheckerUsage = () => {
  return (
    <>
      <p>
        <span className="mr-2">🎨</span>
        Either input the text and background colors you want to compare in
        hexadecimal format (e.g. #000000 for black) or use the color picker to
        select desired colors.
      </p>

      <p className="flex flex-wrap mt-8 items-center">
        <span className="mr-2">🔄</span>
        Use the{" "}
        <IoSwapHorizontal aria-hidden="true" className="mx-1" size={20} />{" "}
        <span className="sr-only">Swap color values</span> button to swap the
        text and background colors.
      </p>

      <p className="flex flex-wrap mt-8 items-center">
        <span className="mr-2">📋</span>
        Use the <IoCopyOutline
          aria-hidden="true"
          className="mx-1"
          size={20}
        />{" "}
        <span className="sr-only">Copy</span> button to copy the input value to
        clipboard.
      </p>
    </>
  );
};

export default ContrastCheckerUsage;
