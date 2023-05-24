/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      darkBlue: "#1a1b26",
      mediumBlue: "#9aa5ce",
      lightBlue: "#414868",
      darkCyan: "#2ac3de",
      lightCyan: "#73daca",
      white: "#c0caf5",
      purple: "#bb9af7",
      red: "#f7768e",
      green: "#9ece6a",
    },
    extend: {
      fontFamily: {
        primary: ["Fira Code"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
