/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        'sidebar-main': '20% 80%',
      },
      colors: {
        gray: {
          50: 'hsl(0, 0%, 98%)',
          500: 'hsl(0, 0%, 41%)',
          950: 'hsl(0, 0%, 8%)',
        },
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
