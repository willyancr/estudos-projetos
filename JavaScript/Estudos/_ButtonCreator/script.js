
const controls = document.querySelector('.controls')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')
let copyCssText = ''
controls.addEventListener('change', handleChange)

const handleStyle = {

    text(value){
        btn.innerText = value
    },
    color(value){
        btn.style.color = value
    },
    backgroundColor(value){
        btn.style.backgroundColor = value
    },
    height(value){
        btn.style.height = value + 'px'
    },
    width(value){
        btn.style.width = value + 'px'
    },
    border(value){
        btn.style.border = value
    },
    borderRadius(value){
        btn.style.borderRadius = value + 'px'
    },
    fontFamily(value){
        btn.style.fontFamily = value
    },
    fontSize(value){
        btn.style.fontSize = value + 'px'
    }
}
function handleChange(event){
    const name = event.target.name
    const value = event.target.value

    handleStyle[name](value)
    saveValues(name, value)
    handleCssText()

}
function saveValues(name, value){
    localStorage[name] = value
}
function setValues(){

    const properties = Object.keys(localStorage)

    properties.forEach(property => {
        //element - encontrar o elemento no formulário correspondente a cada chave do localStorage
        const element = controls.querySelector(`[name = "${property}"]`)
        if(element){
            const value = localStorage[property]
            element.value = value
            handleStyle[property](value)
        }
    })
    handleCssText()
}
setValues()

function handleCssText(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
    copyCssText = btn.style.cssText
}
function copyCss(){
    
    navigator.clipboard.writeText(copyCssText).then(() => {
        alert(' -- Código CSS copiado -- ')
    })
}