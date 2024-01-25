const ColorPickerInput = ({ id, label, color, onChange }: ColorPickerProps) => {
  const textInputId = `${id}-hex-input`;
  const colorInputId = `${id}-picker-input`;

  return (
    <div className="flex flex-col">
      <div className="flex p-1 w-full md:w-full border-[1px] dark:border-0 border-gray-400 dark:bg-gray-50 dark:bg-opacity-15 rounded-md">
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

export default ColorPickerInput;
