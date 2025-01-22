import { Request, Response } from "express";
import instrutoresS, { TInstrutor } from "../../simuladores-de-dados/simulador-banco-dados";


export const listarInstrutores = (req: Request, res: Response): void => {
  const instrutoresOrdenados = [...instrutoresS].sort((a, b) => a.id - b.id);
  res.status(200).json(instrutoresOrdenados);
};

export const detalharInstrutor = (req: Request, res: Response): void => {
  const converterBase: number = 10;
  const id = parseInt(req.params.id, converterBase);
  const instrutor = instrutoresS.find((i: TInstrutor) => i.id === id);

  if (!instrutor) {
    res.status(404).json({ message: "Instrutor não encontrado." });
    return;
  }

  res.status(200).json(instrutor);
};

