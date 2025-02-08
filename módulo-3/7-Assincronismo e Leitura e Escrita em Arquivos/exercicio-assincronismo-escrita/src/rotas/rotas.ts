import { Router } from "express";
import { inicioApp } from "../controladores/inicio";
import { listarLendas } from "../controladores/listar";
import { validarLendas } from "../intermedarios/intermediarios";
import { cadastrarLendas } from "../controladores/cadastrar";

export const rotas = Router();

rotas.get("/", inicioApp);
rotas.get("/lendas", listarLendas);
rotas.post("/lendas", validarLendas, cadastrarLendas);