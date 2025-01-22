import { Router } from "express";
import { validarInstrutor } from "../middlewere/id-check";
import { detalharInstrutor, listarInstrutores } from "../controls/detalhar-instrutores";
import { verificadorInstrutores } from "../middlewere/cadastro-array";
import { cadastrarInstrutores } from "../controls/cadastrar-instrutor";
import { dadosUnicos } from "../middlewere/verificar-dados-cadastro";
import { atualizarInstrutor } from "../controls/atualizar-instrutor";
import { atualizacaoPartial } from "../controls/atualizar-instrutor-partial";
import { excluirInstrutor } from "../controls/excluir-instrutores";


const rotas = Router();

// LISTAR TODOS OS INSTRUTORES
rotas.get("/instrutores", listarInstrutores, detalharInstrutor);

// DETALHAR AS INFORMAÇÕES DE UM INSTRUTOR
rotas.get("/instrutores/:id", validarInstrutor, detalharInstrutor);

// CADASTRAR INSTRUTOR
rotas.post(
  "/instrutores/cadastrar",
  verificadorInstrutores,
  cadastrarInstrutores
);

// EDITAR UM INSTRUTOR
rotas.put(
  "/instrutores/atualizar/:id",
  validarInstrutor,
  dadosUnicos,
  atualizarInstrutor
);

rotas.patch(
  "/instrutores/atualizar/campo/:id",
  validarInstrutor,
  dadosUnicos,
  atualizacaoPartial
);

// EXCLUIR INSTRUTOR
rotas.delete("/instrutor/excluir/:id", validarInstrutor, excluirInstrutor);

// CADASTRAR AULA PARA UM INSTRUTOR
// EXCLUIR UMA AULA PARA UM INSTRUTOR

export default rotas;
