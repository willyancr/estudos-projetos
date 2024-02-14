export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
}
export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: number,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome + ' - ' + this.sala;
  }
}
const aluno = new Aluno('Willyan', 'Santos', 20, '111.111.111-11', 12);
console.log(aluno);
