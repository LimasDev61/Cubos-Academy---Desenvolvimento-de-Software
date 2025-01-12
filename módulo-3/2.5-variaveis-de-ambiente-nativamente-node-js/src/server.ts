import express, {Response, Request} from "express";

const server = express();
const port: number = Number(process.env.PORT || 3000);

server.get("/", (req: Request, res: Response) => {
    res.send("<h1>Olá, bem-vindo ao meu primeiro servidor NodeJS com EXPRESS!</h1>");
});

server.listen(port, (err?: Error) => {
    if (err) {
        console.error(`Erro ao iniciar o servidor: ${err.message}`);
        process.exit(1);
    }
    console.log(`Server está escutando a porta ${port}`);
});
