import { Application } from "express";
import "dotenv/config";
import rotas from "./rotas";
import createApp from "../middlewere/createApp"

const server: Application = createApp();
const port = parseInt(process.env.PORT || "3000", 10);

server.use(rotas);

server.listen(port, (err?: Error) => {
  if (err) {
    console.error(`Erro ao iniciar o servidor ${err.message}`);
  }

  console.log(`Servidor utilizando a porta ${port}`);
});

