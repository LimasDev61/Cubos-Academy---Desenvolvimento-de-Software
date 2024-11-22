import solucao from "../src/exercicio-03/aprovacao";
import comparar from "./comparar";
import { aprovacaoOutput } from "./output";

describe("Questão - Aprovação", () => {
  it("teste 1", () => {
    const x1 = { matricula: "2023B", nome: "Camila", media: 6 };
    const y = solucao(x1);
    const corresponde = comparar(y, aprovacaoOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = { matricula: "2023B", nome: "Camila", media: 7 };
    const y = solucao(x1);
    const corresponde = comparar(y, aprovacaoOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = { matricula: "2023B", nome: "Camila", media: 5.9 };
    const y = solucao(x1);
    const corresponde = comparar(y, aprovacaoOutput.output3);
    expect(corresponde).toBeTruthy();
  });
  it("teste 4", () => {
    const x1 = { matricula: "2023B", nome: "Camila", media: 0 };
    const y = solucao(x1);
    const corresponde = comparar(y, aprovacaoOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
