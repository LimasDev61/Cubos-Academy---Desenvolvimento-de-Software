import solucao from "../src/exercicio-02/jogoCartaBatalha";
import comparar from "./comparar";
import { jogoCartaBatalhaOutput } from "./output";

describe("Questão - Jogo de Carta de Batalha", () => {
  it("teste 1", () => {
    const x1 = 200;
    const x2 = 200;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, jogoCartaBatalhaOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = 200.01;
    const x2 = 200;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, jogoCartaBatalhaOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = 199.99;
    const x2 = 200;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, jogoCartaBatalhaOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
