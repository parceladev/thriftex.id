/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F4F4F4",
        secondary: "#282828",
        textWhite: "#FFFFFF",
        textBlack: "#000000",
      },
      fontFamily: {
        sans: ["Encode Sans Semi Condensed", "sans-serif"], 
        didot: ["Linotype Didot", "serif"], 
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
