import solucao from "../src/exercicio-08/despachoMala";
import comparar from "./comparar";
import { despachoMalaOutput } from "./output";

describe("Questão - Despacho de Mala", () => {
  it("teste 1", () => {
    const x1 = [
      {
        nome: "Passageiro A",
        pesoMala: 23.1,
      },
      {
        nome: "Passageiro B",
        pesoMala: 18,
      },
      {
        nome: "Passageiro C",
        pesoMala: 17,
      },
      {
        nome: "Passageiro D",
        pesoMala: 2,
      },
      {
        nome: "Passageiro E",
        pesoMala: 1,
      },
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, despachoMalaOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = [
      {
        nome: "Passageiro A",
        pesoMala: 23,
      },
      {
        nome: "Passageiro B",
        pesoMala: 18,
      },
      {
        nome: "Passageiro C",
        pesoMala: 17,
      },
      {
        nome: "Passageiro D",
        pesoMala: 2,
      },
      {
        nome: "Passageiro E",
        pesoMala: 1,
      },
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, despachoMalaOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = [
      {
        nome: "Passageiro A",
        pesoMala: 24,
      },
      {
        nome: "Passageiro B",
        pesoMala: 37,
      },
      {
        nome: "Passageiro C",
        pesoMala: 50,
      },
      {
        nome: "Passageiro D",
        pesoMala: 2,
      },
      {
        nome: "Passageiro E",
        pesoMala: 1,
      },
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, despachoMalaOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = [
      {
        nome: "Passageiro A",
        pesoMala: 24,
      },
      {
        nome: "Passageiro B",
        pesoMala: 37,
      },
      {
        nome: "Passageiro C",
        pesoMala: 50,
      },
      {
        nome: "Passageiro D",
        pesoMala: 23,
      },
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, despachoMalaOutput.output4);
    expect(corresponde).toBeTruthy();
  });

  it("teste 5", () => {
    const x1: any = [];
    const y = solucao(x1);
    const corresponde = comparar(y, despachoMalaOutput.output5);
    expect(corresponde).toBeTruthy();
  });
});
