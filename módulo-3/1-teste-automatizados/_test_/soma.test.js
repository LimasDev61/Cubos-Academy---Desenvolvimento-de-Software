const {soma} = require("../soma-jest-teste-require");
const comparar = require("./comparar")
const { somaOutput } = require("./output");

describe("Teste de soma com hash", () => {
  it("Valida que 1 + 2 é igual a 3 usando hash", () => {
    const a = 3;
    const b = 0;
    const resultado = soma(a, b);
    const corresponde = comparar(resultado, somaOutput.output);
    expect(corresponde).toBeTruthy();
  });
});
