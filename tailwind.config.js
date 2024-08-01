const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        dancing: [
          "Dancing Script",
          "cursive",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
