/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // SVMNIVO / TestVision warme oranje-tan accenten
        svm: {
          50: '#fdf6ef',
          100: '#f8e6d3',
          200: '#f0cba5',
          300: '#e6ac74',
          400: '#dc8f4b',
          500: '#c8763b',
          600: '#a95f2f',
          700: '#874a27',
          800: '#6d3d24',
          900: '#5a3421',
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
