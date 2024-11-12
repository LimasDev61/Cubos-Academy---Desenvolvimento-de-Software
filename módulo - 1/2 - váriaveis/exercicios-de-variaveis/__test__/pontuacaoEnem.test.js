const solucao = require("../src/exercicio-01/pontuacaoEnem");
const comparar = require("./comparar");
const { pontuacaoEnemOutput } = require("./output");

describe("Questão - Pontuação do Enem", () => {
  it("teste 1", () => {
    const x1 = 0;
    const x2 = 0;
    const x3 = 0;
    const x4 = 0;
    const y = solucao(x1, x2, x3, x4);
    const corresponde = comparar(y, pontuacaoEnemOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 100;
    const x2 = 0;
    const x3 = 0;
    const x4 = 0;
    const y = solucao(x1, x2, x3, x4);
    const corresponde = comparar(y, pontuacaoEnemOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 0;
    const x2 = 150;
    const x3 = 0;
    const x4 = 0;
    const y = solucao(x1, x2, x3, x4);
    const corresponde = comparar(y, pontuacaoEnemOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = 0;
    const x2 = 0;
    const x3 = 200;
    const x4 = 0;
    const y = solucao(x1, x2, x3, x4);
    const corresponde = comparar(y, pontuacaoEnemOutput.output4);
    expect(corresponde).toBeTruthy();
  });

  it("teste 5", () => {
    const x1 = 0;
    const x2 = 0;
    const x3 = 0;
    const x4 = 250;
    const y = solucao(x1, x2, x3, x4);
    const corresponde = comparar(y, pontuacaoEnemOutput.output5);
    expect(corresponde).toBeTruthy();
  });

  it("teste 6", () => {
    const x1 = 100;
    const x2 = 150;
    const x3 = 300;
    const x4 = 500;
    const y = solucao(x1, x2, x3, x4);
    const corresponde = comparar(y, pontuacaoEnemOutput.output6);
    expect(corresponde).toBeTruthy();
  });
});
