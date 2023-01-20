/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        // colocar novas cores dentro do tailwind com o nome que você quiser "backg..."
        background: '#09090A'
      },
    },
  },
  plugins: [],
}
