import solucao from "../src/exercicio-06/controleCaixa";
import comparar from "./comparar";
import { controleCaixaOutput } from "./output";

describe("Questão - Controle de Caixa", () => {
  it("teste 1", () => {
    const x1 = 100;
    const x2 = 1000;
    const x3 = 10;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, controleCaixaOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 80;
    const x2 = 160.01;
    const x3 = 2;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, controleCaixaOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 40;
    const x2 = 39.99;
    const x3 = 1;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, controleCaixaOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
