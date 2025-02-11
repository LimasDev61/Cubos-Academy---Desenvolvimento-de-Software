import { Funcionario } from "./funcionario";

export class Programador extends Funcionario {
  private linguagens: string[];

  constructor(nome: string, salario: number, linguagens: string[]) {
    super(nome, salario);
    this.linguagens = linguagens;
  }

  obterLinguagens() {
    return this.linguagens;
  }
}
