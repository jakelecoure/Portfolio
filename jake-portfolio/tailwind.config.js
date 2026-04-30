/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg:      '#0a0a0a',
          surface: '#0d0d0d',
          card:    '#111111',
          border:  '#1e1e1e',
          hover:   '#1a1a1a',
        },
        light: {
          bg:      '#ffffff',
          surface: '#f9f9f9',
          card:    '#f3f3f3',
          border:  '#e5e5e5',
          hover:   '#eeeeee',
        },
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'float':      'float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)'   },
          '50%':      { transform: 'translateY(-18px)' },
        },
      },
      boxShadow: {
        'card-dark':  '0 4px 24px rgba(0,0,0,0.5)',
        'card-light': '0 4px 24px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
