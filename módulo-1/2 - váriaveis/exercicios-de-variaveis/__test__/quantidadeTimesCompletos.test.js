const solucao = require("../src/exercicio-06/quantidadeTimesCompletos");
const comparar = require("./comparar");
const { quantidadeTimesCompletosOutput } = require("./output");

describe("Questão - Quantidade de times completos", () => {
  it("teste 1", () => {
    const x1 = 23;
    const x2 = 5;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, quantidadeTimesCompletosOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 80;
    const x2 = 5;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, quantidadeTimesCompletosOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 6;
    const x2 = 5;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, quantidadeTimesCompletosOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
