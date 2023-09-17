//exercicios
//01 - selecione cada curso e retorne uma array com objetos contendo o titulo, descrição, aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
const arrayCurso = Array.from(cursos)

const objetosCurso = arrayCurso.map(curso => {

    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText

    return {
        titulo, descricao, aulas, horas
    }
})
// console.log(objetosCurso)

//02 - Retorne uma lista com os números marios que 100
const numeros = [3, 44, 101, 125, 22, 54, 100]
const maiores100 = numeros.filter(numero => numero > 100)
//console.log(maiores100)

//03 - Verifique se o baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra','Baixo','Bateria','teclado']
const verifica = instrumentos.some(instrumento => instrumento === 'Baixo')
//console.log(verifica)

//04 - Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Pera',
        preco: 'R$ 6,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 1,99'
    },
    {
        item: 'Morango',
        preco: 'R$ 10,99'
    },
]
let valorTotal = 0
compras.forEach(valor => {
    const limparValor = +valor.preco.replace('R$ ','').replace(',','.')
    valorTotal += limparValor
})
console.log('Valor tota de: ' + valorTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))