/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0c0c0c',
        surface: '#161616',
        surfaceHover: '#1e1e1e',
        primary: '#e8a838',
        secondary: '#d97706',
        text: '#ededed',
        muted: '#737373',
        border: '#262626'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
