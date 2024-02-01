/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-xslow': 'spin 30s linear infinite',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
