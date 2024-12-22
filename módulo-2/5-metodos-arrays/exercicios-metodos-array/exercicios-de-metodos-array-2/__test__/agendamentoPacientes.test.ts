import solucao from "../src/exercicio-03/agendamentoPacientes";
import comparar from "./comparar";
import { agendamentoPacientesOutput } from "./output";

describe("Questão - Agendamento de Pacientes", () => {
  it("teste 1", () => {
    const x1 = [
      "comida",
      "comida",
      "gerais",
      "produtos gerais",
      "bebida com alcool",
      "bebida sem alcool",
      "bebida sem alcool",
    ];
    const x2 = 17;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, agendamentoPacientesOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = [
      "comida",
      "comida",
      "gerais",
      "bebida com alcool",
      "bebida sem alcool",
      "bebida sem alcool",
      "produtos gerais",
    ];
    const x2 = 18;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, agendamentoPacientesOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = [
      "comida",
      "produtos gerais",
      "comida",
      "gerais",
      "bebida sem alcool",
      "bebida sem alcool",
    ];
    const x2 = 10;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, agendamentoPacientesOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = ["bebida com alcool"];
    const x2 = 10;
    const y = solucao(x1, x2);
    const corresponde = comparar(y, agendamentoPacientesOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
