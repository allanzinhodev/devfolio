/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#ff1493', // Rosa neon
      },
      fontFamily: {
        'press': ['"Press Start 2P"', 'cursive'],
        'pixel': ['"VT323"', 'monospace'],
      }
    },
  },
  plugins: [],
}
