import { Router } from "express";
import { home } from "../controls/home";
import { criar } from "../controls/exame-post";
import { validar } from "../middleware/exame-intermedio";
import { listar } from "../controls/exame-get";
import { editar } from "../controls/exame-put";
import { deletar } from "../controls/exame-del";

export const rotas = Router();

rotas.get("/", home);
rotas.post("/exames", validar, criar);
rotas.get("/exames", listar);
rotas.put("/exames/:id", validar, editar);
rotas.delete("/exames/:id", deletar);
