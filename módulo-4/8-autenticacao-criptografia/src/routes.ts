import { Router } from "express";
import CreateUser from "./controllers/create-user";

export const routes = Router();

routes.get("/", (req, res) => {
    res.send("Hello world");});
routes.post("/users", new CreateUser().create);