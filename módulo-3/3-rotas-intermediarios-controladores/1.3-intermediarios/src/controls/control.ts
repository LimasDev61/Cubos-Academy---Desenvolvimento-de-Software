import { Response, Request } from "express";
import { getUserId, getUsers, getUserEmail } from "../users";

const usuariosFunction = (req: Request, res: Response) => {
  const users = getUsers();
  res.json(users);
};

const usuariosId = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const user = getUserId(id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
};

const searchEmail = (req: Request, res: Response) => {
  const email = req.query.email as string;
  console.log("Email recebido:", email);

  if (!email) {
    res.status(400).json({ message: "E-mail não fornecido!" });
    return;
  }

  const user = getUserEmail(email);

  console.log("Resultado da busca por email:", user);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
};

export { usuariosFunction, usuariosId, searchEmail };
