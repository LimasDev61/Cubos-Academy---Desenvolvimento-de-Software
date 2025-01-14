import express, { Application, Request, Response } from "express";
import "dotenv/config";

const server: Application = express();

const port = parseInt(process.env.PORT || "3000", 10);

server.get("/", (req: Request, res: Response) => {
  console.log(req); // conhecendo sobre a requisição
  res.send("Servidor está funcionando normalmente! <3");
});

server.listen(port, (err?: Error) => {
  if (err) {
    console.error(`Erro ao iniciar o servidor: ${err.message}`);
    process.exit(1);
  }

  console.log(`O servidor está escutando a porta ${port}`);
});
