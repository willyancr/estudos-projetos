
const res = document.querySelectorAll('body *')


res.forEach(resultado => {
    resultado.addEventListener('click', handleResultado)
})

function handleResultado(event){
    //event.target.remove()
}