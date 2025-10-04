/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // This overrides are to perfectly match the colors in the design. Used https://tailwind-color-finder.vercel.app/ to find the closest match.
    colors: {
      green: {
        500: "#22C55D",
      },
      red: {
        600: "#DC2625",
      },
    },
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      "stick-no-bills": ["var(--font-stick-no-bills)"],
    },
  },
  plugins: [],
};
