import { Router } from "express";
import CreateUser from "./controllers/create-user";
import { ListUsers } from "./controllers/list-users";

export const routes = Router();

routes.post("/users", new CreateUser().create);
routes.get("/users", new ListUsers().list);