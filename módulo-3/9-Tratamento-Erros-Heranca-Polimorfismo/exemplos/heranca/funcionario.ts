export class Funcionario {
  _nome: string;
  protected _salario: number;

  constructor(nome: string, salario: number) {
    this._nome = nome;
    this._salario = salario;
  }

  public obterSalario(): number {
    return this._salario;
  }
}
