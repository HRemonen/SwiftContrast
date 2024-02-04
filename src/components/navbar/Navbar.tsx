import Link from 'next/link'
import dynamic from 'next/dynamic'
import SkipLink from '../common/SkipLink'

const DarkModeToggle = dynamic(() => import('../theme/DarkModeToggle'), {
  ssr: false,
})

const Navbar = () => {
  // This is for further possible development
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const NAV_ITEMS: any[] = []

  return (
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

      <nav id='primary-nav' aria-label='Primary' className='hidden lg:block'>
        <ul className='flex'>
          {NAV_ITEMS.map((item) => (
            <li key={item.name} className='px-5 py-2'>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex items-center justify-center'>
        <DarkModeToggle />
      </div>
    </header>
  )
}

export default Navbar
