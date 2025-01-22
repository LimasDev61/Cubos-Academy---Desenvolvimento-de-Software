import { Request, Response, NextFunction } from "express";
import instrutoresS, { TInstrutor } from "../../simuladores-de-dados/simulador-banco-dados";

const encontrarInstrutor = (id: number): TInstrutor | undefined => {
  return instrutoresS.find((instrutor) => instrutor.id === id);
};

export const validarInstrutor = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { id } = req.params;
  const idNum = parseInt(id, 10);

  if (isNaN(idNum)) {
    res.status(400).json({ message: "Id inválido" });
    return;
  }

  const instrutor = encontrarInstrutor(idNum);

  if (instrutor) {
    next();
  } else {
    res.status(404).json({ message: "Instrutor não encontrado" });
    return;
  }
};
