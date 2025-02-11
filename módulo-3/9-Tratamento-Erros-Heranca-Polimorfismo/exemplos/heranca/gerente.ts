import { Funcionario } from "./funcionario";

export class Gerente extends Funcionario {
  senha: string;

  constructor(nome: string, salario: number, senha: string) {
    super(nome, salario);
    this.senha = senha;
  }

  public validarSenha(senha: string): boolean {
    return this.senha === senha;
  }
}
