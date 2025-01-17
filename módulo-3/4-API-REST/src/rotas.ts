import { Router } from "express";
import { listarInstrutores } from "./controls/listarInstrutores";

const server = Router();

// LISTAR TODOS OS INSTRUTORES
server.get("/listarInstrutores", listarInstrutores);

// DETALHAR AS INFORMAÇÕES DE UM INSTRUTOR
// CADASTRAR INSTRUTOR
// EDITAR UM INSTRUTOR
// EXCLUIR INSTRUTOR

// CADASTRAR AULA PARA UM INSTRUTOR
// EXCLUIR UMA AULA PARA UM INSTRUTOR

export default server;
