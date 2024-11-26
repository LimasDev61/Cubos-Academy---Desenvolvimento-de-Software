import solucao from "../src/exercicio-01/novoSaldo";
import comparar from "./comparar";
import { novoSaldoOutput } from "./output";

describe("Questão - Novo Saldo", () => {
  it("teste 1", () => {
    const x1 = 40;
    const x2 = -40;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, novoSaldoOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 40;
    const x2 = -41;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, novoSaldoOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 0;
    const x2 = 1;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, novoSaldoOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
