import solucao from "../src/exercicio-04/duplaProva";
import comparar from "./comparar";
import { duplaProvaOutput } from "./output";

describe("Questão - Dupla de Prova", () => {
  it("teste 1", () => {
    const x1 = 10;
    const x2 = 8.5;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, duplaProvaOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = 10;
    const x2 = 8.51;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, duplaProvaOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = 9;
    const x2 = 8;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, duplaProvaOutput.output3);
    expect(corresponde).toBeTruthy();
  });
  it("teste 4", () => {
    const x1 = 7.9;
    const x2 = 4;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, duplaProvaOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
