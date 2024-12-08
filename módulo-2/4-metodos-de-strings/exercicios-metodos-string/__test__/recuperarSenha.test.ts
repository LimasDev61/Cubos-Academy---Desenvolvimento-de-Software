import solucao from "../src/exercicio-03/recuperarSenha";
import comparar from "./comparar";
import { recuperarSenhaOutput } from "./output";

describe("Questão - Recuperar a Senha", () => {
  it("teste 1", () => {
    const x1 = "32012345678";
    const y = solucao(x1);
    const corresponde = comparar(y, recuperarSenhaOutput.output1);
    expect(corresponde).toBeTruthy();
  });

  it("teste 2", () => {
    const x1 = "32111111178";
    const y = solucao(x1);
    const corresponde = comparar(y, recuperarSenhaOutput.output2);
    expect(corresponde).toBeTruthy();
  });

  it("teste 3", () => {
    const x1 = "11111111111";
    const y = solucao(x1);
    const corresponde = comparar(y, recuperarSenhaOutput.output3);
    expect(corresponde).toBeTruthy();
  });

  it("teste 4", () => {
    const x1 = "11111111112";
    const y = solucao(x1);
    const corresponde = comparar(y, recuperarSenhaOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
