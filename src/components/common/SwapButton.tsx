import { IoSwapHorizontal } from 'react-icons/io5'

interface SwapButtonProps {
  handleSwapColors: () => void
}

const SwapButton = ({ handleSwapColors }: SwapButtonProps) => (
  <div className='flex flex-col items-center justify-center'>
    <button
      type='button'
      className='my-2 flex items-center justify-center space-x-2 rounded-md border-[1px] border-solid border-gray-400 p-2 hover:border-2 hover:border-blue-600 dark:border-0 dark:bg-gray-50 dark:bg-opacity-15 dark:hover:border-2 dark:hover:border-blue-300 md:my-4 lg:mt-7 lg:size-10'
      onClick={handleSwapColors}
    >
      <IoSwapHorizontal aria-hidden='true' focusable='false' size={24} />
      <span className='lg:sr-only'>Swap color values</span>
    </button>
  </div>
)

export default SwapButton
