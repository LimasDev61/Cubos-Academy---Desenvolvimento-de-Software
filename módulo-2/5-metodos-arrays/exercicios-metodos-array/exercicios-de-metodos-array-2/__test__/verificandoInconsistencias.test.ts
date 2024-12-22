import solucao from "../src/exercicio-02/verificandoInconsistencias";
import comparar from "./comparar";
import { verificandoInconsistenciasOutput } from "./output";

describe("Questão - Verificando Inconsistências", () => {
  it("teste 1", () => {
    const x1 = [
      "73168619086",
      "92799060030",
      "87992956010",
      "22124427000",
      "94209346080",
      "30344513009",
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, verificandoInconsistenciasOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = [
      "73168619086",
      "92799060030",
      "87992956010",
      "22124427000",
      "94209346080",
      "303445130",
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, verificandoInconsistenciasOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = [
      "73168619086",
      "92799060030",
      "87992910",
      "22124427000",
      "94209346080",
      "303445130",
    ];
    const y = solucao(x1);
    const corresponde = comparar(y, verificandoInconsistenciasOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = ["94209346080"];
    const y = solucao(x1);
    const corresponde = comparar(y, verificandoInconsistenciasOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
