/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#212529',
      },
      container: {
        center: true,
        padding: '12px',
      },
    },
  },
  plugins: [],
};
