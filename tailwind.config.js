const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
        headings: ["Cormorant Garamond", "sans-serif"],
      },
      dropShadow: {
        "3xl": ["0 0 1px rgba(0,0,0,.2)", "0 0 7px rgba(0,0,0,.5)", "0 0 20px black"],
      },
      colors: {
        primary: "rgb(255 213 133)",
      },
    },
  },
  plugins: [],
};
