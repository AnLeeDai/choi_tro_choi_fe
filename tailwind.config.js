import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Padding mặc định cho tất cả kích thước màn hình
          sm: "1.5rem", // Padding cho màn hình nhỏ (640px)
          md: "2rem", // Padding cho màn hình trung bình (768px)
          lg: "3rem", // Padding cho màn hình lớn (1024px)
          xl: "4rem", // Padding cho màn hình cực lớn (1440px)
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1440px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
