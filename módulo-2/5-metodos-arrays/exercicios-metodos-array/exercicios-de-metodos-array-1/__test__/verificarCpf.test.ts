import solucao from "../src/exercicio-02/verificarCpf";
import comparar from "./comparar";
import { verificarCpfOutput } from "./output";

describe("Questão - Verificar CPF", () => {
  it("teste 1", () => {
    const x1 = [
      "731.686.190-86",
      "927.990.600-30",
      "879.929.560-10",
      "221.244.270-08",
      "942.093.460-80",
      "303.445.130-09",
    ];
    const x2 = "221.244.270-08";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, verificarCpfOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = [
      "731.686.190-86",
      "927.990.600-30",
      "879.929.560-10",
      "221.244.270-08",
      "942.093.460-80",
      "303.445.130-09",
    ];
    const x2 = "221.204.270-08";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, verificarCpfOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = ["303.445.130-09"];
    const x2 = "221.204.270-08";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, verificarCpfOutput.output3);
    expect(corresponde).toBeTruthy();
  });
  it("teste 4", () => {
    const x1 = ["303.445.130-09"];
    const x2 = "303.445.130-09";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, verificarCpfOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
