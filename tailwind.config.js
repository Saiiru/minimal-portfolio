/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}", "./src/**/*.{tsx,ts}", "./index.html"],
  darkMode: "class",
   theme: {
    extend: {
      colors: {
        'primary': '#0d3b66', // Deep blue
        'secondary': '#144552', // Dark teal
        'accent': '#1fbfb8', // Neon teal for accents
        'background': '#03091e', // Almost black dark blue
        'card-bg': '#1e255e', // Dark blue for card backgrounds
      },
      boxShadow: {
        'neon': '0 0 10px #1fbfb8, 0 0 20px #1fbfb8', // Neon shadow
      },
      fontFamily: {
        'body': ['Space Grotesk','Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
