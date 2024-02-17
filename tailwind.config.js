const defaultTheme = require('tailwindcss/defaultTheme');

/**<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"> */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: ['"Great Vibes"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}