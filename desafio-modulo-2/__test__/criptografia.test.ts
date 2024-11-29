import solucao from "../src/exercicio-03/criptografia";
import comparar from "./comparar";
import { criptografiaOutput } from "./output";

describe("Questão - Criptografia", () => {
  it("teste 1", () => {
    const x1 = "cubos";
    const x2 = "cuboscuboscubos";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, criptografiaOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = "cuboss";
    const x2 = "cuboscuboscubos";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, criptografiaOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = "cubos";
    const x2 = "cubos";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, criptografiaOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = "00123";
    const x2 = "cubos00123cubos";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, criptografiaOutput.output4);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = "00123";
    const x2 = "cubos00123cuboscubos";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, criptografiaOutput.output5);
    expect(corresponde).toBeTruthy();
  });
});
