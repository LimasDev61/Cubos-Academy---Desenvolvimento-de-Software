import solucao from "../src/exercício-03/dadosDoPersonagem";
import comparar from "./comparar";
import { dadosDoPersonagemOutput } from "./output";

describe("Questão - Dados do Personagem", () => {
  it("teste 1", () => {
    const x1 = "Goku";
    const x2 = "curandeiro";
    const x3 = 4000;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, dadosDoPersonagemOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = "Naruto";
    const x2 = "GUERREIRO";
    const x3 = 0;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, dadosDoPersonagemOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = "Flavim do Pneu";
    const x2 = "ARqueiro";
    const x3 = 7000;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, dadosDoPersonagemOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
