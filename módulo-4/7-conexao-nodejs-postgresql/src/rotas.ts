import { Router } from "express";
import { inicio } from "./controladores/inicio";
import { encontrarEmpresasPorId } from "./controladores/empresasId";
import { encontrarFuncionarios } from "./controladores/funcionarios";

export const rotas = Router();

rotas.get("/", inicio);
rotas.get("/funcionarios", encontrarFuncionarios);
rotas.get("/:id", encontrarEmpresasPorId);
