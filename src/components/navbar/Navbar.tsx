import dynamic from 'next/dynamic'
import SkipLink from '../common/SkipLink'

const DarkModeToggle = dynamic(() => import('../theme/DarkModeToggle'), {
  ssr: false,
})

const Navbar = () => (
  <header
    role='banner'
    className='mx-auto flex items-center justify-between px-4 py-4 md:px-8 md:py-8 lg:px-12 lg:py-8'
  >
    <SkipLink href='#main' />

    <div id='logo' className='flex justify-center gap-4 align-middle'>
      <p className='block whitespace-nowrap text-lg font-semibold transition focus:outline-none md:text-xl lg:text-3xl'>
        Swift Contrast
      </p>
    </div>

    <div className='flex items-center justify-center'>
      <DarkModeToggle />
    </div>
  </header>
)

export default Navbar
