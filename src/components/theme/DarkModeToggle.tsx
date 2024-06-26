'use client'

import React from 'react'
import { useTheme } from 'next-themes'

import SunIcon from './SunIcon'
import MoonIcon from './MoonIcon'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      type='button'
      aria-label={theme === 'light' ? 'Toggle dark mode' : 'Toggle light mode'}
      className='ml-3 flex flex-col justify-center'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default DarkModeToggle
