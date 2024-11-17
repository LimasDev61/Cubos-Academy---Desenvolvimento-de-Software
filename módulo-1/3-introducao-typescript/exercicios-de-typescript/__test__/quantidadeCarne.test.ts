import solucao from "../src/exercicio-06/quantidadeCarne";
import comparar from "./comparar";
import { quantidadeCarneOutput } from "./output";

describe("Questão - Quantidade de Carne", () => {
  it("teste 1", () => {
    const x1 = 0;
    const x2 = 0;
    const x3 = 0;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, quantidadeCarneOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 0;
    const x2 = 0;
    const x3 = 1;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, quantidadeCarneOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 1;
    const x2 = 0;
    const x3 = 1;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, quantidadeCarneOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = 1;
    const x2 = 1;
    const x3 = 2;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, quantidadeCarneOutput.output4);
    expect(corresponde).toBeTruthy();
  });

  it("teste 5", () => {
    const x1 = 10;
    const x2 = 10;
    const x3 = 30;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, quantidadeCarneOutput.output5);
    expect(corresponde).toBeTruthy();
  });
});
