//Spread - refere-se ao operador de propagação, que é representado pelos três pontos consecutivos (...). O operador de propagação é usado para realizar várias tarefas, como copiar arrays, mesclar objetos, criar clones de objetos e muito mais.

//ex1
const frutas = ['Banana', 'Uva', 'Morango']
const legumes = ['Cenoura', 'Batata']

const comida = [...frutas, 'pizza',...legumes]

console.log(comida)

//ex2
function createButton(background = 'blue', color = 'red'){
   
    const button = document.createElement('button')
    button.style.backgroundColor = background
    button.style.color = color
    return button
}

const redButton = createButton('red','blue')
console.log(redButton)

//ex3
const frutas1 = ['Banana', 'Uva', 'Morango']
const comidas = ['Cenoura', 'Batata']

comidas.push(...frutas1)
console.log(comidas)