/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './src/index.html',
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#FF0000',
      }
    },
  },
  plugins: [],
}

