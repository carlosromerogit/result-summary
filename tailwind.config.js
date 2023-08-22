const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        hanken: "'Hanken Grotesk', sans-serif",
      },
      colors: {
        "slate-blue": "#7857ff",
        "royal-blue": "#2e2be9",
        "violet-blue": "#4e21ca",
        "persian-blue": "#2421ca00",
        "light-red": {
          100: "#ffeeee",
          500: "#ff5757",
        },
        orangey: {
          100: "#fff7e9",
          500: "#ffb01f",
        },
        "green-teal": {
          100: "#e6f8f4",
          500: "#00bd91",
        },
        "cobalt-blue": {
          100: "#e7e9fb",
          500: "#1125d4",
        },
        "dark-gray": "#303b5a",
      },
      screens: {
        xs: "464px",
      },
    },
    plugins: [],
  },
};
