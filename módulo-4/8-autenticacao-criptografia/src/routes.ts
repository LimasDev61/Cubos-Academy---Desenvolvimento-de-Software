import { Router } from "express";
import CreateUser from "./controllers/create-user";

export const routes = Router();

routes.post("/users", new CreateUser().create);