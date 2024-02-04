import { IoCopyOutline } from 'react-icons/io5'

import { ColorPickerProps } from '@/types/ColorPicker'

import ColorPickerInput from './ColorPickerInput'

const ColorPicker = ({ id, label, color, onChange }: ColorPickerProps) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(color)
  }

  return (
    <div className='relative mx-2 mb-2 lg:mx-0 lg:mb-8'>
      <div className='flex items-start justify-between'>
        <h2 className='text-md mb-2 text-left font-semibold capitalize lg:mb-4 lg:text-lg'>
          {label}
        </h2>
        <button
          type='button'
          className='mr-4 hover:cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 md:mr-3'
          onClick={handleCopyToClipboard}
        >
          <IoCopyOutline aria-hidden='true' focusable='false' size={24} />
          <span className='sr-only'>Copy</span>
        </button>
      </div>
      <ColorPickerInput
        id={id}
        label={label}
        color={color}
        onChange={onChange}
      />
      <span className='hidden peer-has-[input:invalid]:block absolute bottom-[-4] text-red-500 dark:text-red-200 text-sm lg:mt-2'>Please input correct HEX value</span>
    </div>
  )
}

export default ColorPicker
