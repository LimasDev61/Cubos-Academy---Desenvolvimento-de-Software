import express, { Application } from "express";
import "dotenv/config";
import { startServer } from "./control";
import serverLog from "../middlewere/serverLog";

const server: Application = express();
const port = parseInt(process.env.PORT || "3000", 10);

server.use(serverLog);
server.get("/", startServer);


server.listen(port, (err?: Error) => {
    if(err) {
        console.error(`Erro ao iniciar o servidor ${err.message}`);
    }

    console.log(`Servidor utilizando a porta ${port}`);
})