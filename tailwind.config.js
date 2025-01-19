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
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out forwards",
        fadeInDelayed: "fadeIn 1.5s ease-in-out forwards 0.5s",
        fadeInDelayed2: "fadeIn 1.5s ease-in-out forwards 1s",
        fadeInDelayed3: "fadeIn 1.5s ease-in-out forwards 1.5s",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      backgroundImage: {
        "radial-black": "radial-gradient(circle, black, transparent)",
      },
    },
  },
  plugins: [],
};
