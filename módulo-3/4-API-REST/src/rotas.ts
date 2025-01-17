import { Router } from "express";
import { listarInstrutores } from "./controls/listarInstrutores";
import { detalharInstrutor } from "./controls/detalharInstrutores";
import { validarInstrutor } from "../middlewere/middleIdCheck";

const server = Router();

// LISTAR TODOS OS INSTRUTORES
server.get("/instrutores", listarInstrutores);

// DETALHAR AS INFORMAÇÕES DE UM INSTRUTOR
server.get("/instrutores/:id", validarInstrutor , detalharInstrutor)
// CADASTRAR INSTRUTOR
// EDITAR UM INSTRUTOR
// EXCLUIR INSTRUTOR

// CADASTRAR AULA PARA UM INSTRUTOR
// EXCLUIR UMA AULA PARA UM INSTRUTOR

export default server;
