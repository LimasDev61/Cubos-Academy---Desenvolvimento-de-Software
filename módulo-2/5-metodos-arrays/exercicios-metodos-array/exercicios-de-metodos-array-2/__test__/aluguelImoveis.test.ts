import solucao from "../src/exercicio-05/aluguelImoveis";
import { aluguelImoveisOutput } from "./output";

describe("Questão - Aluguel de Imóveis", () => {
  it("teste 1", () => {
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
    const x2 = 1000;
    const y = solucao(x1, x2);
    expect(y).toEqual(aluguelImoveisOutput.output1);
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
    const x2 = 1500.66;
    const y = solucao(x1, x2);
    expect(y).toEqual(aluguelImoveisOutput.output2);
  });

  it("teste 3", () => {
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
    const x2 = 1500.67;
    const y = solucao(x1, x2);
    expect(y).toEqual(aluguelImoveisOutput.output3);
  });

  it("teste 4", () => {
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
    const x2 = 5600;
    const y = solucao(x1, x2);
    expect(y).toEqual(aluguelImoveisOutput.output4);
  });
});
