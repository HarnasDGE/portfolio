/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(82, 113, 255)",
        secondary: "rgb(120, 171, 168)",
        accent: "rgb(0, 255, 255)",
        dark: "rgb(41, 41, 41)",
        light: "rgb(255, 255, 255)",
        muted: "rgb(143, 143, 143)",
        gray: "rgb(79, 79, 79)", // Dodatkowy szary
        navbar: "rgb(250,250,250)",
        dnavbar: "rgb(79,79,79)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
