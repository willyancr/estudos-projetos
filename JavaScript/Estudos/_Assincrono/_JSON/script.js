//JSON.parse() irá transformar um texto JSON em um objeto JavaScript
//JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON

const textJSON = '{"id": 1,"titulo": "JavaScript", "tempo": "25min"}'
const textoOBJ = JSON.parse(textJSON)
console.log(textJSON, textoOBJ)

const enderecoOBJ = {
    cidade: "Palmas",
    estado: "Tocantins",
    quadra: "Arse 61",
    lote: 39
}

const enderecoJSON = JSON.stringify(enderecoOBJ)
console.log(enderecoOBJ, enderecoJSON)