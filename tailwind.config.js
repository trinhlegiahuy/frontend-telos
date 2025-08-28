/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8C30F5",
      },
      fontSize: {
        H1: ["72px", "98px"],
        H2: ["48px", "64px"],
        Lead1: ["18px", "32px"],
      },
      spacing: {
        18: "72px"
      }
    },
  },
  plugins: [],
}