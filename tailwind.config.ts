import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "512px",
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
} satisfies Config;

export default config;
