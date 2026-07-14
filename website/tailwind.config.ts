import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aica: {
          25: "#fafcf9",
          50: "#f2f8f2",
          100: "#dcecdf",
          200: "#bddbc5",
          300: "#91c19f",
          400: "#62a477",
          500: "#3f8b5c",
          600: "#2f714a",
          700: "#245b3d",
          800: "#1d4932",
          900: "#183c2b",
          950: "#0d2118",
        },
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(15, 23, 42, 0.06)",
        soft: "0 16px 40px rgba(15, 23, 42, 0.08)",
        premium: "0 24px 70px rgba(15, 23, 42, 0.10)",
      },
      borderRadius: {
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
      maxWidth: {
        "content-narrow": "56rem",
        "content-wide": "88rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
