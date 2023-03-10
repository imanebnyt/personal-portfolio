/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{html,js, ts, jsx, tsx}", "./components/**/*.{js, ts, jsx, tsx}",],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'montserrat',
      }
    },
  },
  plugins: [],
}