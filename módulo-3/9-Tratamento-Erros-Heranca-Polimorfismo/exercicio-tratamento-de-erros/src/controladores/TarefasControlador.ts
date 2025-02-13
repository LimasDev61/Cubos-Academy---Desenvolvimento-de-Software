import { Request, Response } from "express";
import bancoDeDados from "../../bancoDeDados";
import TTarefa from "../tipos/TTarefa";
import Tarefa from "../modelos/Tarefa";
import { ObrigatoriosError } from "../erros/obrigatoriosErro";
import { NomesExistem } from "../erros/nomesExistentes";
import { NaoEncontradoError } from "../erros/naoEncontrado";
import { error } from "console";
import { badRequestError } from "../erros/erro";

export default class TarefasControlador {
  listar(_req: Request, res: Response) {
    const tarefasCadastradas = bancoDeDados.tarefas;
    return res.status(200).json(tarefasCadastradas);
  }

  criar(req: Request, res: Response) {
    try {
      const { nome, descricao } = req.body;

      if (!nome || !descricao) {
        throw new ObrigatoriosError("Todos os campos são obrigatórios!.");
      }

      const tarefaExiste: boolean = bancoDeDados.tarefas.some(
        (tarefa) => tarefa.nome === nome
      );

      if (tarefaExiste) {
        throw new NomesExistem("O nome já está cadastrado.");
      }

      if (!tarefaExiste) {
        throw new NaoEncontradoError("Nome não existe.");
      }

      const novaTarefa: TTarefa = new Tarefa(nome, descricao);

      bancoDeDados.tarefas.push(novaTarefa);

      res.status(201).json(novaTarefa);
      return;
    } catch (error: unknown) {
      if (error instanceof badRequestError) {
        res.status(error.statusCode).json({ Erro: error.message });
        return;
      }

      res.status(500).json({ Erro: "Servidor com erro interno!" });
      return;
    }
  }
}
