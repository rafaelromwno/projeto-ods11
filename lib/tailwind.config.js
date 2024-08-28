/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'verde-paleta' : '#5BC561',
        'azul-paleta' : '#112B3C',
        'vermelho-paleta' : '#A92C2C',
        'cinza-paleta' : '##CED8E2',
      },
      backgroundImage: {
        'fundo1': "url('../src/img/imagem-fundo.jpg')",
        'fundo2': "url('../src/img/imagem-fundo-verde.jpg')",
      },
    },
  },
  plugins: [],
}

