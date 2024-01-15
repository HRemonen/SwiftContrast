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

      <p className="mt-8">
        <span className="mr-2">🚀</span>
        Double-click the hex input field to paste the color value from your
        clipboard for swift interaction.
      </p>

      <p className="flex mt-8 items-center">
        <span className="mr-2">🔄</span>
        Use the <IoSwapHorizontal className="mx-1" size={20} /> button to swap
        the text and background colors.
      </p>

      <p className="flex mt-8 items-center">
        <span className="mr-2">📋</span>
        You can copy the color value to your clipboard by clicking the
        <IoCopyOutline className="mx-1" size={20} />
        button next to the input label.
      </p>
    </>
  );
};

export default ContrastCheckerUsage;
