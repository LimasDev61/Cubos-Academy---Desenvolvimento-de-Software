import solucao from "../src/exercicio-04/bonusFase";
import comparar from "./comparar";
import { bonusFaseOutput } from "./output";

describe("Questão - Bonus por Fase", () => {
  it("teste 1", () => {
    const x1 = 0;
    const x2 = 5;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, bonusFaseOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 1;
    const x2 = 2;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, bonusFaseOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 100;
    const x2 = 5;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, bonusFaseOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
