
const transacao = [
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
let taxaTotal = 0
let recebimentoTotal = 0
transacao.forEach(item => {
    const limparValor = Number(item.valor.replace('R$ ', ''))

    if(item.descricao.slice(0, 4) === 'Taxa'){
        taxaTotal += limparValor
        
    }
    recebimentoTotal += limparValor
})
// console.log(taxaTotal)
// console.log(recebimentoTotal)

//retorne uma array com a lista abaixo
const transporte = 'carro;avião;trem;onibus;bicicleta'

const arrayTrasnporte = transporte.split(';')

//console.log(arrayTrasnporte)

// subistituir span por a
let html = `<ul>
                <li><span> teste
                <li><span> teste
                <li><span> teste
            `

html = html.split('span').join('a')

//console.log(html)

//retornar o ultimo caractere da string
let frase = 'melhor do ano'
frase = frase.charAt(frase.length - 1)
//console.log(frase)

//retornar o total de taxas
const transacao2 = ['Taxa de banco', 'taxa de pão', 'TAXA DE ARROZ', 'Deposito Bancario', 'TARIFA especial']

let soma = 0
transacao2.forEach(item => {
    item = item.slice(0, 4).toLowerCase()
    
    if(item === 'taxa'){
        soma++
    }
})

//console.log(soma)

