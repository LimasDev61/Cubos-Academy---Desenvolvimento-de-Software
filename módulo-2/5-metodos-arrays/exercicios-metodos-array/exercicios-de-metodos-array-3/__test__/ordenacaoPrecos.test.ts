import solucao from "../src/exercicio-01/ordenacaoPrecos";
import comparar from "./comparar";
import { ordenacaoPrecosOutput } from "./output";

describe("Questão - Ordenação de Preços", () => {
  it("teste 1", () => {
    const x1 = [3000, 13424, 1324, 298663, 98774, 3323, 1111];
    const x2 = "crescente";
    const y = solucao(x1, x2);
    const corresponde = comparar(
      JSON.stringify(y),
      ordenacaoPrecosOutput.output1
    );
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = [3000.99, 13424, 1324, 298663, 98774.665, 3323.5, 1111.01];
    const x2 = "decrescente";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, ordenacaoPrecosOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = [10000];
    const x2 = "decrescente";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, ordenacaoPrecosOutput.output3);
    expect(corresponde).toBeTruthy();
  });
  it("teste 4", () => {
    const x1 = [10000];
    const x2 = "crescente";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, ordenacaoPrecosOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
