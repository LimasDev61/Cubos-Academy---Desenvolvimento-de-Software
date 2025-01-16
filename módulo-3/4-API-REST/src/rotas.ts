import { Router } from "express";
import { startServer } from "./controls/control";

const server = Router();

server.get("/", startServer);

export default server;