import solucao from "../src/exercicio-02/piorLutador";
import comparar from "./comparar";
import { piorLutadorOutput } from "./output";

describe("Questão - Pior Lutador", () => {
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
    const corresponde = comparar(y, piorLutadorOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = ["Antonio", "Gabriel", "Chico"];
    const y = solucao(x1);
    const corresponde = comparar(y, piorLutadorOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = ["X", "y", "Z"];
    const y = solucao(x1);
    const corresponde = comparar(y, piorLutadorOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
