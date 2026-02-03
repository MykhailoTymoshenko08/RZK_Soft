/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandCyan: '#1CD6DD',
        brandDark: '#1A1A1A',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}