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
//console.log(media)
//06
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

//.map() - é usado quando você deseja criar um novo array com os resultados de uma transformação em cada elemento da matriz original.
const carros = ['Fiat','Ford','Honda']
const newCarros = carros.map(item => {
    return item.toUpperCase()
})

const numero = [2,4,6,7,2]
const numx2 = numero.map(item => item * 2)
//console.log(numx2)

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

const transacoes = [
    {
        descricao: 'Taxa do banco',
        valor: 'R$ 10'
    },
    {
        descricao: 'Recebimento de cliente',
        valor: 'R$ 200'
    },
    {
        descricao: 'Taxa do banco',
        valor: 'R$ 352'
    },
    {
        descricao: 'Taxa do banco',
        valor: 'R$ 52'
    },
    {
        descricao: 'Fatura com Taxa',
        valor: 'R$ 122'
    }
]
const listaTransacoes = transacoes.reduce((acumulador, transacao, index) => {
    acumulador[index] = transacao.valor
    return acumulador
}, [])
//console.log(listaTransacoes)

//some() -  é uma função de alto nível em JavaScript que é usada para verificar se pelo menos um elemento em um array satisfaz uma determinada condição
const numeros6 = [13, 44, 81, 21, 88]
const temMaior = numeros6.some(numero => {
    return numero > 100
})
//console.log(temMaior)

const frutas = ['maça','pera','uva']
const temFrutas = frutas.some(fruta => {
    return fruta === 'melancia'
})
//console.log(temFrutas)

//every() - se todos os returns da interações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false
const frutas1 = ['maça','pera','uva', '']
const arrayCheia = frutas1.every(fruta => {
    return fruta 
    //retorna False pois pelo menos uma fruta está vazia '', o que é um valor falsy
})
// console.log(arrayCheia)

//find() - é usado para encontrar o primeiro elemento em um array que satisfaça uma determinada condição e retorna esse elemento. findIndex() é semelhante ao find(), mas em vez de retornar o elemento em si, ele retorna o índice do primeiro elemento que satisfaça a condição fornecida.
const numeroPar = numeros6.find(numero => numero %2 === 0) //retorna 44
const numeroPar1 = numeros6.findIndex(numero => numero > 44) //retorna 2

//filter() - é usada para criar um novo array contendo todos os elementos de um array original que satisfaçam uma determinada condição especificada por uma função de callback
const numeroPar2 = numeros6.filter(numero => numero %2 === 0) //retorna 44 e 88
const aulas1 = [
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
const maiores15 = aulas1.filter(minutos => minutos.min > 13)
//console.log(maiores15)




