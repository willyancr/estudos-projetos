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
