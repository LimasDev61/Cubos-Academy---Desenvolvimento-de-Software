import "dotenv/config";
import { Application } from "express";
import { creatServer } from "../intermedarios/server.app";

const server: Application = creatServer();

export default server;
