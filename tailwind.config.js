/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Webflow brand colors from https://brand-at.webflow.io/design-guidelines#typography
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // TODO: replace with Webflow font
      },
      colors: {
        // Webflow brand colors from https://brand-at.webflow.io/design-guidelines#color
        // Blues
        'blue-400': '#3B89FF',
        'blue': '#146EF5',
        'blue-600': '#0055D4',
        // Grays
        'gray-100': '#f0f0f0',
        'gray-200': '#D8D8D8',
        'gray-300': '#ABABAB',
        'gray-400': '#898989',
        'gray-500': '#757575',
        'gray-600': '#5A5A5A',
        'gray-700': '#363636',
        'gray-800': '#222222',
        'gray-900': '#171717',
        // Base colors
        'white': '#ffffff',
        'black': '#080808',
      },
    },
  },
  plugins: [],
}
