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
      backgroundImage: {
        btnBg: "url('/btnBg.svg')",
        btnHeroBg: "url('/btnHeroBg.png')",
        btnHeroBg2: "url('/btnHeroBg2.png')",
        hero1: "url('/hero1.jpg')",
        // hero21: "url('/hero21.jpg')",
        // hero22: "url('/hero22.png')",
        information: "url('/information.jpg')",
        contact: "url('/contactBg.jpg')",
        featureLeft: "url('/featureLeft.png')",
        featureRight: "url('/featureRight.png')",
      },
    },
  },
  plugins: [],
};

// "eslint": "^8",
// "eslint-config-next": "15.0.2",
