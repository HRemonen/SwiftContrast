import { IoCopyOutline } from "react-icons/io5";

import { ColorPickerProps } from "@/types/ColorPicker";

import ColorPickerInput from "./ColorPickerInput";

const ColorPicker = ({ id, label, color, onChange }: ColorPickerProps) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div className="mx-2 lg:mx-0 mb-2 lg:mb-8">
      <div className="flex justify-between items-start">
        <h2 className="mb-2 lg:mb-4 capitalize text-md lg:text-lg font-semibold text-left">
          {label}
        </h2>
        <button
          type="button"
          className="mr-4 md:mr-3 hover:cursor-pointer hover:text-blue-600 dark:hover:text-blue-300"
          onClick={handleCopyToClipboard}
        >
          <IoCopyOutline aria-hidden="true" focusable="false" size={24} />
          <span className="sr-only">Copy</span>
        </button>
      </div>
      <ColorPickerInput
        id={id}
        label={label}
        color={color}
        onChange={onChange}
      />
    </div>
  );
};

export default ColorPicker;
