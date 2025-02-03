import { Router } from "express";
import Autor from "../controles/autorControl";
import { inicioApp } from "../controles/inicio";

export const rotas = Router();

const autor = new Autor();

rotas.get("/", inicioApp);
rotas.get("/autores", autor.listar.bind(autor));
rotas.get("/autores/:id", autor.detalharAutor.bind(autor));
rotas.post("/autores", autor.cadastrar.bind(autor));
rotas.put("/autores/:id", autor.editar.bind(autor));

