/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '360': '360deg',
      },
      fontFamily:{
        CustomFont1: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
