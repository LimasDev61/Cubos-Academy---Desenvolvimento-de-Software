import solucao from "../src/exercicio-05/cpfValido";
import comparar from "./comparar";
import { cpfValidoOutput } from "./output";

describe("Questão - CPF Válido", () => {
  it("teste 1", () => {
    const x1 = "000000000-00";
    const y = solucao(x1);
    const corresponde = comparar(y, cpfValidoOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = "0000000000-00";
    const y = solucao(x1);
    const corresponde = comparar(y, cpfValidoOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = "000000000000";
    const y = solucao(x1);
    const corresponde = comparar(y, cpfValidoOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = "12345678-999";
    const y = solucao(x1);
    const corresponde = comparar(y, cpfValidoOutput.output4);
    expect(corresponde).toBeTruthy();
  });

  it("teste 5", () => {
    const x1 = "111111111-99";
    const y = solucao(x1);
    const corresponde = comparar(y, cpfValidoOutput.output5);
    expect(corresponde).toBeTruthy();
  });
});
