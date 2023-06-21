/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pink: "#FF176B",
        gold: "#D1AD78",
      },
    },
  },
  plugins: [],
};
