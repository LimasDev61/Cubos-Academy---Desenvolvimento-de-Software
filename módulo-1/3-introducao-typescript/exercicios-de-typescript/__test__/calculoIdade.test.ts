import solucao from "../src/exercicio-02/calculoIdade";
import comparar from "./comparar";
import { calculoIdadeOutput } from "./output";

describe("Questão - Cálculo Idade", () => {
  it("teste 1", () => {
    const x1 = 1993;
    const x2 = 2024;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, calculoIdadeOutput.output1);
    expect(corresponde).toBeTruthy();
    expect(y).toBe(31);
  });

  it("teste 2", () => {
    const x1 = 2000;
    const x2 = 2000;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, calculoIdadeOutput.output2);
    expect(corresponde).toBeTruthy();
    expect(y).toBe(0);
  });
});
