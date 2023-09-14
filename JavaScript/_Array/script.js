//**Aletrar arrays

//transoformar em array
const li = document.querySelectorAll('li')
const arrayLi = Array.from(li)

//organizar lista array alfabetica
const instrumento = ['pêra', 'arroz','maça']
instrumento.sort()

//adicionar na lista array
const carros = ['ferrari','ford','fiat','ford']
carros.unshift('GM') // add no começo da lista
carros.push('aston martin') // add no final da lista

//remover da lista 
carros.shift() //remove o primeiro da lista
carros.pop() //remove o ultimo da lista

//inverte a ordem da lista
carros.reverse()

//**método de acesso - apenas retornam uma array

//concatenar a array com o valor passado
const concatenar = instrumento.concat(carros, 'festa', 'viagem')
//console.log(concatenar)

//verificar se a array possui valor e retorna true ou false
carros.includes('ferrari') //retorna true

//verifica se a array possui o valor e retorna o index do primeiro valor na array
carros.indexOf('ford')

//retorna o index do ultimo
carros.lastIndexOf('ford')

//junta todos os valores da array e retorna uma string com eles
let linguagens = ['php','java','css','html','java']
linguagens.join() //retorna php,java,css,html,java
linguagens.join(' - ') //retorna php - java - css - html - java

let html = '<h2> TESTE </h2>'
html = html.split('h2').join('h1')
//console.log(html)

//retorna os itens da array começando pelo inicio e indo até o valor de final
linguagens.slice(3) //retorna html, java
linguagens.slice(2, 4) //retorna css, html

//clonar a lista de array
const clonarLinguagens = linguagens.slice()

//exercicios
//01
const comidas = ['Pizza','Frango','Carne','Macarrão']
const removerPrimeiroValor = comidas.shift() //removido o primeiro valor
const removerUltimoValor = comidas.pop() //removido o ultimo valor
const addArroz = comidas.push('Arroz') //add no final da lista
const addInicio = comidas.unshift('Peixe','Batata') //add no começo da lista
//console.log(comidas)

//02
let estudantes = ['Marcio','Brenda','Joana','Pedro','Maria']
estudantes = estudantes.sort() //ordem alfabetica
estudantes = estudantes.reverse() //inverter a ordem
estudantes = estudantes.includes('Brenda') //verifica se ta na lista
//console.log(estudantes)

//03
let html2 = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`

html2 = html2.split('section').join('ul').split('div').join('li')
//console.log(alterarHtml2)

//04
const carros2 = ['Ford','Fiat','GM','Honda']
const cloneCarros2 = carros2.slice()
const removeUltimoCarros2 = carros2.pop()

console.log(carros2)
console.log(cloneCarros2)