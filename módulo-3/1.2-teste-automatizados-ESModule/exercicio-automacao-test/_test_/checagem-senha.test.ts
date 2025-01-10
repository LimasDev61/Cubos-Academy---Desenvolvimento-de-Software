import senhaCheck from "../src/checagem-de-senha";

describe("Verificar senhas", () => {
    it("Senha Válida", () => {
        expect(senhaCheck("1234")).toBe("SENHA VÁLIDA");
        expect(senhaCheck("4321")).toBe("SENHA VÁLIDA");
        expect(senhaCheck("2345")).toBe("SENHA VÁLIDA");
    })

    it("Senha Inválida", () => {
        expect(senhaCheck("456e")).toBe("SENHA INVÁLIDA");
        expect(senhaCheck("12eE")).toBe("SENHA INVÁLIDA");
        expect(senhaCheck("aBcD")).toBe("SENHA INVÁLIDA");
    });

    it("Senhas Inválidas com menos que 4 caracteres", () => {
        expect(senhaCheck("234")).toBe("SENHA INVÁLIDA");
        expect(senhaCheck("432")).toBe("SENHA INVÁLIDA");
    })
})