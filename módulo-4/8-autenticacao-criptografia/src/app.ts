import { Application } from "express";
import { createServer } from "./middlwares/server-app";

const app: Application = createServer();

export default app;
