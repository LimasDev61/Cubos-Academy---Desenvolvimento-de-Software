import solucao from "../src/exercicio-03/numeroPromotores";
import comparar from "./comparar";
import { numeroPromotoresOutput } from "./output";

describe("Questão - Número de Promotores", () => {
  it("teste 1", () => {
    const x1 = [10];
    const y = solucao(x1);
    const corresponde = comparar(y, numeroPromotoresOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = [8];
    const y = solucao(x1);
    const corresponde = comparar(y, numeroPromotoresOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 1", () => {
    const x1 = [10, 9, 5, 4, 9, 8, 8, 8, 1, 10];
    const y = solucao(x1);
    const corresponde = comparar(y, numeroPromotoresOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
