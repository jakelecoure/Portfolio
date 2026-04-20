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
        reactor: {
          DEFAULT: '#00c8ff',
          dim:     '#0096cc',
          glow:    '#00e5ff',
          faint:   'rgba(0,200,255,0.08)',
        },
        dark: {
          bg:      '#06060f',
          surface: '#0b0b17',
          card:    '#0f0f1c',
          border:  '#181828',
          hover:   '#1a1a2e',
        },
        light: {
          bg:      '#f4f6fb',
          surface: '#ffffff',
          card:    '#f9fafb',
          border:  '#e2e8f0',
          hover:   '#edf2f7',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up':     'fadeUp 0.7s ease forwards',
        'fade-in':     'fadeIn 0.6s ease forwards',
        'glow-pulse':  'glowPulse 3s ease-in-out infinite',
        'float':       'float 8s ease-in-out infinite',
        'line-grow':   'lineGrow 1s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
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
        glowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)'   },
          '50%':      { transform: 'translateY(-18px)' },
        },
        lineGrow: {
          '0%':   { width: '0%'    },
          '100%': { width: '100%'  },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)'     },
        },
      },
      boxShadow: {
        'reactor':     '0 0 30px rgba(0,200,255,0.25)',
        'reactor-lg':  '0 0 60px rgba(0,200,255,0.35)',
        'card-dark':   '0 4px 24px rgba(0,0,0,0.5)',
        'card-light':  '0 4px 24px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
