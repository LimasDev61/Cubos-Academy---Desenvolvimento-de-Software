import express, { Application } from "express";
import "dotenv/config";
import { usuariosFunction, usuariosId, searchEmail } from "./controls/control";
import loggerMiddle from "../middleware/loggerMiddle";

const server: Application = express();

const port = parseInt(process.env.PORT || "3000", 10);

server.use(loggerMiddle);
server.get("/usuarios", usuariosFunction);
server.get("/usuarios/search", searchEmail);
server.get("/usuarios/:id", usuariosId);

server.listen(port, (err?: Error) => {
  if (err) {
    console.error(`Erro ao iniciar o servidor: ${err.message}`);
    process.exit(1);
  }

  console.log(`O servidor está escutando a porta ${port}`);
});
