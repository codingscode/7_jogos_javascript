
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


      matrizCartas.sort(() => 0.5 - Math.random())

      const grade = document.querySelector('.grade')
      const mostrarResultado = document.querySelector('#resultado')
      var cartasEscolhidas = []
      var cartasEscolhidasId = []
      var cartasVenc = []


      // criar tabuleiro
      function criarTabuleiro() {
          for (let i=0; i < matrizCartas.length; i++) {
              var carta = document.createElement('img')
              carta.setAttribute('src', './images/blank.png')
              carta.setAttribute('data-id', i)
              carta.addEventListener('click', virarCarta)
              grade.appendChild(carta)
      
          }
      
      }

      
      // checar combinações
      function checarCombinacao() {
            var cartas = document.querySelectorAll('img')
            const opcao1Id = cartasEscolhidasId[0]
            const opcao2Id = cartasEscolhidasId[1]

            if (opcao1Id == opcao2Id) {
                cartas[opcao1Id].setAttribute('src', './images/blank.png')
                cartas[opcao2Id].setAttribute('src', './images/blank.png')
                alert('Você clicou na mesma imagem!')
            }
            else if (cartasEscolhidas[0] === cartasEscolhidas[1]) {
                alert('Você encontrou uma combinação')
                cartas[opcao1Id].setAttribute('src', './images/white.png')
                cartas[opcao2Id].setAttribute('src', './images/white.png')
                cartas[opcao1Id].removeEventListener('click', virarCarta)
                cartas[opcao2Id].removeEventListener('click', virarCarta)
                cartasVenc.push(cartasEscolhidas)
            }
            else {
                cartas[opcao1Id].setAttribute('src', './images/blank.png')
                cartas[opcao2Id].setAttribute('src', './images/blank.png')
                alert('Que pena, tente novamente')
            }
            cartasEscolhidas = []
            cartasEscolhidasId = []
            mostrarResultado.textContent = cartasVenc.length

            if (cartasVenc.length === matrizCartas.length/2) {
                mostrarResultado.textContent = `Parabéns, você encontrou todos! ${cartasVenc.length}`
            }

      }

      // vire sua carta
      function virarCarta() {
            var idCarta = this.getAttribute('data-id')
            cartasEscolhidas.push(matrizCartas[idCarta].nome)
            cartasEscolhidasId.push(idCarta)
            this.setAttribute('src', matrizCartas[idCarta].imagem)
            
            if (cartasEscolhidas.length === 2) {
                setTimeout(checarCombinacao, 500)
            }
      }
      
      criarTabuleiro()


})








