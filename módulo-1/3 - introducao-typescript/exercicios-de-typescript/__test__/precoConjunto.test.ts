import solucao from "../src/exercicio-05/precoConjunto";
import comparar from "./comparar";
import { precoConjuntoOutput } from "./output";

describe("Questão - Precos do Conjunto", () => {
  it("teste 1", () => {
    const x1 = 1;
    const x2 = 1;
    const x3 = 1;
    const x4 = 1;
    const y = solucao(x1, x2, x3, x4);
    const corresponde = comparar(y, precoConjuntoOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 1;
    const x2 = 1;
    const x3 = 1;
    const x4 = 10;
    const y = solucao(x1, x2, x3, x4);
    const corresponde = comparar(y, precoConjuntoOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 0.1;
    const x2 = 0.1;
    const x3 = 0.1;
    const x4 = 3;
    const y = solucao(x1, x2, x3, x4);
    const corresponde = comparar(y.toFixed(1), precoConjuntoOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = 150.25;
    const x2 = 130.8;
    const x3 = 190.78;
    const x4 = 8;
    const y = solucao(x1, x2, x3, x4);
    const corresponde = comparar(y.toFixed(2), precoConjuntoOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
