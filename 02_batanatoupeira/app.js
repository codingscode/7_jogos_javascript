const quadrado = document.querySelectorAll('.quadrado')
const toupeira = document.querySelectorAll('.toupeira')
const temporestante = document.querySelectorAll('#tempo-restante')
let pontuacao = document.querySelectorAll('#pontuacao')

let resultado = 0

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
  let tempoId = null
  tempoId = setInterval(quadradoAleatorio, 1000)
}

moverToupeira()







