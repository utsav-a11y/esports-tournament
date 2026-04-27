/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          800: '#1f2937',
          900: '#0f172a',
          950: '#111827',
        },
        primary: '#3b82f6',
        accent: '#22c55e',
      }
    },
  },
  plugins: [],
}
