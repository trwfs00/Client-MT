import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
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
  plugins: [],
  

}
export default config
