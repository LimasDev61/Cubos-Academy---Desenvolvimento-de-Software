import { Router } from "express";
import CreateUser from "./controllers/create-user";
import { ListUsers } from "./controllers/list-users";
import { DetailsUser } from "./controllers/details-user";
import LoginController from "./controllers/login-user";
import { validarToken } from "./util/validar-token";

export const routes = Router();

routes.post("/users", new CreateUser().create);
routes.post("/login", new LoginController().login);

routes.use(validarToken);
routes.get("/users", new ListUsers().list);
routes.get("/users/:id", new DetailsUser().details);