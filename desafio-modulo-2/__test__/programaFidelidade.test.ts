import solucao from "../src/exercicio-04/programaFidelidade";
import comparar from "./comparar";
import { programaFidelidadeOutput } from "./output";

describe("Questão - Programa de Fidelidade", () => {
  it("teste 1", () => {
    const x1 = 99.9;
    const x2 = 1000;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, programaFidelidadeOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 100;
    const x2 = 1000;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, programaFidelidadeOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 500;
    const x2 = 1000;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, programaFidelidadeOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = 500.1;
    const x2 = 1000;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, programaFidelidadeOutput.output4);
    expect(corresponde).toBeTruthy();
  });

  it("teste 5", () => {
    const x1 = 499.9;
    const x2 = 1000;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, programaFidelidadeOutput.output5);
    expect(corresponde).toBeTruthy();
  });
});
