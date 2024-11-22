import solucao from "../src/exercicio-02/cardapio";
import comparar from "./comparar";
import { cardapioOutput } from "./output";

describe("Questão - Cardápio", () => {
  it("teste 1", () => {
    const x1 = {
      nome: "Arroz",
      valor: 15.5,
      quantidade: 10,
    };
    const y = solucao(x1);
    const corresponde = comparar(y, cardapioOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = {
      nome: "feijão",
      valor: 15.87,
      quantidade: 0,
    };
    const y = solucao(x1);
    const corresponde = comparar(y, cardapioOutput.output2);
    expect(corresponde).toBeTruthy();
  });
});
