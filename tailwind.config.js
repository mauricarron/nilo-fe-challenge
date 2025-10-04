/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // This overrides are to perfectly match the colors in the design. Used https://tailwind-color-finder.vercel.app/ to find the closest match.
    extend: {
      colors: {
        green: {
          550: "#22C55D",
        },
        red: {
          550: "#DC2625",
        },
      },
      boxShadow: {
        button: "0px 4px 8px 0px #64748B40",
        "toggle-seen-on": "0px 4px 8px 0px #22C55D40",
        "toggle-seen-off": "0px 4px 8px 0px #3B82F640",
      },
    },
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      "stick-no-bills": ["var(--font-stick-no-bills)"],
    },
  },
  plugins: [],
};
