import solucao from "../src/exercicio-01/presaPredador";
import comparar from "./comparar";
import { pesaPredadorOutput } from "./output";

describe("Questão - Presa ou Predador", () => {
  it("teste 1", () => {
    const x1 = true;
    const y = solucao(x1);
    const corresponde = comparar(y, pesaPredadorOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = false;
    const y = solucao(x1);
    const corresponde = comparar(y, pesaPredadorOutput.output2);
    expect(corresponde).toBeTruthy();
  });
});
