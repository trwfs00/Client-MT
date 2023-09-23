/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        mtsans: ['var(--font-inter)'],
        mtserif: ['var(--font-playfair)'],
        mtthai: ['var(--font-noto)'],
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
}

