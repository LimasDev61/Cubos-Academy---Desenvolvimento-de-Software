import express, { Request, Response } from "express";

const server = express();
const port: number = 3000;

server.get("/", (req: Request, res: Response): void => {
  res.send(
    "<h1>Seja bem-vindo ao meu primeiro servidor typescript com NodeJS e Express!</h1>"
  );
});

server.listen(port, (err?: Error): void => {
  if (err) {
    console.error(`Erro ao iniciar o servidor: ${err.message}`);
    process.exit(1);
  }

  console.log(`Server está escutando a porta ${port}`);
});
