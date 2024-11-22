import solucao from "../src/exercicio-01/aluno";

describe("Questão - Aluno", () => {
  it("teste 1", () => {
    const x1 = "2014A";
    const x2 = "Ana";
    const x3 = 12;
    const y = solucao(x1, x2, x3);
    expect(y).toEqual({ matricula: x1, nome: x2, idade: x3 });
  });

  it("teste 2", () => {
    const x1 = "2030A";
    const x2 = "Ana Clara";
    const x3 = 40;
    const y = solucao(x1, x2, x3);
    expect(y).toEqual({ matricula: x1, nome: x2, idade: x3 });
  });
});
