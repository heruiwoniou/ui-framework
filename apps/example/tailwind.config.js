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
            'primary-content': 'white',
            secondary: '#f000b8',
            'secondary-content': '#FFD1F4',
            accent: '#1ECEBC',
            'accent-content': '#07312D',
            neutral: '#2B3440',
            'neutral-content': '#D7DDE4',
            'base-100': '#ffffff',
            'base-200': '#F2F2F2',
            'base-300': '#E5E6E6',
            'base-content': '#222b38',
          },
          dark: {
            'color-scheme': 'dark',
            primary: '#187cd9',
            secondary: '#f1b27e',
            neutral: '#2a323c',
            success: '#63d489',
            'neutral-focus': '#242b33',
            'neutral-content': '#A6ADBB',
            'base-100': '#1e1e1e',
            'base-200': '#383838',
            'base-300': '#444444',
            'base-content': '#c3cad8',
          },
        },
      ],
    }),
  ],
}
