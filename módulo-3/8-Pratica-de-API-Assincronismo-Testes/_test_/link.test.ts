// TDD => Test Driven Development(Desenvolvimento Orientado a Testes)
// Conceito: Escrever os testes antes do código

import { expect, describe, it } from "@jest/globals";
import Link from "../src/modelos/link";

describe("Criacao de um link", () => {
    it("Deve criar um link", () => {
        const links = new Link("cubosacademy", "https://cubos.academy");

        expect(links).toHaveProperty("id", "cubosacademy");
        expect(links).toHaveProperty("url", "https://cubos.academy");
        expect(links).toHaveProperty("visitas", 0);
    })
})