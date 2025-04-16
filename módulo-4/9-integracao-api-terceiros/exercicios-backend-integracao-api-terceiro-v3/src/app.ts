import { createServer } from "./middleware/server-app";
import { Application } from "express";

const app: Application = createServer();

export default app;
