import { Application } from "express";
import { createServer } from "./intermediarios/server-app";

const app: Application = createServer();

export default app;
