import subtra from "./subtracao";

describe("Teste de subtracao", () => {
  it("Deve verificar a subtracao", () => {
    expect(subtra(6, 2)).toBe(4);
    expect(subtra(6.7, 2.5)).toBeCloseTo(4.2);
  });

  it("deve verificar o resultado incorreto de uma subtração", () => {
    expect(subtra(4, 8)).not.toBeCloseTo(10);
  });
});
