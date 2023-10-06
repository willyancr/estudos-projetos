//fetch() - é uma função usada para fazer requisições de rede, geralmente para buscar recursos de um servidor web. Ele é amplamente utilizado para fazer solicitações HTTP, como buscar dados de uma API da web ou carregar recursos de um servidor remoto.

//API busca CEP
const inputCEP = document.querySelector('input')
const btn = document.querySelector('.btn')
const endereco = document.querySelector('.endereco')

btn.addEventListener('click', handleBtn)

function handleBtn(event){
    event.preventDefault()

    if(inputCEP.value === ''){
        alert('Digite o CEP')
    }
    else if(inputCEP.value.length < 8 || inputCEP.value.length > 8){
        alert('Digite um cep válido de 8 dígitos')
    }

    buscaCEP()
}

async function buscaCEP(){
    const cep = inputCEP.value
    const dadosCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(dados => dados.json())
    console.log(dadosCEP)
    handleDados(dadosCEP)
}
function handleDados(dadosCEP){
    document.querySelector('.logradouro').innerHTML = 'Logradouro: ' +dadosCEP.logradouro
    document.querySelector('.complemento').innerHTML = 'Complemento: '+dadosCEP.complemento
    document.querySelector('.bairro').innerHTML = 'Bairro: '+dadosCEP.bairro
    document.querySelector('.localidade').innerHTML = 'Localidade: '+dadosCEP.localidade
    document.querySelector('.uf').innerHTML = 'UF: '+dadosCEP.uf
    document.querySelector('.ddd').innerHTML = 'DDD: '+dadosCEP.ddd
}

//
valorBitcoin()

function valorBitcoin(){

    const dadosBitcoin = fetch('https://blockchain.info/ticker')
    dadosBitcoin.then(dados => dados.json())
    .then(dados => {
        handleBitcoin(dados.BRL)
        console.log(dados)
    })  
}
function handleBitcoin(dadosBRL){
    const bitcoinElement = document.querySelector('.bitcoin')  
    bitcoinElement.innerHTML = `O valor do Bitcoin em BRL: ${dadosBRL['15m']}`   
}
