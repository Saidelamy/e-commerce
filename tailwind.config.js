/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono,monospace',
    },
    extend: {
      colors: {
        primary: '#0a1d37',
        card1: '#fdefe6',
        card2: '#d6e5fb',
        card3: '#214f4c',
        card4: '#e2f2b2',
      },
    },
  },
  plugins: [],
};
