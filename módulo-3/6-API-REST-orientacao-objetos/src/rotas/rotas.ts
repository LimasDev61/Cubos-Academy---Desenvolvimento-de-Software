import { Router } from "express";
import { inicioApp } from "../controles/inicio";

export const rotas = Router();

rotas.get("/", inicioApp);