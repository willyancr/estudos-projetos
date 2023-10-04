//new Promise() - Uma Promise em JavaScript é um objeto que representa a eventual conclusão (ou falha) assíncrona de uma operação. As Promises são usadas para lidar com código assíncrono de uma maneira mais limpa e legível, especialmente quando você está trabalhando com chamadas de API, requisições de rede, acesso a banco de dados e outras tarefas que levam algum tempo para serem concluídas.
//then() - O Callback deste método só será ativado quando a promise for resolvida. O argunmento do callback será o valor passado na função resolve

const minhaPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const sucesso = true
        if(sucesso){
            resolve('Arquivo enviado com sucesso!')
        } else{
            reject('Falha ao enviar o arquivo')
        }
    }, 1000)
})

minhaPromise.then((resultado) => {
    // console.log(resultado)
}).catch((erro) =>{
    // console.log(erro)
})

//Exemplo mundo real para leitura de arquivos
function lerArquivo(nomeArquivo){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const conteudoArquivo = nomeArquivo
            resolve(conteudoArquivo)
            reject('Erro ao ler o arquivo')
        }, 1000)
    })

}
const nomeDoArquivo = 'Promises.doc'
lerArquivo(nomeDoArquivo)
.then((conteudo) => {
    // console.log(`Conteúdo do arquivo: ${conteudo}`)
})
.catch((erro) => {
    // console.error(`Erro ao ler o arquivo ${nomeDoArquivo}: ${erro}`)
})

//Promise.all() -  é uma função importante em JavaScript para lidar com várias promessas de maneira eficiente. Ela é usada quando você tem um conjunto de promessas e deseja esperar que todas elas sejam resolvidas ou que pelo menos uma delas seja rejeitada antes de continuar com o código.

const imageUrls = [
    'https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg',
    'https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg',
    'https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg'
]

function loadImg(url){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            const img = new Image()
            img.src = url
            img.onload = resolve(img)
            img.onerror = reject(new Error('A imagem não foi carregada'))

        },1000)
    })
}
Promise.all(imageUrls.map(loadImg))
.then(image => {
    image.forEach(item => {
        document.body.append(item)
    })
})
.catch(erro => {
   console.log(erro)
})