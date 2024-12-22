import solucao from "../src/exercicio-03/agendamentoPacientes";
import comparar from "./comparar";
import { agendamentoPacientesOutput } from "./output";

describe("Questão - Agendamento de Pacientes", () => {
  it("teste 1", () => {
    const x1 = ["Ana", "Beatriz", "Carol", "Daniel", "Eduardo"];
    const x2 = "Daniel";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, agendamentoPacientesOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = ["Ana", "Beatriz", "Carol", "Daniel", "Eduardo"];
    const x2 = "Danieu";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, agendamentoPacientesOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = ["Beatriz"];
    const x2 = "Beatriz";
    const y = solucao(x1, x2);
    const corresponde = comparar(y, agendamentoPacientesOutput.output3);
    expect(corresponde).toBeTruthy();
  });
});
