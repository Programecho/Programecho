/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'programecho': ['Programecho', 'sans-serif'],
      },
      colors: {
        'programecho': '#161825',
      },
    },
  },
  plugins: [],
}

