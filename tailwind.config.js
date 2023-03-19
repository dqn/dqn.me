/** @satisfies {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "512px",
      },
      keyframes: {
        "fade-in-and-drop": {
          "0%": {
            opacity: "0",
            transform: "translateY(-16px)",
          },
          "50%": {
            opacity: "1",
            transform: "translateY(6px)",
          },
          "80%": {
            opacity: "1",
            transform: "translateY(-4px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-and-drop": "fade-in-and-drop 0.4s ease-out forwards",
        "fade-in-and-drop-100": "fade-in-and-drop 0.4s ease-out 100ms forwards",
        "fade-in-and-drop-200": "fade-in-and-drop 0.4s ease-out 200ms forwards",
      },
    },
    colors: {
      brand: {
        DEFAULT: "#665886",
        light: "#be9efc",
      },
    },
  },
  plugins: [],
};
