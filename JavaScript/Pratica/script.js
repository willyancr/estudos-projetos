
const deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']

const nomes = document.querySelector('#nomes')

let quantidade = deuses.length - 1
for(let i = 0; i <= quantidade; i++){

    const li = document.createElement('li')
    li.appendChild(document.createTextNode(deuses[i]))
    nomes.appendChild(li)

}
