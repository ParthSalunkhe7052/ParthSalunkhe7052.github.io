/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#0a0a0a',
        surfaceHover: '#141414',
        primary: '#00ffcc',
        secondary: '#00b38f',
        text: '#ededed',
        muted: '#a3a3a3',
        border: '#1f1f1f'
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
        heading: ['Geist', 'Space Grotesk', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}