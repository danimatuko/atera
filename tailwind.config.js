/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        atera: "#FF176B",
        gold: "#D1AD78",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
