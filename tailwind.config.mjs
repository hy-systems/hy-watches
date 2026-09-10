/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: { unimaticLight: "#F6F6F6", unimaticAccent: "#AFFF00", unimaticDark: "#1C1C1C" },
      fontFamily: { sans: ["Helvetica Neue", "Arial", "sans-serif"], mono: ["JetBrains Mono", "monospace"] }
    },
  },
  plugins: [],
};
