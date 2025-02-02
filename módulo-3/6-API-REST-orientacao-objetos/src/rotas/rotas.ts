import { Router } from "express";
import { inicioApp } from "../controles/inicio";
import Autor from "../controles/autorControl";

export const rotas = Router();

const autor = new Autor();

rotas.get("/", autor.inicio.bind(autor));
rotas.get("/autores", autor.listar.bind(autor));
