
document.addEventListener('DOMContentLoaded', () => {
   
      // opções de cartas
      const matrizCartas = [
          {nome: 'batata', imagem: './images/batata.png'},
          {nome: 'batata', imagem: './images/batata.png'},
          {nome: 'hotdog', imagem: './images/hotdog.png'},
          {nome: 'hotdog', imagem: './images/hotdog.png'},
          {nome: 'milkshake', imagem: './images/milkshake.png'},
          {nome: 'milkshake', imagem: './images/milkshake.png'},
          {nome: 'pizza', imagem: './images/pizza.png'},
          {nome: 'pizza', imagem: './images/pizza.png'},
          {nome: 'sorvete', imagem: './images/sorvete.png'},
          {nome: 'sorvete', imagem: './images/sorvete.png'},
          {nome: 'xburger', imagem: './images/xburger.png'},
          {nome: 'xburger', imagem: './images/xburger.png'}
      ]

      const grade = document.querySelector('.grade')

      // criar tabuleiro
      function criarTabuleiro() {
          for (let i=0; i < matrizCartas.length; i++) {
              var carta = document.createElement('img')
              carta.setAttribute('src', './images/blank.png')
              carta.setAttribute('data-id', i)
              //carta.addEventListener('click', flipcard)
              grade.appendChild(carta)
      
          }
      
      }
      
      criarTabuleiro()


})








