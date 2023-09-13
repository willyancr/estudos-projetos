//transoformar em array
const li = document.querySelectorAll('li')
const arrayLi = Array.from(li)

//organizar lista array alfabetica
const instrumento = ['pêra', 'arroz','maça']
instrumento.sort()

//adicionar na lista array
const carros = ['ferrari','ford','fiat']
carros.unshift('GM') // add no começo da lista
carros.push('aston martin') // add no final da lista

//remover da lista 
carros.shift() //remove o primeiro da lista
carros.pop() //remove o ultimo da lista

//investe a ordem da lista
carros.reverse()

