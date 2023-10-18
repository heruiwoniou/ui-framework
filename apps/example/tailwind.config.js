/** @type {import('tailwindcss').Config} */
import theming from 'theming'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [theming({ dark: 'dark' })],
}
