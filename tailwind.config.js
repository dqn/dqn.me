/** @satisfies {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "512px",
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
