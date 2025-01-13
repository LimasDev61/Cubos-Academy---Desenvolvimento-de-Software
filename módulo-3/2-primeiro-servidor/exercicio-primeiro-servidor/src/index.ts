import express, { Application, Request, Response } from "express";
import "dotenv/config";

const server: Application = express();

const port = parseInt(process.env.PORTA || "3000", 10);

// Utilizei o operador de exclamação ao final da chamada do 
// process, para garantir que as quatro operações com números 
// de ponto flutuante sejam realizadas corretamente, pois o valor 
// não pode ser null nem undefined."
const N1: number = parseFloat(process.env.NUM_1!);
const N2: number = parseFloat(process.env.NUM_2!);

server.get("/soma", (req: Request, res: Response) => {
  const soma = N1 + N2;
  res.send(`O resultado da soma, é: ${soma}`);
  // JÁ ESTÁ CONVERTIDO PARA STRING IMPLICITAMENTE, GRAÇAS AO MÉTODO RES.SEND
});

server.get("/subtracao", (req: Request, res: Response) => {
  const subtracao = N1 - N2;
  res.send(`O resultado da subtração, é: ${subtracao}`);
  // JÁ ESTÁ CONVERTIDO PARA STRING IMPLICITAMENTE, GRAÇAS AO MÉTODO RES.SEND
});

server.get("/multiplicacao", (req: Request, res: Response) => {
  const multiplicacao = N1 * N2;
  res.send(`O resultado da multiplicação, é: ${multiplicacao}`);
  // JÁ ESTÁ CONVERTIDO PARA STRING IMPLICITAMENTE, GRAÇAS AO MÉTODO RES.SEND
});

server.get("/divisao", (req: Request, res: Response) => {
  if (N2 === 0) {
    res.send(`Erro: Divisão por zero não é permitida`);
    // Criei essa mensagem de erro, caso tente dividir por 0.
  }
  const divisao = Math.floor(N1 / N2);
  res.send(`O resultado da divisão, é: ${divisao}`);
  // JÁ ESTÁ CONVERTIDO PARA STRING IMPLICITAMENTE, GRAÇAS AO MÉTODO RES.SEND
});

server.listen(port, (err?: Error) => {
  if (err) {
    console.error(`Erro ao iniciar o servidor: ${err.message}`);
    process.exit(1);
  }

  console.log(`Servidor está escutando a porta ${port}`);
});
