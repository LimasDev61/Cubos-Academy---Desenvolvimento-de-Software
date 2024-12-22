import solucao from "../src/exercicio-03/imoveis";
import comparar from "./comparar";
import { imoveisOutput } from "./output";

describe("Questão - Imóveis", () => {
  it("teste 1", () => {
    const x1: any[] = [];
    const y = solucao(x1);
    const corresponde = comparar(y, imoveisOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = [
      {
        titulo: "Apartamento Reformado",
        descricao: "Apartamento confortável e seguro",
        preco: 3000,
      },
      {
        titulo: "Casa Branca",
        descricao: "Casa com 3 quartos e 2 banheiros",
        preco: 1500.67,
      },
      {
        titulo: "Apartamento com piscina",
        descricao:
          "Apartamento confortável, com piscina, sauna e churrasqueira",
        preco: 5600,
      },
      {
        titulo: "Casa com 4 quartos",
        descricao: "A casa possui 4 quartos, 2 banheiros e uma sala de estar",
        preco: 2900,
      },
      {
        titulo: "Kitnet",
        descricao: "Kitnet aconchegante, com lareira e banheira privada",
        preco: 4325,
      },
    ];
    const y = solucao(x1);
    expect(y).toEqual(imoveisOutput.output2);
  });

  it("teste 3", () => {
    const x1 = [
      {
        titulo: "Casa Branca",
        descricao: "Casa com 3 quartos e 2 banheiros",
        preco: 1500.67,
      },
    ];
    const y = solucao(x1);
    expect(y).toEqual(imoveisOutput.output3);
  });

  it("teste 4", () => {
    const x1 = [
      {
        titulo: "Casa Branca",
        descricao: "Casa com 3 quartos e 2 banheiros",
        preco: 1500.67,
      },
      {
        titulo: "Apartamento",
        descricao: "Apartamento com 3 quartos e 2 banheiros",
        preco: 1500,
      },
    ];
    const y = solucao(x1);
    expect(y).toEqual(imoveisOutput.output4);
  });
});
