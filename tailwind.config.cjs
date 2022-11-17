/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        changeColor: {
          '0%,15%,35%': { backgroundColor: '#FFE15D' },
          '50%,60%': { backgroundColor: '#F49D1A' },
          '70,90%': { backgroundColor: '#DC3535' },
          '100%': { backgroundColor: '#FFE15D' }
        }
      },
      animation: {
        changeColor: 'changeColor 10s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
