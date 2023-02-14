/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#2e266f",
        "main-blue-light": "#3a327d",
        "main-red": "#fe043c",
        "main-gray": "#707070",
        "main-green": "#31a24c",
        "light-white": "#fff5ec",
        cream: "#ffedde",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
