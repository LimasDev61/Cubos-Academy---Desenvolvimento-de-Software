import express, { Application, Router } from "express";
import "dotenv/config";
import serverLog from "../middlewere/serverLog";
import rotas from "./rotas";

const server: Application = express();
const port = parseInt(process.env.PORT || "3000", 10);
server.use(serverLog);

server.use(rotas);

server.listen(port, (err?: Error) => {
  if (err) {
    console.error(`Erro ao iniciar o servidor ${err.message}`);
  }

  console.log(`Servidor utilizando a porta ${port}`);
});
