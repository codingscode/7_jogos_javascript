const quadrado = document.querySelectorAll('.quadrado')
const toupeira = document.querySelectorAll('.toupeira')
const temporestante = document.querySelector('#tempo-restante')
let pontuacao = document.querySelector('#pontuacao')

let resultado = 0
let tempoAtual = temporestante.textContent

function quadradoAleatorio() {
   quadrado.forEach(nomeClasse => {
      nomeClasse.classList.remove('toupeira')
   })

   let posicaoAleatoria = quadrado[Math.floor(Math.random() * 9)]
   posicaoAleatoria.classList.add('toupeira')

   // assinalar o id da posicaoAleatoria para posicao batida para ser usado depois
   posicaoBatida = posicaoAleatoria.id
}

quadrado.forEach(id => {
   id.addEventListener('mouseup', () => {
       if (id.id === posicaoBatida) {
          resultado += 1
          pontuacao.textContent = resultado
       }
   })
})

function moverToupeira() {
    let cronometroId = null
    cronometroId = setInterval(quadradoAleatorio, 1000)
}

moverToupeira()

function contagemRegressiva() {
    tempoAtual -= 1
    temporestante.textContent = tempoAtual

    if (tempoAtual === 0) {
        clearInterval(cronometroId)
        alert(`Fim de jogo! Sua pontuação final é ${resultado}`)
        console.log(resultado)
    }
}

let cronometroId = setInterval(contagemRegressiva, 1000)

