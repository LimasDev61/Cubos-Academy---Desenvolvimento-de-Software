import solucao from "../src/exercicio-04/verificarPremiado";
import comparar from "./comparar";
import { verificarPremiadoOutput } from "./output";

describe("Questão - Sorteio", () => {
  it("teste 1", () => {
    const x1 = 25;
    const x2 = [
      { nome: "Ana", numeroCartela: 4 },
      { nome: "João", numeroCartela: 1 },
      { nome: "Guilherme", numeroCartela: 25 },
      { nome: "Pedro", numeroCartela: 3 },
      { nome: "Maria", numeroCartela: 2 },
      { nome: "Lucas", numeroCartela: 5 },
    ];
    const y = solucao(x1, x2);
    const y2 = y === undefined ? "undefined" : y;
    const corresponde = comparar(y2, verificarPremiadoOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = 1;
    const x2 = [
      { nome: "Ana", numeroCartela: 4 },
      { nome: "João", numeroCartela: 7 },
      { nome: "Guilherme", numeroCartela: 25 },
      { nome: "Pedro", numeroCartela: 3 },
      { nome: "Maria", numeroCartela: 2 },
      { nome: "Lucas", numeroCartela: 5 },
    ];
    const y = solucao(x1, x2);
    const y2 = y === undefined ? "undefined" : y;
    const corresponde = comparar(y2, verificarPremiadoOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = 1;
    const x2 = [{ nome: "Ariel Estevam", numeroCartela: 1 }];
    const y = solucao(x1, x2);
    const y2 = y === undefined ? "undefined" : y;
    const corresponde = comparar(y2, verificarPremiadoOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
