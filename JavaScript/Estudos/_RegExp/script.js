//regex - são padrões de pesquisa que permitem a você combinar e manipular texto em JavaScript. As expressões regulares são extremamente úteis para tarefas como validação de entrada de dados, busca e substituição de texto e extração de informações de cadeias de caracteres complexas. 

const frase = 'Toda nossa'
const fraseNova = frase.replace(/a/g,'y')
console.log(fraseNova)

//Flag: g (/a/g)- retorna todos os resultados
//Flag: i (/Aa/i)- irá buscar por todos os A e a
//Character Class: /[ab]/ - irá procurar por 'a' ou 'b'
//Character Class: /[-.]/ - irá procurar por '-' ou '.'
const cpf = '019.338.591-05'
const regex = /[-.]/g
const cpfNovo = cpf.replace(regex, '')
console.log(cpfNovo)

//Um ou outro - combine cacacteres literais com uma classe para buscarmos variações: ju[nl]ho busca 'Julho' ou 'Junho'
//De A a Z - /[A-Z]/g ou de 0 a 9: /[0-9]/g
//Negar - /[^a]/g - negando todas as letras 'a'
//Escapar Especiais - '\' - '/\./': procura todos os pontos
//Word - /\w/ - seleciona qualuqer caracter alfunumérico e o underline
//Digitdos - /\d/ - seleciona os digitos

//Validar CEP
const cep = '77022-022'
const regexCEP = /\d{5}[\s-]?\d{3}/g
