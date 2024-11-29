import solucao from "../src/exercicio-07/entregaAtraso";
import comparar from "./comparar";
import { entregaAtrasoOutput } from "./output";

describe("Questão - Entrega em Atraso", () => {
  it("teste 1", () => {
    const x1 = {
      pedido: "TV LED 24 polegadas",
      quantidade: 2,
      estimativaEntrega: 7,
    };
    const x2 = 8;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, entregaAtrasoOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = {
      pedido: "Playstation 5",
      quantidade: 1,
      estimativaEntrega: 1,
    };
    const x2 = 1;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, entregaAtrasoOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = {
      pedido: "Cadeira Gamer",
      quantidade: 100,
      estimativaEntrega: 5,
    };
    const x2 = 4;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, entregaAtrasoOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = {
      pedido: "Monitor",
      quantidade: 9,
      estimativaEntrega: 31,
    };
    const x2 = 31;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, entregaAtrasoOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
