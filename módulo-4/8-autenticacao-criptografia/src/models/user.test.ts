import User from "./user";

describe("User model", () => {
  test("deve criar um novo usuario", () => {
    const props = {
      name: "Renan",
      email: "renanalves@email.com",
      password: "12345678",
    };

    const user = new User(props);

    expect(user.id).toBeDefined();
    expect(user.name).toBe(props.name);
    expect(user.email).toBe(props.email);
    expect(user.password).toBe(props.password);
  });

  test("não deve criar um novo usuario", () => {
    const props = {
      name: "Renan",
      email: "renanalves@",
      password: "12345678",
    };

    expect(() => new User(props)).toThrow(new Error("Invalid email"));
  });
});

test("não deve criar usuario com senha invalida", () => {
  const props = {
    name: "Renan",
    email: "renanalves@email.com",
    password: "123",
  };

  expect(() => new User(props)).toThrow(
    new Error("A senha deve ter no minimo 8 caracteres")
  );
});
