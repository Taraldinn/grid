/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}",
            "./*.{html,js,css}",],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#2D25A0',
        'ash-gray': '#6C6C6C',
        'my-pink':'#E02C6D',
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

  ],
}
