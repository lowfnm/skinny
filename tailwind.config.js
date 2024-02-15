/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#212529',
        error: '#d50003',
      },
      container: {
        center: true,
        padding: '12px',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1000px',
          '2xl': '1000px',
        },
      },
    },
  },
  plugins: [],
};
