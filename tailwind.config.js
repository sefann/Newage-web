/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002f6d",
        accent: "#ffcc00",
      },
    },
  },
  plugins: [],
}

