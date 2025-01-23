import { Request, Response } from "express";
import bancoDeDados from "../../bancoDeDados";
import ExameCreate from "../model/modelExame";

export const listar = (req: Request, res: Response): void => {
  const { aprovado } = req.query;

  const examesAprovados = bancoDeDados.exames.map(
    (exame) =>
      new ExameCreate(
        exame.examinador,
        exame.candidato,
        exame.quantidadeEliminatorias,
        exame.quantidadeGraves,
        exame.quantidadeMedias,
        exame.quantidadeLeves
      )
  );

  if (aprovado !== undefined) {
    const aprovadosBoolean = aprovado === "true";

    const examesFiltrados = examesAprovados.filter(
      (exame) => exame.getAprovado() === aprovadosBoolean
    );

    res.status(200).json(examesFiltrados);
    return;
  }
};
