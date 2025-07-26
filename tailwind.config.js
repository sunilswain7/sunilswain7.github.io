/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        military: "#1b2a30",
        radarGreen: "#00ff7f",
        cockpitBlue: "#00e5ff",
        targetRed: "#ff3d3d",
      },
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        body: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
}
