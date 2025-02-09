import { Router } from "express";
import { appInit } from "../controladores/inicio";

export const rots = Router();

rots.get("/", appInit);
rots.post("/");
rots.get("/:indentificador");