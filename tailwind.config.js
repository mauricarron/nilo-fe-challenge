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
        orange: {
          550: "#F08030",
        },
        "brand-blue": "#275FBB",
        "brand-purple": "#932482",
      },
      boxShadow: {
        button: "0px 4px 8px 0px #64748B40",
        "toggle-seen-on": "0px 4px 8px 0px #22C55D40",
        "toggle-seen-off": "0px 4px 8px 0px #3B82F640",
        "pokemon-card": "0px 4px 4px 0px #0F172A0D",
      },
    },
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      "stick-no-bills": ["var(--font-stick-no-bills)"],
    },
  },
  plugins: [],
};
