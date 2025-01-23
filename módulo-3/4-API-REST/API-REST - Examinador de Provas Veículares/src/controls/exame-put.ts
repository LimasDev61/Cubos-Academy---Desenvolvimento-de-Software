import { Request, Response } from "express";
import bancoDeDados from "../../bancoDeDados";
import TExame from "../types/types-exame";
import ExameCreate from "../model/modelExame";

export const editar = (req: Request, res: Response): void => {
  const { id } = req.params;
  const {
    examinador,
    candidato,
    quantidade_eliminatorias,
    quantidade_graves,
    quantidade_medias,
    quantidade_leves,
  } = req.body;

  const exame = bancoDeDados.exames.find((exame: TExame) => exame.id === id);

  if (!exame) {
    res.status(400).json({ message: "Instrutor não encontrado" });
    return;
  }

  exame.examinador = examinador;
  exame.candidato = candidato;
  exame.quantidadeEliminatorias = quantidade_eliminatorias;
  exame.quantidadeGraves = quantidade_graves;
  exame.quantidadeMedias = quantidade_medias;
  exame.quantidadeLeves = quantidade_leves;

  exame.aprovado = new ExameCreate(
    exame.examinador,
    exame.candidato,
    exame.quantidadeEliminatorias,
    exame.quantidadeGraves,
    exame.quantidadeMedias,
    exame.quantidadeLeves
  ).getAprovado();

  res.status(204).send();
};
