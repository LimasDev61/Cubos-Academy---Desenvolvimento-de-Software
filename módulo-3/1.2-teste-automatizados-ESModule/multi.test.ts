import mult from "./multiplicacao";

describe("Teste de multiplicação", () => {
    it("Deve verificar o resultado da multiplicação", () => {
        expect(mult(2, 5)).toBeCloseTo(10);
    })

    it("Deve verificar o resultado incorreto de uma multiplicação", () => {
        expect(mult(2, 5)).not.toBeCloseTo(11);
    })
})