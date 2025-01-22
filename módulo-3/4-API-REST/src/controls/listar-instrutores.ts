import { Request, Response } from "express";
import instrutor from "../../simuladores-de-dados/simulador-banco-dados";

export const instrutores = (req: Request, res: Response): void => {
  !instrutor || instrutor.length === 0
    ? res.status(404).json({ error: "Nenhum instrutor(a) encontrado(a)" })
    : res.status(200).json(instrutor);
};
