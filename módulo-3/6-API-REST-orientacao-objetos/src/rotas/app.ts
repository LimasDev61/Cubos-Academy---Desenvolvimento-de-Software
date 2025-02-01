import "dotenv/config";
import { Application } from "express";
import { creatServer } from "../intermediarios/server-app";
import { rotas } from "./rotas";

const server: Application = creatServer();

server.use(rotas);

export default server;