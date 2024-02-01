import { IoAccessibility, IoAccessibilityOutline } from 'react-icons/io5'

import { Colors } from '@/types/Colors'

const ColorPreview = ({ textColor, backgroundColor }: Colors) => (
  <div
    className='mb-4 flex h-full min-h-[200px] w-full max-w-[600px] flex-col items-center justify-center rounded-md border-[1px] border-solid border-gray-400 dark:border-0 md:order-3 md:mb-0 md:p-4 lg:mx-0'
    style={{ backgroundColor, color: textColor }}
  >
    <p className='text-center text-[24px] font-normal'>
      Large text 18pt / 24px
    </p>
    <p className='mt-2 text-center text-[18.5px] font-normal lg:mt-4'>
      Small text 14pt / 18.67px
    </p>

    <div
      aria-hidden='true'
      className='mt-4 flex flex-row items-center justify-center gap-x-4'
    >
      <IoAccessibility size={24} />
      <IoAccessibilityOutline size={24} />
      <button
        type='button'
        tabIndex={-1}
        style={{ border: 'solid', borderWidth: '1px' }}
        className='cursor-default rounded bg-transparent px-2 py-1'
      >
        Button
      </button>
    </div>
  </div>
)

export default ColorPreview
