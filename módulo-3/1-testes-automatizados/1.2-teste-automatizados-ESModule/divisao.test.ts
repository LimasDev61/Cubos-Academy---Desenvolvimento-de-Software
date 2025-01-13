import divi from "./divisao";

describe("Teste de multiplicação", () => {
    it("Deve verificar o resultado da multiplicação", () => {
        expect(divi(10, 2)).toBeCloseTo(5);
    })

    it("Deve verificar o resultado incorreto de uma multiplicação", () => {
        expect(divi(0, 5)).not.toBeCloseTo(1);
    })
})