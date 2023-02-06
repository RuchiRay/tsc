/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        red: {
          950: "#E33A2B",
        },
      },
      fontFamily: {
        american: ["American Typewriter", "sans-serif"],
        montserrat: ["Montserrat","sans-serif"],
      },
    },
  },
  plugins: [],
};
