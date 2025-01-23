import { Application } from "express";
import "dotenv/config";
import { creatServer } from "../middleware/server-app";
import { rotas } from "./rotas";

const server: Application = creatServer();
const baseDecimal: number = 10;
const port: number = parseInt(process.env.PORT || "3000", baseDecimal);

server.use(rotas);

server.listen(port, (err?: Error) => {
  if (err) {
    console.error(`Erro ao iniciar o servidor ${err.message}`);
  }

  console.log(`Servidor utilizando a porta ${port}`);
});
