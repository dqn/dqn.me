/** @satisfies {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "512px",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
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
        shake: {
          "10%,30%": {
            transform: "rotate(8deg) scale(1.1)",
          },
          "20%,40%": {
            transform: "rotate(-8deg) scale(1.1)",
          },
          "50%,90%": {
            transform: "rotate(0deg) scale(1.1)",
          },
        },
        typing: {
          "0%": {
            width: 0,
          },
          "100%": {
            width: "17ch",
            "border-right": "2px solid transparent",
          },
        },
        caret: {
          "50%": {
            "border-right": "2px solid white",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out forwards",
        "fade-in-and-drop": "fade-in-and-drop 0.4s ease-out forwards",
        "fade-in-and-drop-100": "fade-in-and-drop 0.4s ease-out 100ms forwards",
        "fade-in-and-drop-200": "fade-in-and-drop 0.4s ease-out 200ms forwards",
        shake: "shake 1s ease-in-out forwards",
        typing:
          "0.8s typing 0.3s steps(17) forwards, caret 1s steps(1) infinite",
      },
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      brand: {
        DEFAULT: "#665886",
        light: "#be9efc",
      },
    },
  },
  plugins: [],
};
