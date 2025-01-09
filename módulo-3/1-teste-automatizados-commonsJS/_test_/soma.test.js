const {soma} = require("../soma-jest-teste-require");
const comparar = require("./comparar")
const { somaOutput } = require("./output");

describe("Teste de Soma", () => {
  it("Valida que 1 + 2 é igual a 3 usando hash", () => {
    const resultado = soma(1, 2);
    const corresponde = comparar(resultado, somaOutput.output);
    expect(corresponde).toBeTruthy();
  });

  it("Verifica o resultado incorreto da soma", () => {
    const resultado = soma(2, 2);
    const corresponde = comparar(resultado, somaOutput.output);
    expect(corresponde).toBeFalsy();
  });
});
