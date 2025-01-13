import calcularResultadoVenda from "../src/resultado-de-venda";

describe("calcularResultadoVenda", () => {
  it("Deve calcular lucro corretamente", () => {
    expect(calcularResultadoVenda(300, 340)).toBe("O valor do lucro é: 40");
    expect(calcularResultadoVenda(150, 300)).toBe("O valor do lucro é: 150");
    expect(calcularResultadoVenda(200.5, 250)).toBe("O valor do lucro é: 49.5");
  });

  it("Deve calcular prejuízo corretamente", () => {
    expect(calcularResultadoVenda(340, 300)).toBe("O valor do prejuízo é: 40");
    expect(calcularResultadoVenda(500, 450)).toBe("O valor do prejuízo é: 50");
    expect(calcularResultadoVenda(400.75, 200)).toBe(
      "O valor do prejuízo é: 200.75"
    );
  });

  it("Deve indicar venda a preço de custo", () => {
    expect(calcularResultadoVenda(300, 300)).toBe("Venda a preço de custo");
    expect(calcularResultadoVenda(150.5, 150.5)).toBe("Venda a preço de custo");
  });
});
