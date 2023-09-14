//.forEach() - é usado quando você deseja executar uma ação em cada elemento da matriz, mas não deseja criar uma nova matriz.
//.map() - é usado quando você deseja criar um novo array com os resultados de uma transformação em cada elemento da matriz original.
const carros = ['Fiat','Ford','Honda']
const newCarros = carros.map(item => {
    return item.toUpperCase()
})

console.log(newCarros)
console.log(carros)