import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

const port = parseInt(process.env.PORTA || '3000', 10);

server.get('/', (req: Request, res: Response) => {
    const name = process.env.NOME || 'Visitante';
    res.send(`<h1>Olá, ${name}! Bem-vindo ao meu servidor NodeJS com EXPRESS!</h1>`);
});

server.listen(port, (err?: Error) => {
    if (err) {
        console.error(`Erro ao iniciar o servidor: ${err.message}`);
        process.exit(1);
    }
    console.log(`Servidor está escutando na porta ${port}`);
});
