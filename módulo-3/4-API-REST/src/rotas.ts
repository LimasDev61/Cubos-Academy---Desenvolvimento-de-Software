import { Router } from "express";
import { listarInstrutores } from "./controls/listarInstrutores";
import { detalharInstrutor } from "./controls/detalharInstrutores";
import { validarInstrutor } from "../middlewere/middleIdCheck";
import { cadastrarInstrutores } from "./controls/cadastrarInstrutor";
import { verificadorInstrutores } from "../middlewere/middlewareCadastro";

const rotas = Router();

// LISTAR TODOS OS INSTRUTORES
rotas.get("/instrutores", listarInstrutores);

// DETALHAR AS INFORMAÇÕES DE UM INSTRUTOR
rotas.get("/instrutores/:id", validarInstrutor, detalharInstrutor);

// CADASTRAR INSTRUTOR
rotas.post("/instrutores/cadastrar", verificadorInstrutores, cadastrarInstrutores);

// EDITAR UM INSTRUTOR
// EXCLUIR INSTRUTOR

// CADASTRAR AULA PARA UM INSTRUTOR
// EXCLUIR UMA AULA PARA UM INSTRUTOR

export default rotas;
