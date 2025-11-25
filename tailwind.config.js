/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mayaa-orange': '#E99D50',
        'mayaa-orange-dark': '#E99D50',
        'mayaa-blue': '#1E3A5F',
        'mayaa-light-blue': '#E8F4F8',
        'mayaa-beige': '#F5F5DC',
        'mayaa-green': '#E8F5E9',
        'mayaa-pink': '#C2185B',
        'mayaa-green-light': '#A5D6A7',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

