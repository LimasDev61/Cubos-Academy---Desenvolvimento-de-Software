import { Request, Response } from "express";
import instrutoresS, { TInstrutor } from "../../simuladores-de-dados/simulador-banco-dados";

const encontrarInstrutor = (id: number): TInstrutor | undefined => {
  return instrutoresS.find((instrutor: TInstrutor) => instrutor.id === id);
};

export const detalharInstrutor = (req: Request, res: Response): void => {
  const converterBase: number = 10;
  const id = parseInt(req.params.id, converterBase);
  const instrutor = encontrarInstrutor(id);

  res.status(200).json(instrutor);
};
