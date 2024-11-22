import solucao from "../src/exercicio-05/probabilidadeVitoria";
import comparar from "./comparar";
import { probabilidadeVitoriaOutput } from "./output";

describe("Questão - Probabilidade de Vitória", () => {
  it("teste 1", () => {
    const x1 = { nome: "Time A", probabilidades: [] };
    const y = solucao(x1);
    const corresponde = comparar(y, probabilidadeVitoriaOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = { nome: "Time A", probabilidades: [15] };
    const y = solucao(x1);
    const corresponde = comparar(y, probabilidadeVitoriaOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = { nome: "Time A", probabilidades: [100, 100, 100, 100] };
    const y = solucao(x1);
    const corresponde = comparar(y, probabilidadeVitoriaOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = { nome: "Time A", probabilidades: [100, 90] };
    const y = solucao(x1);
    const corresponde = comparar(y, probabilidadeVitoriaOutput.output4);
    expect(corresponde).toBeTruthy();
  });

  it("teste 5", () => {
    const x1 = { nome: "Time A", probabilidades: [0, 0, 0] };
    const y = solucao(x1);
    const corresponde = comparar(y, probabilidadeVitoriaOutput.output5);
    expect(corresponde).toBeTruthy();
  });
});
