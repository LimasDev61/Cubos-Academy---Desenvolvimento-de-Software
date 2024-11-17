import solucao from "../src/exercicio-07/aprovacaoRigorosa";
import comparar from "./comparar";
import { aprovacaoRigorosaOutput } from "./output";

//   Ter uma média mínima de 60 pontos, frequência mínima de 75% e
// não ter zerado o projeto final ou
// Apesar de não ter obtido média mínima de 60, o aluno deve ter uma
// frequência mínima de 75% e ter obtido uma nota no projeto final de no mínimo 85 pontos.
//   - `APROVADO`: caso o aluno tenha sido aprovado
// - `REPROVADO`: caso o aluno tenha sido reprovado

describe("Questão - Aprovação Rigorosa", () => {
  it("teste 1", () => {
    const x1 = 60;
    const x2 = 75;
    const x3 = 0.1;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, aprovacaoRigorosaOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = 60;
    const x2 = 75;
    const x3 = 0;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, aprovacaoRigorosaOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = 59.9;
    const x2 = 75;
    const x3 = 85;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, aprovacaoRigorosaOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = 59.9;
    const x2 = 75;
    const x3 = 84.0;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, aprovacaoRigorosaOutput.output4);
    expect(corresponde).toBeTruthy();
  });

  it("teste 5", () => {
    const x1 = 100;
    const x2 = 74.9;
    const x3 = 100;
    const y = solucao(x1, x2, x3);
    const corresponde = comparar(y, aprovacaoRigorosaOutput.output5);
    expect(corresponde).toBeTruthy();
  });
});
