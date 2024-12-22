import solucao from "../src/exercicio-04/maioresCampeoes";
import { maioresCampeoesOutput } from "./output";

describe("Questão - Maiores Campeões", () => {
  it("teste 1", () => {
    const x1 = [
      {
        nome: "Time 1",
        pais: "Brasil",
        quantidadeTitulos: 5,
      },
      {
        nome: "Time 2",
        pais: "Brasil",
        quantidadeTitulos: 3,
      },
      {
        nome: "Time 3",
        pais: "França",
        quantidadeTitulos: 1,
      },
      {
        nome: "Time 4",
        pais: "Espanha",
        quantidadeTitulos: 20,
      },
      {
        nome: "Time 5",
        pais: "Espanha",
        quantidadeTitulos: 3,
      },
      {
        nome: "Time 6",
        pais: "França",
        quantidadeTitulos: 0,
      },
      {
        nome: "Time 7",
        pais: "Espanha",
        quantidadeTitulos: 20,
      },
      {
        nome: "Time 8",
        pais: "Argentina",
        quantidadeTitulos: 1,
      },
      {
        nome: "Time 9",
        pais: "França",
        quantidadeTitulos: 9,
      },
    ];
    const x2 = "França";
    const y = solucao(x1, x2);
    expect(y).toEqual(maioresCampeoesOutput.output1);
  });

  it("teste 2", () => {
    const x1 = [
      {
        nome: "Time 1",
        pais: "Brasil",
        quantidadeTitulos: 5,
      },
      {
        nome: "Time 2",
        pais: "Brasil",
        quantidadeTitulos: 3,
      },
      {
        nome: "Time 3",
        pais: "França",
        quantidadeTitulos: 1,
      },
      {
        nome: "Time 4",
        pais: "Espanha",
        quantidadeTitulos: 20,
      },
      {
        nome: "Time 5",
        pais: "Espanha",
        quantidadeTitulos: 3,
      },
      {
        nome: "Time 6",
        pais: "França",
        quantidadeTitulos: 0,
      },
      {
        nome: "Time 7",
        pais: "Espanha",
        quantidadeTitulos: 20,
      },
      {
        nome: "Time 8",
        pais: "Argentina",
        quantidadeTitulos: 1,
      },
      {
        nome: "Time 9",
        pais: "França",
        quantidadeTitulos: 9,
      },
    ];
    const x2 = "Azerbaijão";
    const y = solucao(x1, x2);
    expect(y).toBe(maioresCampeoesOutput.output2);
  });

  it("teste 3", () => {
    const x1 = [
      {
        nome: "Time 9",
        pais: "França",
        quantidadeTitulos: 9,
      },
    ];
    const x2 = "França";
    const y = solucao(x1, x2);
    expect(y).toEqual(maioresCampeoesOutput.output3);
  });

  it("teste 4", () => {
    const x1 = [
      {
        nome: "Time 9",
        pais: "França",
        quantidadeTitulos: 9,
      },
    ];
    const x2 = "Brasil";
    const y = solucao(x1, x2);
    expect(y).toEqual(maioresCampeoesOutput.output4);
  });
});
