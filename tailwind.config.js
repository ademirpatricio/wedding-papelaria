/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f8d386",
      },
      fontFamily: {
        sans: ["Source Sans 3", "sans-serif"],
        serif: ["Source Serif 4", "serif"],
      },
    },
  },
  plugins: [],
};