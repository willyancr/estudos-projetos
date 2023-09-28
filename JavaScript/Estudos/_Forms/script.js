//checkValidity() - verifica se um input com o atributo required é valido ou não.
//validationMessage() - possui a mensagem padrão de erro do browser. É possivel modificar com setCustomValidity()
const email = document.querySelector('#email')
const error = document.querySelectorAll('.error')

email.addEventListener('change', handleForm)

function handleForm(event){
    const target = event.target
    if(!target.checkValidity()){
        target.classList.add('invalido')
        target.setCustomValidity('Email invalido')
        target.nextElementSibling.innerText = target.validationMessage
    }
}