const solucao = require("../src/exercicio-04/descontoCompra");
const comparar = require("./comparar");
const { descontoCompraOutput } = require("./output");

describe("Questão - Desconto de uma compra", () => {
  it("teste 1", () => {
    const x1 = 10;
    const x2 = 0;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, descontoCompraOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = 10;
    const x2 = 100;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, descontoCompraOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = 10;
    const x2 = 10;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, descontoCompraOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
