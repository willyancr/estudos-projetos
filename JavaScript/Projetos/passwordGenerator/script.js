
const inputTamanho = document.querySelector('input[type="number"]')
const inputRange = document.querySelector('input[type="range"]')
const numeros = document.querySelector('#numeros')
const letrasMinusculas = document.querySelector('#letrasMinusculas')
const letrasMaiuscula = document.querySelector('#letrasMaiuscula')
const caracteresEspecial = document.querySelector('#caracteresEspecial')
const gerar = document.querySelector('.btn')
const senhaGerada = document.querySelector('.senha-gerada span')


inputTamanho.addEventListener('input', () => {

    const value = inputTamanho.value
    inputTamanho.value = value
    inputRange.value = value
})

inputRange.addEventListener('input', () => {
    
    const value = inputRange.value
    inputTamanho.value = value
    inputRange.value = value
})

gerar.addEventListener('click', handleGerar)

function handleGerar(event){
    event.preventDefault()
    
    let caracateresPermetido = ''

    if(numeros.checked){
        caracateresPermetido += '0123456789'
    }
    if(letrasMinusculas.checked){
        caracateresPermetido += 'abcdefghijklmnopqrstuvwxyz'
    }
    if(letrasMaiuscula.checked){
        caracateresPermetido += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if(caracteresEspecial.checked){
        caracateresPermetido += "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~"
    }
    if(caracateresPermetido === ''){
        alert('Selecione pelo menos um tipo de senha.')
        return
    }
    
    let senha = ''
    for(let i = 0; i < inputTamanho.value; i++){
        const indiceAleatorio = Math.floor(Math.random() * caracateresPermetido.length)
        senha += caracateresPermetido.charAt(indiceAleatorio)
    }
    senhaGerada.innerHTML = senha 
}