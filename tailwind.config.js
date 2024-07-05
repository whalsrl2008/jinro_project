/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#143E8D",
        secondary: "#0096D6",
      },
    },
  },
  plugins: [],
};
