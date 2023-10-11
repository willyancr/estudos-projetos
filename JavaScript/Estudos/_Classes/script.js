//Classe - uma classe é um tipo de estrutura que permite definir objetos e seu comportamento. As classes são uma maneira de criar objetos que têm propriedades e métodos em comum. Elas fornecem um meio de criar objetos semelhantes, com a mesma estrutura e comportamento, o que é útil para organizar e reutilizar código.

//Exemplo simples
class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    saudacao(){
        console.log(`Eu me chamo ${this.nome} e tenho ${this.idade} anos`)
    }
}

const pessoa1 = new Pessoa('Maria', 51)
const pessoa2 = new Pessoa('Pedro', 22)
// pessoa1.saudacao()
// pessoa2.saudacao()

//Exemplo aplicação de gerenciamento de contas bancárias
class contaBancaria{
    constructor(propietario, saldoInicial){
        this.propietario = propietario
        this.saldoInicial = saldoInicial
    }
    depositar(valor){
        if(valor > 0){
            this.saldoInicial += +valor
            console.log(`Olá ${this.propietario}, o seu deposito de R$ ${valor} foi efetuado com sucesso. Saldo disponivel de R$ ${this.saldoInicial}`)
        }else{
            console.log('Deposito sem valor algum, por favor, digite um valor maior que 0')
        }
    }
    sacar(valor){
        if(valor < this.saldoInicial){
            this.saldoInicial -= +valor
            console.log(`Olá ${this.propietario}, o seu saque de R$ ${valor} foi efetuado com sucesso! Seu saldo atual é de R$ ${this.saldoInicial}`)
        }else{
            console.log('Saque não efetuado, saldo indisponivel')
        }
    }
    consultarSaldo(){
        console.log(`Olá ${this.propietario}, o seu saldo é de: R$ ${this.saldoInicial}`)
    }
}

const conta1 = new contaBancaria('Maria', 1000)
const conta2 = new contaBancaria('João', 5000)

// conta1.depositar(2000)
// conta1.sacar(500)
// conta1.consultarSaldo()
// conta1.depositar(1)

//get() -  é um método que permite que você acesse o valor de uma propriedade de um objeto como se fosse uma propriedade diretamente, mas na realidade, ele executa um código específico.
//set() - é um método que permite que você atribua um valor a uma propriedade de um objeto, mas também executa código para validar ou processar o novo valor antes de definir a propriedade.

class Pessoa1 {
    constructor(nome, idade){
        this._nome = nome
        this._idade = idade
    }
    get nome(){
        return this._nome
    }
    set nome(novaIdade){
        if(typeof novaIdade === 'string'){
            this._nome = novaIdade
        }else{
            console.log('Erro ao adicionar novo nome. Digite uma string')
        }
    }
}

const pessoa = new Pessoa1('João', 30)
console.log(pessoa.nome)
pessoa.nome = 'Maria'
console.log(pessoa.nome)
pessoa.nome = 123