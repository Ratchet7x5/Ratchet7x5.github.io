/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      montserrat: 'Montserrat'
    },
    lineHeight: {
      'line-height': '1.5'
    },
    fontWeight: {
      'font-weight': 400
    },
    extend: {}
  },
  plugins: []
};
