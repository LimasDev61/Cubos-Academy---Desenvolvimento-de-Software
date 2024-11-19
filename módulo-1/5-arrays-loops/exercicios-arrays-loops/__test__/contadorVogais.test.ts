import solucao from "../src/exercicio-07/contadorVogais";
import comparar from "./comparar";
import { contadorVogaisOutput } from "./output";

describe("Questão - Contador de Vogais", () => {
  it("teste 1", () => {
    const x1 = "mmnfmtppwlksddo";
    const y = solucao(x1);
    const corresponde = comparar(y, contadorVogaisOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = "mmnfmtppwlksddwq";
    const y = solucao(x1);
    const corresponde = comparar(y, contadorVogaisOutput.output2);
    expect(corresponde).toBeTruthy();
  });
});
