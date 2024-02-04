import { ColorPickerProps } from "@/types/ColorPicker"

const ColorPickerInput = ({ id, label, color, onChange }: ColorPickerProps) => {
  const textInputId = `${id}-hex-input`
  const colorInputId = `${id}-picker-input`

  return (
    <div className='flex flex-col'>
      <div className='flex w-full rounded-md border-[1px] border-gray-400 p-1 dark:border-0 dark:bg-gray-50 dark:bg-opacity-15 md:w-full'>
        <label className='sr-only' htmlFor={textInputId}>
          {label} HEX
        </label>
        <input
          className='mr-2 h-10 w-[100%] appearance-none rounded-md border-gray-300 p-2 hover:border-2 hover:border-blue-600 dark:hover:border-blue-300'
          style={{ backgroundColor: 'transparent' }}
          id={textInputId}
          placeholder='#000000'
          type='text'
          value={color}
          onChange={(e) => onChange(e.target.value)}
        />

        <label className='sr-only' htmlFor={colorInputId}>
          {label} picker
        </label>
        <input
          className='min-h-10 min-w-10 rounded-md hover:border-2 hover:border-blue-600 dark:hover:border-blue-300'
          style={{ backgroundColor: 'transparent', cursor: 'pointer' }}
          id={colorInputId}
          placeholder='#ffffff'
          type='color'
          value={color}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default ColorPickerInput
