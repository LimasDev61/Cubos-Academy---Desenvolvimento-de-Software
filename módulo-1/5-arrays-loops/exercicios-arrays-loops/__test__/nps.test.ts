import solucao from "../src/exercicio-08/nps";
import comparar from "./comparar";
import { calculoNps } from "./output";

describe("Questão - Cálculo do NPS", () => {
  it("teste 1", () => {
    const x1 = [9, 5, 6, 2, 0];
    const y = solucao(x1);
    const corresponde = comparar(y, calculoNps.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = [9];
    const y = solucao(x1);
    const corresponde = comparar(y, calculoNps.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = [6];
    const y = solucao(x1);
    const corresponde = comparar(y, calculoNps.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = [7];
    const y = solucao(x1);
    const corresponde = comparar(y, calculoNps.output4);
    expect(corresponde).toBeTruthy();
  });
});
