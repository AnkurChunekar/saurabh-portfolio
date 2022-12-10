/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      secondary: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      lineHeight: {
        16: "64px",
      },
      colors: {
        dark: "#0E0F13",
        font: "#ECEBF0",
        darkGray: "#26262B",
        cta: "#FF2E00",
        cardTag: "rgba(247, 246, 251, 0.5)",
      },
      aspectRatio: {
        "2/3": "2 / 3",
        "9/16": "9/16",
      },
    },
  },
  plugins: [],
};
