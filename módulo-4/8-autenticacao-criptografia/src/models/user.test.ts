import User from "./user";


describe("User model", () => {
  test("deve criar um novo usuario", () => {
    const props = {
      name: "Renan",
      email: "renanalves@email.com",
      password: "123456",
    };

    const user = new User(props);

    expect(user.id).toBeDefined();
    expect(user.name).toBe(props.name);
    expect(user.email).toBe(props.email);
    expect(user.password).toBe(props.password);
  });
});
