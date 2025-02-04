import { Router } from "express";
import { inicioApp } from "../controles/inicio";
import AutorControl from "../controles/autorControl";
import postControl from "../controles/postControlador";

export const rotas = Router();

const autor = new AutorControl();
const post = new postControl();

rotas.get("/", inicioApp);
rotas.get("/autores", autor.listar.bind(autor));
rotas.get("/autores/:id", autor.detalharAutor.bind(autor));
rotas.post("/autores", autor.cadastrar.bind(autor));
rotas.put("/autores/:id", autor.editar.bind(autor));
rotas.delete("/autores/:id", autor.excluir.bind(autor));

rotas.get("/posts", post.listar.bind(post));
rotas.get("/posts/:id", post.detalharPost.bind(post));
rotas.post("/posts", post.cadastrar.bind(post));
rotas.patch("/posts/:id", post.editar.bind(post));
rotas.delete("/posts/:id", post.excluir.bind(post));
