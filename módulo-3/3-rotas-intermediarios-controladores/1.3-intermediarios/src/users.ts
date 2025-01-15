type User = {
  id: number;
  name: string;
  email: string;
};

const usuarios: User[] = [
  { id: 1, name: "Renan Lima", email: "renanalves000@gmail.com" },
  { id: 2, name: "Stephane Rêgo", email: "stephane000@gmail.com" },
];

export const getUsers = (): User[] => {
  return usuarios;
};

export const getUserId = (id: number): User | undefined => {
  return usuarios.find((usuario) => usuario.id === id);
};

export const getUserEmail = (email: string): User | undefined => {
  return usuarios.find(
    (usuario) =>
      usuario.email.trim().toLowerCase() === email.trim().toLowerCase()
  );
};
