interface ColorPickerProps {
  id: string;
  label: string;
  color: string;
  onChange: (color: string) => void;
}

const ColorPickerInput = ({ id, label, color, onChange }: ColorPickerProps) => {
  const textInputId = `${id}-hex-input`;
  const colorInputId = `${id}-picker-input`;

  return (
    <div className="flex flex-col">
      <div className="flex p-1 border-solid border-[1px] dark:border-0 w-full md:w-full lg:w-[250px] border-gray-400 dark:bg-gray-50 dark:bg-opacity-15 rounded-md">
        <label className="sr-only" htmlFor={textInputId}>
          {label} HEX
        </label>
        <input
          className="h-10 p-2 mr-2 border-1 w-[100%] border-gray-300 rounded-md"
          id={textInputId}
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
        />

        <label className="sr-only" htmlFor={colorInputId}>
          {label} picker
        </label>
        <input
          className="w-10 h-10 border-1 border-gray-300 rounded-md"
          id={colorInputId}
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

const ColorPicker = ({ id, label, color, onChange }: ColorPickerProps) => (
  <div className="mx-2 md:mx-2 lg:mx-0 mb-8">
    <h2 className="mb-2 lg:mb-4 block capitalize whitespace-nowrap text-md lg:text-lg font-semibold text-left">
      Set {label}
    </h2>
    <ColorPickerInput id={id} label={label} color={color} onChange={onChange} />
  </div>
);

export default ColorPicker;
