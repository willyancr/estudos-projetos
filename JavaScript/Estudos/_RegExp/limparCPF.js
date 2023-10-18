
const cpfs = document.querySelectorAll('.cpf li')

//pegar os valores do array
const elementeInnerText = elements => {
    const arrayElement = Array.from(elements)
    return arrayElement.map(element => element.innerText)
}

//função para limpar a element
const limparCPF = cpf => cpf.replace(/\D/g, '')

//função para construir ele apartir de limpo
const construirCPF = cpf => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')

//função formatar cpf atraves de varios cpfs
const formatarCPFS = cpfs => cpfs.map(limparCPF).map(construirCPF)

//função para subistituir cpfs
const subistituirCPFS = cpfsElements => {
    cpfsElements.forEach((element, index) => {
        element.innerText = formatarCPFS(elementeInnerText(cpfs))[index]
    })
}

subistituirCPFS(cpfs)
