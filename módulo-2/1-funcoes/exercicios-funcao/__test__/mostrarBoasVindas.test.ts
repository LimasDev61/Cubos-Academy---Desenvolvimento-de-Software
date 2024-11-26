import solucao from "../src/exercicio-02/mostrarBoasVindas";

const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Questão - Boas-vindas", () => {
  it("teste 1", () => {
    const x1 = "Fulano";
    solucao(x1);
    expect(consoleLogSpy).toHaveBeenCalledWith(`BEM-VINDO, ${x1}`);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });
  it("teste 2", () => {
    const x1 = "Sicrano";
    solucao(x1);
    expect(consoleLogSpy).toHaveBeenCalledWith(`BEM-VINDO, ${x1}`);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  it("teste 3", () => {
    const x1 = "BELTRANO";
    solucao(x1);
    expect(consoleLogSpy).toHaveBeenCalledWith(`BEM-VINDO, ${x1}`);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });
});
