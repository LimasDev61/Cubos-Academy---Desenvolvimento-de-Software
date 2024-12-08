import solucao from "../src/exercicio-01/emailValido";
import comparar from "./comparar";
import { emailValidoOutput } from "./output";

describe("Questão - E-mail válido", () => {
  it("teste 1", () => {
    const x1 = "gmail.com";
    const y = solucao(x1);
    const corresponde = comparar(y, emailValidoOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = "cubos@";
    const y = solucao(x1);
    const corresponde = comparar(y, emailValidoOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = "cubos@cubos.com";
    const y = solucao(x1);
    const corresponde = comparar(y, emailValidoOutput.output3);
    expect(corresponde).toBeTruthy();
  });
  it("teste 4", () => {
    const x1 = "cubos@@cubos.com";
    const y = solucao(x1);
    const corresponde = comparar(y, emailValidoOutput.output4);
    expect(corresponde).toBeTruthy();
  });
  it("teste 5", () => {
    const x1 = "cubos_gmail.com";
    const y = solucao(x1);
    const corresponde = comparar(y, emailValidoOutput.output5);
    expect(corresponde).toBeTruthy();
  });
});
