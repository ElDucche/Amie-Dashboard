/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      keyframes: {
        leftappear : {
          '0%' : {
            transform: 'translateX(-10%)',
            opacity: 'O',
            },
          '100%' : {
            transform: 'translateX(0)',
            opacity: '1',
            }
        }
      },
      animation: {
        leftappear : 'leftappear 75ms ease-in-out forwards',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mgen: {
          "primary": "#6AA517",
          "secondary": "#e4ebda",
          "accent": "#11596F",                
          "neutral": "#3C3C3C",
          "base-100": "#FFF",
          "info": "#8CCAC1",
          "success": "#9CB686",
          "warning": "#EE9C3C",
          "error": "#D33D61",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('tailwind-layouts'),
  ],
}
