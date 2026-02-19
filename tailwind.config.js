const { transform } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-black":'var(--color-black)',
        'custom-yellow': '#C88D28',
        'custom-white': 'var(--color-white)',
        'custom-gray':'#9C9C9C',
        'custom-secondary': 'var(--color-secondary)'
      },
      fontFamily: {
        seasons_r:['Seasons_r'],
        satoshi_v:['Satoshi_v'],
        bebas_neue:['Bebas'],
        poppins: ['Poppins', 'sans-serif'],
        thomeo: ['Thomeo'],
        hoops_brother: ['HoopsBrother'],
        tactic_sans: ['TacticSans']

      },
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
        float: "float 2s ease-in-out infinite",
        'scroll-right': 'scroll-right 10s linear infinite',
        'scroll-left': 'scroll-left 10s linear infinite',
        'rotateRight': 'rotateRight 1s ease-in-out',
      },
      keyframes: {
        'infinite-scroll': {
          "100%": { transform: 'translateX(0)' },
          "0%": { transform: 'translateX(-91%)' },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-40px)" },
        },
        'scroll-right': {
          "0%": { transform: 'translateX(0)' },
          "100%": { transform: 'translateX(100%)' },
        },
        'scroll-left': {
          "0%": { transform: 'translateX(0)' },
          "100%": { transform: 'translateX(-100%)' },
        },
        'rotateRight': {
          '0%': { transform: 'translateY(-13rem) rotateZ(0deg)'},
          '50%': { transform: 'translateY(-13rem) rotateZ(90deg)'},
          '100%': { transform: 'translateY(-13rem) rotateZ(0deg)'}
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }    
    }
  },
  plugins: [],
}
