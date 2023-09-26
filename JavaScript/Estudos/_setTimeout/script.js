//mude a cor da tela para azul e depois para vememlho a cada 2s

function mudarClasse(){
    document.body.classList.toggle('color')
}
// setInterval(mudarClasse, 2000)


//Crie um cronometro utilizando setinterval. Deve ser possivel iniciar, pausar e resetar (duplo clique no pausar)

const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')

let receiveMinutes
let receiveSeconds
let timeOut

play.addEventListener('click', handlePlay)
pause.addEventListener('click', pauseTime)
reset.addEventListener('click', resetTime)

function handlePlay(){
    receiveMinutes = prompt('Digite os minutos:')
    minutes.textContent = String(receiveMinutes).padStart(2, '0')
    seconds.textContent = '00'
    counterTime()
}
function counterTime(){

    timeOut = setTimeout(() => {
        receiveMinutes = +minutes.textContent
        receiveSeconds = +seconds.textContent

        if(receiveMinutes <= 0 && receiveSeconds <= 0){
            return
        }
        if(receiveSeconds <= 0){
            receiveSeconds = 60
            minutes.textContent = receiveMinutes - 1
        }
        seconds.textContent = receiveSeconds - 1
        counterTime()
    },1000)
}
function pauseTime(){
    clearInterval(timeOut)
}
function resetTime(){
    clearInterval(timeOut)
    minutes.textContent = '00'
    seconds.textContent = '00'
}