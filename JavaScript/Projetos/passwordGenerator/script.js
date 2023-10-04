
const inputTamanho = document.querySelector('input[type="number"]')
const inputRange = document.querySelector('input[type="range"]')
const numeros = document.querySelector('#numeros')
const letrasMinusculas = document.querySelector('#letrasMinusculas')
const letrasMaiuscula = document.querySelector('#letrasMaiuscula')
const caracteresEspecial = document.querySelector('#caracteresEspecial')
const btnGerar = document.querySelector('.btn')
const senhaGerada = document.querySelector('.senha-gerada span')
const divSenha = document.querySelector('.senha-gerada')
let senha = ''

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

btnGerar.addEventListener('click', handleGerar)

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
    
    senha = ''
    for(let i = 0; i < inputTamanho.value; i++){
        const indiceAleatorio = Math.floor(Math.random() * caracateresPermetido.length)
        senha += caracateresPermetido.charAt(indiceAleatorio)
    }
    
    senhaGerada.innerHTML = senha 
    divSenha.classList.add('ativo')
}
function copiarSenha(){
    navigator.clipboard.writeText(senha).then(() => {
        alert('--> Senha copiada! <--')
    })
}