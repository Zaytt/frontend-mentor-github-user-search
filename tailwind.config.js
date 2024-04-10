/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    colors: {
      primary: '#0079FF',
      slategray: '#697C9A',
      dullblue: '#4B6A9B',
      charcoal: '#2B3442',
      zircon: '#F6F8FF',
      ceramic: '#FEFEFE',
      dark: '#141D2F',
      nileblue: '#1E2A47',
      glacier: '#90A4D4',
      white: '#FFFFFF',
      warning: '#F74646',
      crystalblue: '#60ABFF',
      cadetblue: '#A7B4CA',
    },
    fontFamily: {
      sans: ['SpaceMono', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('tailwindcss-animated')],
};
