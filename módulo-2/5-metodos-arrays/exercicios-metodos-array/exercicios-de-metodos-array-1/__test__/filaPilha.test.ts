import solucao from "../src/exercicio-04/filaPilha";
import { filaPilhaOutput } from "./output";

describe("Questão - Fila ou Pilha", () => {
  it("teste 1", () => {
    const x1 = {
      nomeCliente: "Alexander",
      nomePrato: "Milho",
      quantidade: 20,
    };
    const x2 = [
      {
        nomeCliente: "Amanda",
        nomePrato: "Arroz",
        quantidade: 4,
      },
      {
        nomeCliente: "Jacinto",
        nomePrato: "Macarrao",
        quantidade: 1,
      },
      {
        nomeCliente: "Guilherme",
        nomePrato: "Frango assado",
        quantidade: 2,
      },
    ];

    const x3 = "pilha";
    const y = solucao(x1, x2, x3);
    expect(y).toEqual(filaPilhaOutput.output1);
  });

  it("teste 2", () => {
    const x1 = {
      nomeCliente: "Alexander",
      nomePrato: "Milho",
      quantidade: 20,
    };
    const x2 = [
      {
        nomeCliente: "Amanda",
        nomePrato: "Arroz",
        quantidade: 4,
      },
      {
        nomeCliente: "Jacinto",
        nomePrato: "Macarrao",
        quantidade: 1,
      },
      {
        nomeCliente: "Guilherme",
        nomePrato: "Frango assado",
        quantidade: 2,
      },
    ];

    const x3 = "fila";
    const y = solucao(x1, x2, x3);
    expect(y).toEqual(filaPilhaOutput.output2);
  });

  it("teste 3", () => {
    const x1 = {
      nomeCliente: "Alexander",
      nomePrato: "Milho",
      quantidade: 20,
    };
    const x2: any[] = [];
    const x3 = "fila";
    const y = solucao(x1, x2, x3);
    expect(y).toEqual(filaPilhaOutput.output3);
  });

  it("teste 4", () => {
    const x1 = {
      nomeCliente: "Alexander",
      nomePrato: "Milho",
      quantidade: 20,
    };
    const x2: any[] = [];
    const x3 = "pilha";
    const y = solucao(x1, x2, x3);
    expect(y).toEqual(filaPilhaOutput.output4);
  });
});
