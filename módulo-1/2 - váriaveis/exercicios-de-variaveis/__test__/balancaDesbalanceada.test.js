const solucao = require("../src/exercicio-02/balancaDesbalanceada");
const comparar = require("./comparar");
const { balancaDesbalanceadaOutput } = require("./output");

describe("Questão - Balança Desbalanceada", () => {
  it("teste 1", () => {
    const x1 = 0;
    const y = solucao(x1);
    const corresponde = comparar(y, balancaDesbalanceadaOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 200;
    const y = solucao(x1);
    const corresponde = comparar(y, balancaDesbalanceadaOutput.output2);
    expect(corresponde).toBeTruthy();
  });
});
