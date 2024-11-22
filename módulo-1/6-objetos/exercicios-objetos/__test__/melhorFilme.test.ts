import solucao from "../src/exercicio-04/melhorFilme";
import comparar from "./comparar";
import { melhorFilmeOutput } from "./output";

describe("Questão - Melhor Filme", () => {
  it("teste 1", () => {
    const x1 = { nome: "Filme 1", notas: [10, 9] };
    const x2 = { nome: "Filme 2", notas: [10, 9] };
    const y = solucao(x1, x2);
    const corresponde = comparar(y, melhorFilmeOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = { nome: "Filme 1", notas: [10.1, 9] };
    const x2 = { nome: "Filme 2", notas: [10, 9] };
    const y = solucao(x1, x2);
    const corresponde = comparar(y, melhorFilmeOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = { nome: "Filme 1", notas: [10.1, 9] };
    const x2 = { nome: "Filme 2", notas: [10.1, 9.1] };
    const y = solucao(x1, x2);
    const corresponde = comparar(y, melhorFilmeOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
