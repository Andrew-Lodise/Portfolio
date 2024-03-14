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
      'project-tech': 'calc(2.2vh +  2px)',
      'project-sm': 'calc(1.7vh + 1px)',
      'project-lg': 'calc(2.3vh + 5px)',
      'project-tech': 'calc(1.8vh + 3px)',
      'project-button': 'calc(1.8vh + 3px)',
      'skill-nav': 'calc(2.2vh + 5px)',
      'skill-sm': 'calc(2rem + 0px)',
      'skill-icon': 'calc(7vh + 10px)',
      'responsive-sm': 'clamp(14px, 1.5vw, 30px)',
      'responsive-md': 'clamp(0px, 1.5vw + 1rem, 30px)',  
      'responsive-xl': 'clamp(30px, 7vw + 1rem, 70px)'},
      fontFamily: {
        greatVibes: ['"Great Vibes"', ...defaultTheme.fontFamily.sans]
      },
      height: {
        "picture": "calc(30vw + 20px)",
        "project-pic": "calc(16vh + 8vw + 10px)"
      },
      width: {
        "picture": "calc(30vw + 20px)"
      }
    },
  },
  plugins: [],
}