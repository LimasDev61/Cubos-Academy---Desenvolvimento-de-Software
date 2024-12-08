import solucao from "../src/exercicio-04/numeroValido";
import comparar from "./comparar";
import { numeroValidoOutput } from "./output";

describe("Questão - Número Válido", () => {
  it("teste 1", () => {
    const x1 = "Rua Cidade de Alma, 24a, Cidade de Almeirim, AL";
    const y = solucao(x1);
    const corresponde = comparar(y, numeroValidoOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = "Rua Cidade, 24, Cidade de Almeirim, AL";
    const y = solucao(x1);
    const corresponde = comparar(y, numeroValidoOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = "Rua Cassandra, 00-, Cidade de Almeirim, MG";
    const y = solucao(x1);
    const corresponde = comparar(y, numeroValidoOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = "Rua Cidade de Alma, 0, Cidade de Almeirim, BA";
    const y = solucao(x1);
    const corresponde = comparar(y, numeroValidoOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
