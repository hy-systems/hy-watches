/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        white: '#ffffff',
        accent: '#dbaf56',
        overlay: '#262626',
      },
      fontFamily: {
        sans: ['Sarabun', 'sans-serif'],
        serif: ['Roboto Condensed', 'serif'],
        mono: ['Lexend', 'monospace'],
      },
    },
  },
  plugins: [],
}
