//Factory Function - é uma função que retorna um objeto sem a necessidade de usar a palavra-chave new. Ela é útil para abstrair a criação de objetos complexos do restante do código.
//Exemplo simples
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
  const celular = {
      marcaCelular,
      tamanhoTela,
      capacidadeBateria,
      ligar(){
          console.log('Fazendo ligação...')
      }
  }
  return celular
}
const celular1 = criarCelular('Asus', 5.5, 5000)
console.log(celular1)

//exemplo sistema de gerenciamento de estoque
function criarProduto(nome, preco, estoque){
  return {
      nome: nome,
      preco: preco,
      estoque: estoque,
      descricao: function() {
          console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco}, Estoque: ${this.estoque}`)
      },
      vender: function(qta) {
          if(qta > this.estoque){
              console.log('Quantidade indisponivel')
          }else{
              this.estoque -= qta
              console.log(`Venda efetuada com sucesso! Quantidade disponivel: ${this.estoque}`)
          }
      },
      repor: function(qta) {
          this.estoque += qta
          console.log(`Reposição efetuada com sucesso! Quantidade disponivel: ${this.estoque}`)
      }
  }
  
}

const produto1 = criarProduto('Notebook', 1000, 10)
const produto2 = criarProduto('Relogio', 500, 50)

produto1.descricao()
produto1.vender(5)
produto1.vender(5)
produto1.repor(10)
produto1.repor(10)