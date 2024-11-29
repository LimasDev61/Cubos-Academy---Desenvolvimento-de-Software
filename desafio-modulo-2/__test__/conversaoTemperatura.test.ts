import solucao from "../src/exercicio-01/conversaoTemperatura";
import comparar from "./comparar";
import { conversaoTemperaturaOutput } from "./output";

describe("Questão - Conversão de Temperatura", () => {
  it("teste 1", () => {
    const x1 = 0;
    const y = solucao(x1);
    const corresponde = comparar(
      JSON.stringify(y),
      conversaoTemperaturaOutput.output1
    );
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = -273;
    const y = solucao(x1);
    const corresponde = comparar(
      JSON.stringify(y),
      conversaoTemperaturaOutput.output2
    );
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = -1;
    const y = solucao(x1);
    const corresponde = comparar(
      JSON.stringify(y),
      conversaoTemperaturaOutput.output3
    );
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = 1;
    const y = solucao(x1);
    const corresponde = comparar(
      JSON.stringify(y),
      conversaoTemperaturaOutput.output4
    );
    expect(corresponde).toBeTruthy();
  });
});
