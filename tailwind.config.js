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
            transform: 'translateX(40%)',
            opacity: 'O',
            },
          '100%' : {
            transform: 'translateX(0)',
            opacity: '1',
            }
        },
        smoothappear : {
          '0%' : {
            transform: 'scale(0.7)',
            opacity: 'O',
            },
          '25%' : {
            transform: 'scale(1.2)',
            },
          '50%' : {
            transform: 'scale(0.9)',
            },
          '75%' : {
            transform: 'scale(1.1)',
            },
          '100%' : {
            transform: 'scale(1)',
            opacity: '1',
            }
        }
      },
      animation: {
        leftappear : 'leftappear 130ms ease-in-out forwards',
        smoothappear: 'smoothappear 450ms ease-in-out forwards',
        smoothappear_1s: 'smoothappear .6s ease-in-out forwards',
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
