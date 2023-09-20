//O método call() permite que você chame uma função com um contexto específico e argumentos passados como argumentos individuais.
function calcularCustoDePropriedade(anosDePropriedade, seguroAnual, manutencaoAnual) {
    const depreciacao = this.valorInicial / anosDePropriedade;
    const custoTotal = (depreciacao + seguroAnual + manutencaoAnual);
    console.log(`Custo total de propriedade: $${custoTotal}`);
  }
  
  const carroA = {
    valorInicial: 20000,
  };
  
  const carroB = {
    valorInicial: 30000,
  };
  
// calcularCustoDePropriedade.call(carroA, 5, 1000, 800); 
// calcularCustoDePropriedade.call(carroB, 7, 1200, 1000); 

  //O método apply() é semelhante ao call, mas permite que você passe os argumentos como um array.
  function encontrarValorMinimo() {
    const args = Array.from(arguments); // Converte os argumentos para um array
    const valorMinimo = Math.min.apply(null, args);
    console.log(`Valor mínimo: ${valorMinimo}`);
  }
  
//encontrarValorMinimo(10, 5, 8, 2, 15); 
  
const valor = [10, 22, 33, 44, 55]

function encontrarValorMin(){
    const valorMin = Math.min.apply(null, valor)
    console.log(`O valor minimo é: ${valorMin}`)
}
// encontrarValorMin()

//bind() - não irá executar a função, mas sim retornar a mesma com o novo contexto do this
//Definindo um objeto que contém um método
    const pessoa = {
      nome: 'Maria',
      saudacao: function() {
        console.log(`Olá, ${this.nome}!`);
      }
    };

    // Capturando o elemento do botão
    const botao = document.getElementById('meuBotao');

    // Vinculando a função de saudação ao contexto do objeto pessoa
    const funcaoSaudacao = pessoa.saudacao.bind(pessoa);

    // Adicionando um manipulador de evento de clique ao botão
    botao.addEventListener('click', funcaoSaudacao);

//EXERCICIOS
//01 - Retorne a soma total de caracteres dos parágrafos acima utilzando reduce
const paragrafo = document.querySelectorAll('p')
const totalCaracteres = Array.prototype.reduce.call(paragrafo,(acumulador, caractere) => {
  
  return acumulador + caractere.innerText.length

},0)
// console.log(totalCaracteres)

//02 - Crie uma função que retorne novos elementos html, com os seguintes parâmentros: tag, classe e conteúdo
function createElemet(tag, classe, conteudo){
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null
  conteudo ? elemento.innerHTML = conteudo : null 
  return elemento
}
// console.log(createElemet('div', 'ativo', 'teste'))

//03 - Crie uma nova função utilizando a anterior como base. Essa nova função deverá criar um h1 com a classe titulo. Porém o parâmetro conteudo continuará dinamico 
const h1 = createElemet.bind(null, 'h1', 'titulo')
// console.log(h1('teste'))
// console.log(h1('arroz'))