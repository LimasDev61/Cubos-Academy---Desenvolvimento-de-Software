import solucao from "../src/exercicio-06/menorPreco";
import comparar from "./comparar";
import { menorPrecoOutput } from "./output";

describe("Questão - Menor Preço", () => {
  it("teste 1", () => {
    const x1 = [
      { loja: "Loja 1", preco: 14.8 },
      { loja: "Loja 2", preco: 14.7 },
      { loja: "Loja 3", preco: 20 },
      { loja: "Loja 4", preco: 14.9 },
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, menorPrecoOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = [
      { loja: "Loja 1", preco: 13.8 },
      { loja: "Loja 2", preco: 14.7 },
      { loja: "Loja 3", preco: 20 },
      { loja: "Loja 4", preco: 14.9 },
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, menorPrecoOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = [
      { loja: "Loja 1", preco: 30 },
      { loja: "Loja 2", preco: 40 },
      { loja: "Loja 3", preco: 20 },
      { loja: "Loja 4", preco: 20.1 },
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, menorPrecoOutput.output3);
    expect(corresponde).toBeTruthy();
  });
  it("teste 1", () => {
    const x1 = [
      { loja: "Loja 1", preco: 142.8 },
      { loja: "Loja 2", preco: 15.7 },
      { loja: "Loja 3", preco: 98 },
      { loja: "Loja 4", preco: 5 },
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, menorPrecoOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
