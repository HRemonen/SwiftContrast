import { IoSwapHorizontal } from "react-icons/io5";

interface SwapButtonProps {
  handleSwapColors: () => void;
}

const SwapButton = ({ handleSwapColors }: SwapButtonProps) => (
  <div className="flex flex-col justify-center items-center">
    <button
      type="button"
      className="flex items-center justify-center md:mt-6 lg:mt-3 w-10 h-10 rounded-md border-solid border-[1px] dark:border-0 border-gray-400 hover:border-2 dark:hover:border-2 hover:border-blue-600 dark:hover:border-blue-300 dark:bg-gray-50 dark:bg-opacity-15"
      onClick={handleSwapColors}
    >
      <IoSwapHorizontal aria-hidden="true" focusable="false" size={24} />
      <span className="sr-only">Swap color values</span>
    </button>
  </div>
);

export default SwapButton;
