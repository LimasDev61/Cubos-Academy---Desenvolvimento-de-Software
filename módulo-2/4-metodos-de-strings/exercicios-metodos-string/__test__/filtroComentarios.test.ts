import solucao from "../src/exercicio-02/filtroComentarios";
import comparar from "./comparar";
import { filtroComentarioOutput } from "./output";

describe("Questão - Filtro de Comentários", () => {
  it("teste 1", () => {
    const x1 = "CoViD";
    const y = solucao(x1);
    const corresponde = comparar(y, filtroComentarioOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = "PanDEMIa";
    const y = solucao(x1);
    const corresponde = comparar(y, filtroComentarioOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = "PAN DEMIA";
    const y = solucao(x1);
    const corresponde = comparar(y, filtroComentarioOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = "Co ViD";
    const y = solucao(x1);
    const corresponde = comparar(y, filtroComentarioOutput.output4);
    expect(corresponde).toBeTruthy();
  });

  it("teste 5", () => {
    const x1 = "  O comenTARIO POSSUI CodID e PANDEMIa  ";
    const y = solucao(x1);
    const corresponde = comparar(y, filtroComentarioOutput.output5);
    expect(corresponde).toBeTruthy();
  });

  it("teste 6", () => {
    const x1 = "  O comenTARIO POSSUI C odID e P ANDEMIa  ";
    const y = solucao(x1);
    const corresponde = comparar(y, filtroComentarioOutput.output6);
    expect(corresponde).toBeTruthy();
  });
});
