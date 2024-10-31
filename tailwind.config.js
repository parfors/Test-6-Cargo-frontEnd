/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBLue: "#3191FF",
        mainWhite: "#FFFFFF",
        darkGray: "#333333",
        lightGray: "#F0F0F0",
        gray: "#B0B0B0",
        black: "#000000",
      },
    },
  },
  plugins: [],
};

// "eslint": "^8",
// "eslint-config-next": "15.0.2",
