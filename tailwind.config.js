/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      fontSize: {
        // Preset name can be anything descriptive
        preset1: [
          "48px",
          {
            lineHeight: "71px",
            letterSpacing: "-1px",
          },
        ],
      },

      colors: {
        primary: {
          white: "#FFF",
          black: "#000",
        },
        grey: {
          50: "#F3F9FA",
          200: "#C5E4E7",
          300: "#9EBBBD",
          400: "#7F9D9F",
          500: "#5E7A7D",
          550: "#547878",
          600: "#3D6666",
        },
        green: {
          200: "#9FE8DF",
          400: "#26C2AE",
          750: "#0D686D",
          800: "#085C61",
          900: "#00474B",
        },
        orange: {
          400: "#E17052",
        },
      },
    },
  },
  plugins: [],
};
