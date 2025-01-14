import express, { Application, Request, Response } from "express";
import "dotenv/config";
import { getUsers, getUserId } from "./users";

const server: Application = express();

const port = parseInt(process.env.PORT || "3000", 10);

server.get("/usuarios", (req: Request, res: Response) => {
  const users = getUsers();
  res.json(users);
});

server.get("/usuarios/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const user = getUserId(id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
});

server.listen(port, (err?: Error) => {
  if (err) {
    console.error(`Erro ao iniciar o servidor: ${err.message}`);
    process.exit(1);
  }

  console.log(`O servidor está escutando a porta ${port}`);
});
