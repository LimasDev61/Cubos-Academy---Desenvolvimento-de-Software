const solucao = require("../src/exercicio-07/quantidadeTinta");
const comparar = require("./comparar");
const { quantidadeTintaOutput } = require("./output");

describe("Questão - Quantidade de tinta", () => {
  it("teste 1", () => {
    const x1 = 1;
    const x2 = 1;
    const x3 = 1;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, quantidadeTintaOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = 1;
    const x2 = 1;
    const x3 = 10;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, quantidadeTintaOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = 2;
    const x2 = 4;
    const x3 = 0.5;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, quantidadeTintaOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
