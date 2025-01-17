import { Request, Response } from "express";
import instrutoresS, { TInstrutor } from "../../simuladorBancoDeDados";

const encontrarInstrutor = (id: number): TInstrutor | undefined => {
  return instrutoresS.find((instrutor: TInstrutor) => instrutor.id === id);
};

export const detalharInstrutor = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id, 10);
  const instrutor = encontrarInstrutor(id);

  res.status(200).json(instrutor);
};
