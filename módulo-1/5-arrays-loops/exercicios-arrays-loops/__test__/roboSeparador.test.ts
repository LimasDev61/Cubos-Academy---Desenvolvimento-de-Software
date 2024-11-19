import solucao from "../src/exercicio-04/roboSeparador";
import comparar from "./comparar";
import { roboSeparadorOutput } from "./output";

describe("Questão - Robô Separador de Frutas", () => {
  it("teste 1", () => {
    const x1 = "BANANA";
    const x2 = [
      "UVA",
      "ACEROLA",
      "MANGA",
      "PERA",
      "CAJU",
      "CAJU",
      "BANANA",
      "UVA",
      "LARANJA",
      "MARACUJA",
      "MELANCIA",
    ];
    const y = solucao(x1, x2);
    const corresponde = comparar(y, roboSeparadorOutput.output1);
    expect(corresponde).toBeTruthy();
  });
  it("teste 2", () => {
    const x1 = "CAJU";
    const x2 = [
      "UVA",
      "ACEROLA",
      "MANGA",
      "PERA",
      "CAJU",
      "CAJU",
      "BANANA",
      "UVA",
      "LARANJA",
      "MARACUJA",
      "MELANCIA",
    ];
    const y = solucao(x1, x2);
    const corresponde = comparar(y, roboSeparadorOutput.output2);
    expect(corresponde).toBeTruthy();
  });
  it("teste 3", () => {
    const x1 = "JAMELAO";
    const x2 = [
      "UVA",
      "ACEROLA",
      "MANGA",
      "PERA",
      "CAJU",
      "CAJU",
      "BANANA",
      "UVA",
      "LARANJA",
      "MARACUJA",
      "MELANCIA",
    ];
    const y = solucao(x1, x2);
    const corresponde = comparar(y, roboSeparadorOutput.output3);
    expect(corresponde).toBeTruthy();
  });
  it("teste 4", () => {
    const x1 = "UVA";
    const x2 = ["UVA", "UVA", "UVA", "UVA", "UVA", "UVA", "UVA", "UVA"];
    const y = solucao(x1, x2);
    const corresponde = comparar(y, roboSeparadorOutput.output4);
    expect(corresponde).toBeTruthy();
  });
});
