/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark: "#0E0F13",
      font: "#ECEBF0",
      cta: "#FF2E00",
    },
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      secondary: ["Space Grotesk", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
