import "dotenv/config";
import express, { Application } from "express";
import rotas from "./rotas";

const app: Application = express();

const PORTA = 3000;

app.use(express.json());

app.use(rotas);

app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`));
