import solucao from "../src/exercicio-03/verificarValidade";
import comparar from "./comparar";
import { verificarValidadeOutput } from "./output";

describe("Questão - Verificar Validade", () => {
  it("teste 1", () => {
    const x1 = 25;
    const x2 = [25];
    const y = solucao(x1, x2);
    const corresponde = comparar(y, verificarValidadeOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = 15;
    const x2 = [10, 5, 20, 15, 50, 1];
    const y = solucao(x1, x2);
    const corresponde = comparar(y, verificarValidadeOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 12;
    const x2 = [10, 5, 20, 15, 50, 1];
    const y = solucao(x1, x2);
    const corresponde = comparar(y, verificarValidadeOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
