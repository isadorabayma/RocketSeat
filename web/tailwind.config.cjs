const { Repeat } = require('phosphor-react');

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

      gridTemplateRows: {
        // cria um grid com 7 linhas só não entendi esse final minmax(0, 1fr)
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
