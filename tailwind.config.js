/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          "inia": ["inia", "Regular"],
      },
      outlineColor:{
        'custom-blue': '#17A2B6',
        'light-blue': '#6292b4',
        'faded-blue': '#007cba',
      },
      borderColor: {
        'custom-blue': '#17A2B6',
        'light-blue': '#6292b4',
        'faded-blue': '#007cba',
      },
      backgroundColor: {
        'custom-blue': '#17A2B6',
        'light-blue': '#6292b4',
        'faded-blue': '#007cba',
      },
      color: {
        'custom-blue': '#17A2B6',
        'light-blue': '#6292b4',
        'faded-blue': '#007cba',
      },
      textColor: {
        'custom-blue': '#17A2B6',
        'light-blue': '#6292b4',
        'faded-blue': '#007cba',
      },
      boxShadowColor: {
        'custom-blue': '#17A2B6',
        'light-blue': '#6292b4',
        'faded-blue': '#007cba',
      }
    },
  },
  plugins: [],
}

