//.forEach() - é usado quando você deseja executar uma ação em cada elemento da matriz, mas não deseja criar uma nova matriz.
//exercicios
//01 - somar elementos de um array
const numeros3 = [1,3,55,10,36]
let soma3 = 0
numeros3.forEach(numero => {
    soma3 += numero
})
//console.log(soma3)

//02 - encontrar o maior valor em um array
let numMaior = 0
numeros3.forEach(numero => {
    if(numero > numMaior){
        numMaior = numero       
    }
})
//console.log(numMaior)

//03 - criar um array que tenha só numeros pares
let par = []
numeros3.forEach(numero => {
    if(numero %2 === 0){
        par.push(numero)
    }
})
//console.log(par)

//04 - criar um novo array que conhetenha nomes maiucuslos
const nomes = ['Maria','joão','PedrO']
let newNomes = []
nomes.forEach(nome => {
    newNomes.push(nome.toUpperCase())
})
//console.log(newNomes)

//05 - calcular a média dos valores
let soma4 = 0
let media = 0
numeros3.forEach(numero => {
    soma4 += numero
    media = soma4 / (numeros3.length - 1)
})
console.log(media)


//.map() - é usado quando você deseja criar um novo array com os resultados de uma transformação em cada elemento da matriz original.
const carros = ['Fiat','Ford','Honda']
const newCarros = carros.map(item => {
    return item.toUpperCase()
})

const numero = [2,4,6,7,2]
const numx2 = numero.map(item => item * 2)
//console.log(numx2)

//exercicio
const aulas = [
    {
        nome: 'HTML',
        min: 13
    },
    {
        nome: 'css',
        min: 33
    },
    {
        nome: 'JavaScript',
        min: 23
    }
]
let soma = 0
aulas.forEach(item => {
    const numMin = +item.min
    soma += numMin
})
// console.log(soma + ' Minutos')

//reduce() usada para iterar sobre elementos de um array e realizar uma operação de redução neles. Ao contrário de forEach e map, que são usados principalmente para iterações simples ou transformações de elementos de um array, reduce é usado para acumular um valor único com base nos elementos do array.

const numbers = [1, 2, 3, 4, 5];

const soma1 = numbers.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual;
}, 0);
//console.log(soma1); // Saída: 15

const numeros = [10, 55, 40, 82, 3]
const maiorNumero = numeros.reduce((anterior, atual) => {
    if(anterior < atual){
        return anterior
    }else{
        return atual
    }
})
//console.log(maiorNumero)