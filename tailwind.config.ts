import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#061A2F',
        ocean: '#0B5FA5',
        gold: '#C89B3C',
        steel: '#E7EDF3',
        graphite: '#101820'
      },
      boxShadow: {
        premium: '0 30px 80px rgba(0, 0, 0, 0.18)'
      }
    },
  },
  plugins: [],
}
export default config
