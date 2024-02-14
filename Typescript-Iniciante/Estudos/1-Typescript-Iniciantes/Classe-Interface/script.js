export class Pessoa {
    nome;
    sobrenome;
    idade;
    cpf;
    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    getNomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
    getIdade() {
        return this.idade;
    }
    getCpf() {
        return this.cpf;
    }
}
export class Aluno extends Pessoa {
    sala;
    constructor(nome, sobrenome, idade, cpf, sala) {
        super(nome, sobrenome, idade, cpf);
        this.sala = sala;
    }
    getNomeCompleto() {
        return this.nome + ' ' + this.sobrenome + ' - ' + this.sala;
    }
}
const aluno = new Aluno('Willyan', 'Santos', 20, '111.111.111-11', 12);
console.log(aluno);
