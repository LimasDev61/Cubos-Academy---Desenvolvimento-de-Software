import { Funcionario } from "./funcionario";

export class Vendedor extends Funcionario {
    comissao: number;

    constructor(nome: string, salario: number, comissao: number) {
        super(nome, salario);
        this.comissao = comissao;
    }

    salarioCompleto() {
        return this.comissao + this.obterSalario(); 
    }

    adicionarComissao(valor: number) {
        this.comissao += valor
    }
}