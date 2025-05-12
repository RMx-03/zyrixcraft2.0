/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          'tablet': {'min': '768px', 'max': '1366px'},
          'tablet-sm': {'min': '768px', 'max': '1024px'},
          'tablet-md': {'min': '820px', 'max': '1180px'},
          'tablet-lg': {'min': '912px', 'max': '1368px'},
        },
      },
    },
    plugins: [],
  }
