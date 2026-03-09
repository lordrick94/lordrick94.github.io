/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#0A1929',
        'cosmic-purple': '#5E35B1',
        'nebula-pink': '#E91E63',
        'supernova-orange': '#FF6D00',
        'teal-burst': '#00BCD4',
        'text-dark': '#E8EAED',
        'text-light': '#1E293B',
        'surface': '#1E1E2F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
