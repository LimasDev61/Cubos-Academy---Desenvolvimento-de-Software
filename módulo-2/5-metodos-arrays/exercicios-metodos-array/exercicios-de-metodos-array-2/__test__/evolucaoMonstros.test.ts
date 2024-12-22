import solucao from "../src/exercicio-04/evolucaoMonstros";
import { evolucaoMonstrosOutput } from "./output";

describe("Questão - Evolução de Monstros", () => {
  it("teste 1", () => {
    const x1 = [
      {
        nome: "Gárgula",
        forca: 40,
        agilidade: 15,
        experiencia: 1,
      },
      {
        nome: "Kratos",
        forca: 50,
        agilidade: 5,
        experiencia: 11,
      },
      {
        nome: "Saci",
        forca: 2,
        agilidade: 170,
        experiencia: 70,
      },
    ];
    const y = solucao(x1);
    expect(y).toEqual(evolucaoMonstrosOutput.output1);
  });

  it("teste 2", () => {
    const x1 = [
      {
        nome: "Kratos",
        forca: 50,
        agilidade: 5,
        experiencia: 0,
      },
    ];
    const y = solucao(x1);
    expect(y).toEqual(evolucaoMonstrosOutput.output2);
  });

  it("teste 3", () => {
    const x1 = [
      {
        nome: "Gárgula",
        forca: 40,
        agilidade: 15,
        experiencia: 45,
      },
      {
        nome: "Kratos",
        forca: 50,
        agilidade: 5,
        experiencia: 123,
      },
      {
        nome: "Saci",
        forca: 2,
        agilidade: 170,
        experiencia: 470,
      },
      {
        nome: "Dragão",
        forca: 2787,
        agilidade: 1780,
        experiencia: 4870,
      },
    ];
    const y = solucao(x1);
    expect(y).toEqual(evolucaoMonstrosOutput.output3);
  });
});
