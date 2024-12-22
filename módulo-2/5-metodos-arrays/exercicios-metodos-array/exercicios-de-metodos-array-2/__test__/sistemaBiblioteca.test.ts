import solucao from "../src/exercicio-01/sistemaBiblioteca";
import comparar from "./comparar";
import { sistemaBibliotecaOutput } from "./output";

describe("Questão - Sistema para Biblioteca", () => {
  it("teste 1", () => {
    const x1 = ["Harry Potter"];
    const x2 = "Batman";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, sistemaBibliotecaOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1: string[] = [];
    const x2 = "Harry Potter";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, sistemaBibliotecaOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1: string[] = [
      "As Branquelas",
      "Lagoa Azul",
      "Mágico de Oz",
      "Matilda",
      "O Resgate do Soldado Ryan",
    ];
    const x2 = "Matilda";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, sistemaBibliotecaOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1: string[] = [
      "As Branquelas",
      "Matilda",
      "O Resgate do Soldado Ryan",
    ];
    const x2 = "Matilda";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, sistemaBibliotecaOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
