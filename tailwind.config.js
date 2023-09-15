/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
    },
    extend: {
      colors: {
        darkBlue: "#002765",
      },
    },
  },
  plugins: [],
};
