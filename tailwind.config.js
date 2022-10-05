/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./content/**/*.md",
    "./layouts/**/*.html",
    "./src/**/*.js",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    // screens: {
    // },
    extend: {
      keyframes: {
        pulse: {
          '0%': {backgroundColor: 'rgba(243, 243, 191, 0.8)'},
          '25%': {backgroundColor: 'rgba(243, 243, 191, 0.9)'},
          '50%': {backgroundColor: 'rgba(243, 243, 191, 0.9)'},
          '75%': {backgroundColor: 'rgba(243, 243, 191, 0.8)'},
          '100%': {backgroundColor: 'rgba(243, 243, 191, 0.8)'},
        },
        shine :{
          '0%' : { transform: 'skewX(-25deg), translateX(0)'},
          '100%' : { transform: 'skewX(-25deg), translateX(250%)' }
        }
      }
    },
    animation: {
      baller: 'pulse 2.5s ease-in-out infinite'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
