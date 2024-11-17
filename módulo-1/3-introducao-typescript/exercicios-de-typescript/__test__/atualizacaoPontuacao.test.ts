import solucao from "../src/exercicio-01/atualizacaoPontuacao";
import comparar from "./comparar";
import { atualizacaoPontuacaoOutput } from "./output";

describe("Questão - Atualização da Pontuação", () => {
  it("teste 1", () => {
    const x1 = 10;
    const x2 = 5;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, atualizacaoPontuacaoOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 400;
    const x2 = 0;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, atualizacaoPontuacaoOutput.output2);
    expect(corresponde).toBeTruthy();
  });
});
