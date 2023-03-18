const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-bg': '#FAFAFA',
        'yellow': '#F5AA41',
        'deep-purple': '#411A4B',
        'light-purple': '#C0ACC6',
        'purple-bg': '#1D0E22',
        'blue': '#355F8F',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
