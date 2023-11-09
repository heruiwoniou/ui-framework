/** @type {import('tailwindcss').Config} */
import theming from 'theming'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    theming({
      themes: [
        {
          light: {
            'color-scheme': 'light',
            primary: '#570df8',
            secondary: '#f000b8',
            accent: '#1ECEBC',
            neutral: '#2B3440',
            'base-100': '#ffffff',
            'base-200': '#F9F9F9',
            'base-300': '#E5E6E6',
            error: '#ed273e',
            success: '#63d489',
          },
          dark: {
            'color-scheme': 'dark',
            primary: '#187cd9',
            secondary: '#f1b27e',
            neutral: '#2a323c',
            'base-100': '#1e1e1e',
            'base-200': '#383838',
            'base-300': '#444444',
            error: '#ed273e',
            success: '#63d489',
          },
        },
      ],
    }),
  ],
}
