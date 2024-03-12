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
      'responsive-sm': 'clamp(14px, 1.5vw, 30px)',
      'responsive-md': 'clamp(0px, 1.5vw + 1rem, 40px)',  
      'responsive-xl': 'clamp(30px, 7vw + 1rem, 70px)'},
      fontFamily: {
        greatVibes: ['"Great Vibes"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}