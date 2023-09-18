/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
        },
        blue: {
          light: "var(--color-blue-light)",
          dark: "var(--color-blue-dark)",
        },
        purple: {
          light: "var(--color-purple-light)",
          dark: "var(--color-purple-dark)",
        },
        danger: "var(--color-danger)",
      },
    },
  },
  plugins: [],
};
