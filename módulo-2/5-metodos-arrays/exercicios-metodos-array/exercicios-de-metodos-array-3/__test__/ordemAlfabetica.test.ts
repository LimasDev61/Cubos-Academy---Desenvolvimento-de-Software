import solucao from "../src/exercicio-02/ordemAlfabetica";
import comparar from "./comparar";
import { ordemAlfabeticaOutput } from "./output";

describe("Questão - Ordem Alfabética", () => {
  it("teste 1", () => {
    const x1 = ["Lucas", "Camila", "Taís", "Carla", "Ana"];
    const x2 = true;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, ordemAlfabeticaOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = ["Lucas", "Camila", "Taís", "Carla", "Ana"];
    const x2 = false;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, ordemAlfabeticaOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = ["Lucas"];
    const x2 = false;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, ordemAlfabeticaOutput.output3);
    expect(corresponde).toBeTruthy();
  });
  it("teste 4", () => {
    const x1 = ["Lucas"];
    const x2 = true;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, ordemAlfabeticaOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
