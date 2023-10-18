import ValidarCPF from "./validarCPF.js"
const validarCPF = new ValidarCPF()

const cpf = document.querySelector("input")
const btn = document.querySelector(".btn")
const validacao = document.querySelector(".validacao")
const regexCPF = /(\d{3}[\s-.]?){3}\d{2}$/


cpf.addEventListener("change", verificarCPF)

function verificarCPF(event) {
    event.preventDefault();
    
    let cpfLimpo = cpf.value
    cpfLimpo = validarCPF.formatar(cpfLimpo)
    
    if(regexCPF.test(cpfLimpo)){
        cpf.value = cpfLimpo
        validacao.innerHTML = ''
    }else{
        validacao.innerHTML = "CPF inválido, digite um CPF válido"
        
    }
}
