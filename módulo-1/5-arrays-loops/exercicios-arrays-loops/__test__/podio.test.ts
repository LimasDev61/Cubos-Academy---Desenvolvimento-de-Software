import solucao from "../src/exercicio-01/podio";
import comparar from "./comparar";
import { podioOutput } from "./output";

describe("Questão - Pódio", () => {
  it("teste 1", () => {
    const x1 = [
      "Pedro",
      "Joaquim",
      "Maria",
      "Antonio",
      "Joaquim",
      "Gabriel",
      "Rafael",
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, podioOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = ["Antonio", "Gabriel", "Rafael"];
    const y = solucao(x1);
    const corresponde = comparar(y, podioOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = ["X", "y", "Z"];
    const y = solucao(x1);
    const corresponde = comparar(y, podioOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
