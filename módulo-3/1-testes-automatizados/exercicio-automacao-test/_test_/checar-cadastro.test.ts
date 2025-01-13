import cadastro from "../src/validar-envio-cadastro";

describe("Validação de usuário", () => {
  it("Deve retornar verdadeiro para um objeto válido", () => {
    const usuarioValido = {
      nome: "João",
      email: "joao@example.com",
      senha: "123456",
    };
    expect(cadastro(usuarioValido)).toBe(true);
  });

  it("Deve retornar mensagem de erro se algum campo estiver vazio", () => {
    const usuarioInvalido1 = {
      nome: "",
      email: "joao@example.com",
      senha: "123456",
    };
    const usuarioInvalido2 = { nome: "João", email: "", senha: "123456" };
    const usuarioInvalido3 = {
      nome: "João",
      email: "joao@example.com",
      senha: "",
    };

    expect(cadastro(usuarioInvalido1)).toBe("Todos os campos são obrigatórios");
    expect(cadastro(usuarioInvalido2)).toBe("Todos os campos são obrigatórios");
    expect(cadastro(usuarioInvalido3)).toBe("Todos os campos são obrigatórios");
  });
});
