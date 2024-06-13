/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#202020",
        darkgray: {
          100: "#a5a5a5",
          200: "#959595",
        },
        whitesmoke: "#ececec",
        dimgray: "#696969",
        white: "#fff",
        gainsboro: {
          100: "#dedede",
          200: "rgba(222, 222, 222, 0.7)",
        },
        darkslategray: "rgba(50, 50, 50, 0.7)",
        silver: "#c4c4c4",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        abel: "Abel",
      },
    },
    fontSize: {
      base: "1rem",
      lg: "1.125rem",
      "7xl": "1.625rem",
      "2xl": "1.313rem",
      "17xl": "2.25rem",
      "10xl": "1.813rem",
      "3xl": "1.375rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
      "5xl": "1.5rem",
      xl: "1.25rem",
      "35xl": "3.375rem",
      "24xl": "2.688rem",
      "16xl-4": "2.213rem",
      lgi: "1.188rem",
      inherit: "inherit",
    },
    screens: {
      sm: "768px",
      // => @media (min-width: 768px) { ... }

      md: "992px",
      // => @media (min-width: 992px) { ... }
      maxlg: { max: "1280px"},
      maxmob: { max: "992px" },
      smmob: { max: "640px" },
      
      lg: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("tailwindcss-magic")],
};
