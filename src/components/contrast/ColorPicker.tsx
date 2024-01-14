import { IoCopyOutline } from "react-icons/io5";

const ColorPickerInput = ({ id, label, color, onChange }: ColorPickerProps) => {
  const textInputId = `${id}-hex-input`;
  const colorInputId = `${id}-picker-input`;

  const handlePasteFromClipboard = async () => {
    const clipboardText = await navigator.clipboard.readText();
    onChange(clipboardText);
  };

  return (
    <div className="flex flex-col">
      <div className="flex p-1 w-full md:w-full lg:w-[250px] border-[1px] dark:border-0 border-gray-400 dark:bg-gray-50 dark:bg-opacity-15 rounded-md">
        <label className="sr-only" htmlFor={textInputId}>
          {label} HEX
        </label>
        <input
          className="appearance-none h-10 p-2 mr-2 w-[100%] hover:border-2 border-gray-300 hover:border-blue-600 dark:hover:border-blue-300 rounded-md"
          style={{ backgroundColor: "transparent" }}
          id={textInputId}
          placeholder="#000000"
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          onDoubleClick={handlePasteFromClipboard}
        />

        <label className="sr-only" htmlFor={colorInputId}>
          {label} picker
        </label>
        <input
          className="min-w-10 min-h-10 hover:border-2 hover:border-blue-600 dark:hover:border-blue-300 rounded-md"
          style={{ backgroundColor: "transparent", cursor: "pointer" }}
          id={colorInputId}
          placeholder="#ffffff"
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

const ColorPicker = ({ id, label, color, onChange }: ColorPickerProps) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div className="mx-2 lg:mx-0 mb-2 lg:mb-8">
      <div className="flex justify-between items-start">
        <h2 className="mb-2 lg:mb-4 block capitalize text-md lg:text-lg font-semibold text-left">
          {label}
        </h2>
        <button
          className="mr-4 md:mr-3 hover:cursor-pointer hover:text-blue-600 dark:hover:text-blue-300"
          onClick={handleCopyToClipboard}
        >
          <IoCopyOutline size={24} />
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
