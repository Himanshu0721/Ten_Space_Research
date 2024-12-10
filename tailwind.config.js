import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',           // For HTML files
    './src/**/*.{js,jsx,ts,tsx}',  // For JS/JSX/TS/TSX files
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  plugins: [
    require('flowbite/plugin')
]

};
