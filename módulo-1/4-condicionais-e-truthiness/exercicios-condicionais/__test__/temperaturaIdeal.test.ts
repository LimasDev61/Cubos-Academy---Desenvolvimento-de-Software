import solucao from "../src/exercicio-05/temperaturaIdeal";
import comparar from "./comparar";
import { temperaturaIdealOutput } from "./output";

describe("Questão - Temperatura Ideal da Cerveja", () => {
  it("teste 1", () => {
    const x1 = "pilsen";
    const x2 = -0.1;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = "pilsen";
    const x2 = 0;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = "pilsen";
    const x2 = 4;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output3);
    expect(corresponde).toBeTruthy();
  });
  it("teste 4", () => {
    const x1 = "pilsen";
    const x2 = 4.01;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output4);
    expect(corresponde).toBeTruthy();
  });

  it("teste 5", () => {
    const x1 = "trigo";
    const x2 = 3.99;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output5);
    expect(corresponde).toBeTruthy();
  });
  it("teste 6", () => {
    const x1 = "trigo";
    const x2 = 4;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output6);
    expect(corresponde).toBeTruthy();
  });
  it("teste 7", () => {
    const x1 = "trigo";
    const x2 = 5.99;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output7);
    expect(corresponde).toBeTruthy();
  });
  it("teste 8", () => {
    const x1 = "trigo";
    const x2 = 6;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output8);
    expect(corresponde).toBeTruthy();
  });

  it("teste 9", () => {
    const x1 = "trigo";
    const x2 = 6.01;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output9);
    expect(corresponde).toBeTruthy();
  });

  it("teste 10", () => {
    const x1 = "ipa";
    const x2 = 6.99;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output10);
    expect(corresponde).toBeTruthy();
  });

  it("teste 11", () => {
    const x1 = "ipa";
    const x2 = 7;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output11);
    expect(corresponde).toBeTruthy();
  });

  it("teste 12", () => {
    const x1 = "ipa";
    const x2 = 10;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output12);
    expect(corresponde).toBeTruthy();
  });

  it("teste 13", () => {
    const x1 = "ipa";
    const x2 = 10.01;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, temperaturaIdealOutput.output13);
    expect(corresponde).toBeTruthy();
  });
});
