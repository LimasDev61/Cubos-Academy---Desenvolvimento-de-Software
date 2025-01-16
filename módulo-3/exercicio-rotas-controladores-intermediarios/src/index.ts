import express, { Application } from "express";
import "dotenv/config";
import { convidadoId, listarIdades, mensagemInicial } from "./controladores";
import { validarFiltro } from "../middleware/idadeLog";

const server: Application = express();
const port = parseInt(process.env.PORT || "3000", 10);

server.get("/", mensagemInicial);
server.get("/convidados", validarFiltro, listarIdades);
server.get("/convidados/:id", convidadoId);

server.listen(port, (err?: Error) => {
  if (err) {
    console.error(`Erro ao iniciar o servidor: ${err.message}`);
    process.exit(1);
  }

  console.log(`O servidor está escutando a porta ${port}`);
});
