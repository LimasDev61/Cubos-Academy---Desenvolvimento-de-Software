import { Router } from "express";
import CreateUser from "./controllers/create-user";
import { ListUsers } from "./controllers/list-users";
import { DetailsUser } from "./controllers/details-user";

export const routes = Router();

routes.post("/users", new CreateUser().create);
routes.get("/users", new ListUsers().list);
routes.get("/users/:id", new DetailsUser().details);