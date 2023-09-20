//transformar em moedas
let valor = 18.8
valor = valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})


//gerar valor randon
const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
//console.log(numeroAleatorio)

//retornar o maior numero
let numeros = '4, 5, 20, 33, 41'
numeros = numeros.split(', ')
const numeroMaximo = Math.max(...numeros)
//console.log(numeroMaximo)

//criar uma função para limpar os preços e retornar os numeros com centavos arrendondados e depois a soma total
const listaprecos = ['R$ 59,99', 'R$ 39,939', 'R$ 200', 'r$ 230']
let soma = 0
listaprecos.forEach(item => {
    item = +item.toLowerCase().replace(',', '.').replace('r$ ', '')
    soma += item   
})
console.log(soma.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))
