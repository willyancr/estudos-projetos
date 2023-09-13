
function Pessoa(nome, idade){

    this.nome = nome,
    this.idade = idade,
    this.andar = () => {
        // console.log(this.nome + ' tem ' + this.idade)
    }
}

function Dom(seletor){
    
    const elementsList = document.querySelectorAll(seletor)
    this.elements = elementsList
    
    this.ativar = (classe) =>{
        elementsList.forEach(element => {
            element.classList.add(classe)
        })
    }
    this.remover = ()=>{
        elementsList.forEach(element => {
            element.classList.remove(classe)
        })
    }
}
// const li = new Dom('li')
// li.ativar('ativar')


function Pessoa(nome, idade){

    this.nome= nome,
    this.idade= idade
}


Pessoa.prototype.andar = ()=>{
    return 'Andou'
}
const andre = new Pessoa('André', 28)

//
const lista = document.querySelectorAll('li')
const listaArray = Array.prototype.slice.call(lista)
const arrayList = Array.from(lista)

function Outra(nome, sobrenome, idade){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}

Outra.prototype.nomeCompleto = ()=>{
    return this.nome 
}

const name = new Outra('André', 'Pereira')

//lista acessados
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// if(typeof String.length !== undefined){
//     console.log('Exite')
// }else{
//     console.log('não exite')
// }

//liste 5 objetos nativos
Object
Array
String
Number
Math

// liste 5 objetos do browser
window
document
localStorage
navigator
alert

//2 metodos, propiedades ou Objetos presentes no chrome que não existem no firefox
chrome 
WebKitCSSMatrix

