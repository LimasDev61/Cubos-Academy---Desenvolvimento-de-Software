import { Router } from "express";
import { inicio } from "./controladores/inicio";

export const rotas = Router();

rotas.get("/", inicio);
