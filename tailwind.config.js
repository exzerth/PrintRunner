/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray20: '#333333',
        bgcolor: '#f5f9fc',
        primary: '#1976d2',
      },
    },
  },
  plugins: [],
}
