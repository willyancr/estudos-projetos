Type guards são funções em TypeScript que estreitam os tipos de variáveis durante a execução. Eles permitem que o compilador saiba mais sobre o tipo de uma variável com base em condições de execução.

Alguns pontos importantes sobre type guards:

Type guards são funções que retornam boolean e estreitam o tipo de uma variável com base no seu retorno.

O tipo mais comum de type guard é usar a palavra-chave instanceof para verificar se uma variável é uma instância de uma classe.

Outro tipo comum é usar typeof para verificar o tipo primitivo de uma variável.