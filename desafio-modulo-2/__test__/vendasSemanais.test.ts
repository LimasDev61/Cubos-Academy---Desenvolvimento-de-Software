import solucao from "../src/exercicio-05/vendasSemanais";
import comparar from "./comparar";
import { vendasSemanaisOutput } from "./output";

describe("Questão - Vendas Semanais", () => {
  it("teste 1", () => {
    const x1 = [0, 0, 0, 0, 0, 0, 0];
    const y = solucao(x1);
    const corresponde = comparar(y, vendasSemanaisOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = [400, 0, 0, 0, 0, 0, 0];
    const y = solucao(x1);
    const corresponde = comparar(y, vendasSemanaisOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = [500, 500, 0, 0, 0, 0, 0];
    const y = solucao(x1);
    const corresponde = comparar(y, vendasSemanaisOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = [1000, 1000, 1000, 1000, 1000, 1000, 1000];
    const y = solucao(x1);
    const corresponde = comparar(y, vendasSemanaisOutput.output4);
    expect(corresponde).toBeTruthy();
  });

  it("teste 5", () => {
    const x1 = [1, 1, 1, 1, 1, 1, 1];
    const y = solucao(x1);
    const corresponde = comparar(y, vendasSemanaisOutput.output5);
    expect(corresponde).toBeTruthy();
  });
});
