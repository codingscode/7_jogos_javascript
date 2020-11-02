document.addEventListener('DOMContentLoaded', () => {
    const quadrados = document.querySelectorAll('.grade div')
    const resultado = document.querySelector('#resultado')
    const mostrarJogadorAtual = document.querySelector('#jogador-atual')
    let jogadorAtual = 1
    
    for (var i=0, comprimento = quadrados.length; i < comprimento; i++) 
    
    (function(indice) {
        // adicionar um onclick para cada quadrado em sua grade
        quadrados[i].onclick = function() {
            // se o quadrado abaixo de seu quadrado atual está ocupado, você pode no topo disto
            if(quadrados[indice + 7].classList.contains('ocupado')) {
                if (jogadorAtual === 1) {
                   quadrados[indice].classList.add('ocupado')
                   quadrados[indice].classList.add('jogador-1')
                   // mudar o jogador
                   jogadorAtual = 2
                   mostrarJogadorAtual.innerHTML = jogadorAtual
                }
                else if (jogadorAtual === 2) {
                   quadrados[indice].classList.add('ocupado')
                   quadrados[indice].classList.add('jogador-2')
                   // mudar o jogador
                   jogadorAtual = 1
                   mostrarJogadorAtual.innerHTML = jogadorAtual
                }
                // se o quadrado abaixo de seu quadrado atual não está ocupado, você não pode ir aqui
            }
            else alert('não pode ir aqui')
        }
    })(i)


})

