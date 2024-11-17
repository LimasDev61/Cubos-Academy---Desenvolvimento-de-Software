import solucao from "../src/exercicio-08/placarVolei";
import comparar from "./comparar";
import { placarVoleiOutput } from "./output";

describe("Questão - Placar Vôlei", () => {
  it("teste 1", () => {
    const x1 = 30;
    const x2 = 30;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, placarVoleiOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = 26;
    const x2 = 25;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, placarVoleiOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = 25;
    const x2 = 26;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, placarVoleiOutput.output3);
    expect(corresponde).toBeTruthy();
  });
  it("teste 4", () => {
    const x1 = 25;
    const x2 = 23;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, placarVoleiOutput.output4);
    expect(corresponde).toBeTruthy();
  });
  it("teste 5", () => {
    const x1 = 23;
    const x2 = 25;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, placarVoleiOutput.output5);
    expect(corresponde).toBeTruthy();
  });
  it("teste 6", () => {
    const x1 = 24;
    const x2 = 0;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, placarVoleiOutput.output6);
    expect(corresponde).toBeTruthy();
  });
  it("teste 7", () => {
    const x1 = 0;
    const x2 = 24;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, placarVoleiOutput.output7);
    expect(corresponde).toBeTruthy();
  });
});
