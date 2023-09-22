//mude a cor da tela para azul e depois para vememlho a cada 2s

function mudarClasse(){
    document.body.classList.toggle('color')
}
// setInterval(mudarClasse, 2000)


//Crie um cronometro utilizando setinterval. Deve ser possivel iniciar, pausar e resetar (duplo clique no pausar)

const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.secondes')
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')

function handlePlay(){
    prompt('Digite os minutos:')
}

play.addEventListener('click', handlePlay)