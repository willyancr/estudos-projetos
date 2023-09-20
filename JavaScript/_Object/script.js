//Object.assign() é um método em JavaScript usado para copiar propriedades de um objeto de origem (ou várias fontes de objeto) para um objeto de destino. Basicamente, é usado para combinar objetos ou clonar propriedades de um objeto em outro.
const configPadrao = {
  tema: 'Claro',
  tamanhoFonte: 'Médio'
}
const configUsuario = {
  tema: 'Escuro',
  tamanhoFonte: 'Grande',
  idioma: 'ingles'
}

const configFinal = Object.assign(configPadrao, configUsuario)
// console.log(configFinal)

//Object.defineProperties() é um método em JavaScript que permite definir ou modificar várias propriedades em um objeto. Ele é usado para controlar mais detalhadamente as características das propriedades de um objeto, como torná-las enumeráveis, configuráveis ou graváveis.
const moto = {}
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, //impede deletar e mundaça de valor
    writable: false, //impede mudança de valor
    enumerable: true // tona enumerável
  }
})
