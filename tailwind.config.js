import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  daisyui: {
        themes: ["light"], // Only include the light theme
      },
}





// import daisyui from 'daisyui';
// import flowbite from 'flowbite/plugin';

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './index.html',           // For HTML files
//     './src/**/*.{js,jsx,ts,tsx}',  // For JS/JSX/TS/TSX files
//     './node_modules/flowbite/**/*.js',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [daisyui, flowbite],
//   daisyui: {
//     themes: ["light"], // Only include the light theme
//   },
// };
