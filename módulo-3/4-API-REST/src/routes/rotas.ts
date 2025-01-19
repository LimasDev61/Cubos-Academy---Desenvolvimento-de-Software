import { Router } from "express";
import { listarInstrutores } from "../controls/listarInstrutores";
import { validarInstrutor } from "../middlewere/middleIdCheck";
import { detalharInstrutor } from "../controls/detalharInstrutores";
import { verificadorInstrutores } from "../middlewere/middlewareCadastro";
import { cadastrarInstrutores } from "../controls/cadastrarInstrutor";
import { atualizarInstrutor } from "../controls/atualizarInstrutor";
import { excluirInstrutor } from "../controls/excluirInstrutor";


const rotas = Router();

// LISTAR TODOS OS INSTRUTORES
rotas.get("/instrutores", listarInstrutores);

// DETALHAR AS INFORMAÇÕES DE UM INSTRUTOR
rotas.get("/instrutores/:id", validarInstrutor, detalharInstrutor);

// CADASTRAR INSTRUTOR
rotas.post("/instrutores/cadastrar", verificadorInstrutores, cadastrarInstrutores);

// EDITAR UM INSTRUTOR
rotas.put("/instrutores/atualizar/:id", validarInstrutor, atualizarInstrutor);
// EXCLUIR INSTRUTOR
rotas.delete("/instrutor/excluir/:id", validarInstrutor, excluirInstrutor);

// CADASTRAR AULA PARA UM INSTRUTOR
// EXCLUIR UMA AULA PARA UM INSTRUTOR

export default rotas;
