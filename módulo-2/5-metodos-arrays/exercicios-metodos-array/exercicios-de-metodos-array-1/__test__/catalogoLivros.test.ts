import solucao from "../src/exercicio-01/catalogoLivros";
import comparar from "./comparar";
import { catalogoLivrosOutput } from "./output";

describe("Questão - Catálogo de Livros", () => {
  it("teste 1", () => {
    const x1 = ["Harry Potter"];
    const y = solucao(x1);
    const corresponde = comparar(y, catalogoLivrosOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1: any[] = [];
    const y = solucao(x1);
    const corresponde = comparar(y, catalogoLivrosOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = ["Gente Grande", "Gente Grande 2"];
    const y = solucao(x1);
    const corresponde = comparar(y, catalogoLivrosOutput.output3);
    expect(corresponde).toBeTruthy();
  });
  it("teste 4", () => {
    const x1 = [
      "Gente Grande",
      "Gente Grande 2",
      "Percy Jackson",
      "Crepúsculo",
      "O Senhor dos Anéis",
      "Harry Potter",
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, catalogoLivrosOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
