import solucao from "../src/exercicio-02/mercadoCambio";
import comparar from "./comparar";
import { mercadoCambioOutput } from "./output";

describe("Questão - Mercado de Câmbio", () => {
  it("teste 1", () => {
    const x1 = 1;
    const x2 = 1;
    const x3 = 0;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, mercadoCambioOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 1;
    const x2 = 2;
    const x3 = 200;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, mercadoCambioOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 2;
    const x2 = 1;
    const x3 = 200;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, mercadoCambioOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = 5;
    const x2 = 10;
    const x3 = 1000;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, mercadoCambioOutput.output4);
    expect(corresponde).toBeTruthy();
  });

  it("teste 5", () => {
    const x1 = 10;
    const x2 = 5;
    const x3 = 1000;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, mercadoCambioOutput.output5);
    expect(corresponde).toBeTruthy();
  });
});
