import solucao from "../src/exercicio-07/calculoImc";
import comparar from "./comparar";
import { calculoImcOutput } from "./output";

describe("Questão - Cálculo do IMC", () => {
  it("teste 1", () => {
    const x1 = 40.5;
    const x2 = 1.7;
    const y = solucao(x1, x2);
    const corresponde = comparar(y.toFixed(2), calculoImcOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 20;
    const x2 = 1;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, calculoImcOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 1;
    const x2 = 1;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, calculoImcOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = 100;
    const x2 = 2;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, calculoImcOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
