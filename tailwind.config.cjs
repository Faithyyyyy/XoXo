/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        eagle: ["Eagle Lake", "cursive"],
        gilroyBold: ["Gilroy-Bold", "sans-serif"],
        gilroyMedium: ["Gilroy-Medium", "sans-serif"],
        gilroyRegular: ["Gilroy-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
