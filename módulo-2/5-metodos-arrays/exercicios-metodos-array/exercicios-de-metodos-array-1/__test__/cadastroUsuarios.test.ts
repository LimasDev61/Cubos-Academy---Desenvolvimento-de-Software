import solucao from "../src/exercicio-05/cadastroUsuarios";
import comparar from "./comparar";
import { cadastroUsuariosOutput } from "./output";

describe("Questão - Cadastro de Usários", () => {
  it("teste 1", () => {
    const x1 = [
      {
        nome: "Ana",
        email: "ana@gmail.com",
        senha: "123456",
      },
      {
        nome: "Paula",
        email: "p.antunies@al.com",
        senha: "121236",
      },
      {
        nome: "Pedro",
        email: "pedro@gmail.com",
        senha: "9u9rn3nf4",
      },
      {
        nome: "Lucas",
        email: "lc@hotmail.com",
        senha: "revrvretgs",
      },
      {
        nome: "João",
        email: "joao@outlook.com",
        senha: "0in8h834c0",
      },
    ];
    const x2 = {
      nome: "Augusta Catarina",
      email: "ana@gmail.com",
      senha: "2251213",
    };
    const y = solucao(x1, x2);
    expect(y).toEqual(cadastroUsuariosOutput.output1);
  });

  it("teste 2", () => {
    const x1: any[] = [];
    const x2 = {
      nome: "Augusta Catarina",
      email: "ana@gmail.com",
      senha: "2251213",
    };
    const y = solucao(x1, x2);
    expect(y).toEqual(cadastroUsuariosOutput.output2);
  });

  it("teste 3", () => {
    const x1: any[] = [
      {
        nome: "Yuri",
        email: "william@gmail.com",
        senha: "000xa00",
      },
    ];
    const x2 = {
      nome: "William",
      email: "william@gmail.com",
      senha: "2251213",
    };
    const y = solucao(x1, x2);
    expect(y).toEqual(cadastroUsuariosOutput.output3);
  });

  it("teste 4", () => {
    const x1: any[] = [
      {
        nome: "Yuri",
        email: "william@gmail.com",
        senha: "000xa00",
      },
    ];
    const x2 = {
      nome: "William",
      email: "williams@gmail.com",
      senha: "2251213",
    };
    const y = solucao(x1, x2);
    expect(y).toEqual(cadastroUsuariosOutput.output4);
  });
});
