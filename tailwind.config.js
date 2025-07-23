/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        combatBg: "#0B0F14",  // deep combat room black
        hudGreen: "#00FF9F",
        radarBlue: "#00CFFF",
        panelGray: "#1E252D",
      },
      fontFamily: {
        techno: ["'Share Tech Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
