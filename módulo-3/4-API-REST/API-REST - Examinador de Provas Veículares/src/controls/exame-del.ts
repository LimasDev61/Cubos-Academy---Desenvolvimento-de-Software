import { Request, Response } from "express";
import bancoDeDados from "../../bancoDeDados";
import TExame from "../types/types-exame";

export const deletar = (req: Request, res: Response): void => {
  const { id } = req.params;

  const exameIndex = bancoDeDados.exames.findIndex(
    (exame: TExame) => exame.id === id
  );

  if (exameIndex === -1) {
    res.status(404).json({
      mensagem: "exame não encontrado(a)",
    });
    return;
  }

  bancoDeDados.exames.splice(exameIndex, 1);

  res.status(204).send();
};
