
export default function initFetchBitcoin(){

    fetch('https://blockchain.info/ticker')
    .then(data => data.json())
    .then(bitcoin => {
        const btcPreco = document.querySelector('.btc-preco')
        btcPreco.textContent = (100000 / bitcoin.BRL.buy).toFixed(4)
    })
}
