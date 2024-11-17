const solucao = require("../src/exercicio-03/quantidadeCerca");
const comparar = require("./comparar");
const { quantidadeCercaOutput } = require("./output");

describe("Questão - Quantidade de cerca", () => {
  it("teste 1", () => {
    const x1 = 0.5;
    const x2 = 0.5;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, quantidadeCercaOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 0.1;
    const x2 = 0.1;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, quantidadeCercaOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 0.25;
    const x2 = 0.25;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, quantidadeCercaOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
