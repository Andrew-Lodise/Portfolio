const defaultTheme = require('tailwindcss/defaultTheme');

/**<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"> */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
      'head': 'calc(4vh + 16px)',
      'form-input': 'calc(2vh + 5px)',
      'button': 'calc(2vh + 5px)',
      'skill-nav': 'calc(2.3vh + 5px)',
      'skill-sm': 'calc(2vh + 2px)',
      'skill-icon': 'calc(7vh + 10px)',
      'responsive-sm': 'clamp(14px, 1.5vw, 30px)',
      'responsive-md': 'clamp(0px, 1.5vw + 1rem, 30px)',  
      'responsive-xl': 'clamp(30px, 7vw + 1rem, 70px)'},
      fontFamily: {
        greatVibes: ['"Great Vibes"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}