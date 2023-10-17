//regex - são padrões de pesquisa que permitem a você combinar e manipular texto em JavaScript. As expressões regulares são extremamente úteis para tarefas como validação de entrada de dados, busca e substituição de texto e extração de informações de cadeias de caracteres complexas. 

const frase = 'Toda nossa'
const fraseNova = frase.replace(/a/g,'y')
console.log(fraseNova)

//Flag: g (/a/g)- retorna todos os resultados
//Flag: i (/Aa/i)- irá buscar por todos os A e a
//Character Class: /[ab]/ - irá procurar por 'a' ou 'b'
//Character Class: /[-.]/ - irá procurar por '-' ou '.'
//Um ou outro - combine cacacteres literais com uma classe para buscarmos variações: ju[nl]ho busca 'Julho' ou 'Junho'
//De A a Z - /[A-Z]/g ou de 0 a 9: /[0-9]/g
//Negar - /[^a]/g - negando todas as letras 'a'
//Escapar Especiais - '\' - '/\./': procura todos os pontos
//Word - /\w/ - seleciona qualuqer caracter alfunumérico e o underline
//Digitdos - /\d/ - seleciona os digitos

//Validar CEP
const cep = '77222-022'
const regexCEP = /^\d{5}[\s-]?\d{3}$/g
if(regexCEP.exec(cep)){
    console.log('CEP válido')
}else{
    console.log('CEP invalido')
}

//Validar CPF - refatorado
const cpf = '019-338-521-05'
const regexCPF = /^\d{3}[-.]?\d{3}[-.]?\d{3}[-.]?\d{2}$/g

console.log(regexCPF.test(cpf) ? 'CPF valido' : 'CPF invalido') 

//Validade telefone
const telefone = '(11) 22999-8999'
const regexTelefone = /(\(?\d{2}\)?\s?)?(\d{4,5}[\s-.]?\d{4}$)/

console.log(regexTelefone.test(telefone)? 'Telefone valido' : 'Telefone invalido')

//Validar email
const email = 'willyancr@gmail.com'
// const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const regexEmail = /[\w.-]+@[\w.-]+\.[\w.-]+/gi
console.log(regexEmail.test(email)? 'Email valido' : 'Email invalido')

//