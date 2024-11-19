import solucao from "../src/exercicio-05/sinucaBrasileira";
import comparar from "./comparar";
import { sinucaBrasileiraOutput } from "./output";

describe("Questão - Sinuca Brasileira", () => {
  it("teste 1", () => {
    const x1 = [1, 4, 5, 8, 15, 14];
    const y = solucao(x1);
    const corresponde = comparar(y, sinucaBrasileiraOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = [1, 8, 9, 10, 15, 14, 3];
    const y = solucao(x1);
    const corresponde = comparar(y, sinucaBrasileiraOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = [1, 8, 9, 10, 15, 14, 4];
    const y = solucao(x1);
    const corresponde = comparar(y, sinucaBrasileiraOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = [1, 8, 9, 10, 15, 14, 2];
    const y = solucao(x1);
    const corresponde = comparar(y, sinucaBrasileiraOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
