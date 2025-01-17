import { Request, Response, NextFunction } from "express";
import instrutoresS, { TInstrutor } from "../simuladorBancoDeDados";

const encontrarInstrutor = (id: number): TInstrutor | undefined => {
  return instrutoresS.find((instrutor) => instrutor.id === id);
};

export const validarInstrutor = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const id: number = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    res.status(400).json({ message: "Id inválido" });
    return;
  }

  const instrutor = encontrarInstrutor(id);

  if (instrutor) {
    return next();
  } else {
    res.status(404).json({ message: "Instrutor não encontrado" });
  }
};
