import { Router } from "express";
import { inicio } from "./controladores/inicio";
import { encontrarEmpresasPorId } from "./controladores/empresasId";

export const rotas = Router();

rotas.get("/", inicio);
rotas.get("/:id", encontrarEmpresasPorId);
