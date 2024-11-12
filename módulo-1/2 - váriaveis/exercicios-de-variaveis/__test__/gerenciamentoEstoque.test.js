const solucao = require("../src/exercicio-05/gerenciamentoEstoque");
const comparar = require("./comparar");
const { gerenciamentoEstoqueOutput } = require("./output");

describe("Questão - Gerenciamento de estoque", () => {
  it("teste 1", () => {
    const x1 = 40;
    const y = solucao(x1);
    const corresponde = comparar(y, gerenciamentoEstoqueOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = 39.99;
    const y = solucao(x1);
    const corresponde = comparar(y, gerenciamentoEstoqueOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = 50;
    const y = solucao(x1);
    const corresponde = comparar(y, gerenciamentoEstoqueOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
