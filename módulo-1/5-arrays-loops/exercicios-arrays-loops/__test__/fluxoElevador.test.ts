import solucao from "../src/exercicio-06/fluxoElevador";
import comparar from "./comparar";
import { fluxoElevadorOutput } from "./output";

describe("Questão - Fluxo de Elevador", () => {
  it("teste 1", () => {
    const x1 = ["A1", "A2", "E", "A1", "A2", "A2", "A1", "A1"];
    const y = solucao(x1);
    const corresponde = comparar(y, fluxoElevadorOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = ["E", "E", "E", "E", "E", "E", "E", "E"];
    const y = solucao(x1);
    const corresponde = comparar(y, fluxoElevadorOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = ["E", "E", "E", "E", "E", "E", "E", "A2"];
    const y = solucao(x1);
    const corresponde = comparar(y, fluxoElevadorOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = ["A1"];
    const y = solucao(x1);
    const corresponde = comparar(y, fluxoElevadorOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
