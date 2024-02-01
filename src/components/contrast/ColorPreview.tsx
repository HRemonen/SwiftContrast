import { IoAccessibility, IoAccessibilityOutline} from "react-icons/io5";

import { Colors } from "@/types/Colors";

const ColorPreview = ({ textColor, backgroundColor }: Colors) => (
  <div
    className="flex flex-col justify-center items-center lg:mx-0 md:p-4 mb-4 md:mb-0 md:order-3 w-full h-full min-h-[200px] max-w-[600px] border-solid border-[1px] border-gray-400 dark:border-0 rounded-md"
    style={{ backgroundColor, color: textColor }}
  >
    <p className="text-center font-normal text-[24px]">
      Large text 18pt / 24px
    </p>
    <p className="text-center font-normal text-[18.5px] mt-2 lg:mt-4">
      Small text 14pt / 18.67px
    </p>

    <div
      aria-hidden="true"
      className="flex flex-row gap-x-4 mt-4 justify-center items-center"
    >
      <IoAccessibility size={24} />
      <IoAccessibilityOutline size={24} />
      <button
        type="button"
        tabIndex={-1}
        style={{ border: "solid", borderWidth: "1px" }}
        className="bg-transparent py-1 px-2 rounded cursor-default"
      >
        Button
      </button>
    </div>
  </div>
);

export default ColorPreview;
