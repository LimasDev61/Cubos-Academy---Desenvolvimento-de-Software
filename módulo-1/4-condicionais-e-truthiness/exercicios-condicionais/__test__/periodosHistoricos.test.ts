import solucao from "../src/exercicio-03/periodosHistoricos";
import comparar from "./comparar";
import { periodosHistoricosOutput } from "./output";

describe("Questão - Períodos Históricos", () => {
  it("teste 1", () => {
    const x1 = -3000;
    const y = solucao(x1);
    const corresponde = comparar(y, periodosHistoricosOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = 476;
    const y = solucao(x1);
    const corresponde = comparar(y, periodosHistoricosOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = 477;
    const y = solucao(x1);
    const corresponde = comparar(y, periodosHistoricosOutput.output3);
    expect(corresponde).toBeTruthy();
  });
  it("teste 4", () => {
    const x1 = 1453;
    const y = solucao(x1);
    const corresponde = comparar(y, periodosHistoricosOutput.output4);
    expect(corresponde).toBeTruthy();
  });
  it("teste 5", () => {
    const x1 = 1454;
    const y = solucao(x1);
    const corresponde = comparar(y, periodosHistoricosOutput.output5);
    expect(corresponde).toBeTruthy();
  });
  it("teste 6", () => {
    const x1 = 1789;
    const y = solucao(x1);
    const corresponde = comparar(y, periodosHistoricosOutput.output6);
    expect(corresponde).toBeTruthy();
  });
  it("teste 7", () => {
    const x1 = 1790;
    const y = solucao(x1);
    const corresponde = comparar(y, periodosHistoricosOutput.output7);
    expect(corresponde).toBeTruthy();
  });
});
