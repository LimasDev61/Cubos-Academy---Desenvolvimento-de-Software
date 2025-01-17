import { Request, Response } from "express";
import listaInstrutores from "../../simuladorBancoDeDados";

export const listarInstrutores = (req: Request, res: Response): void => {
  !listaInstrutores || listaInstrutores.length === 0
    ? res.status(404).json({ error: "Nenhum instrutor(a) encontrado(a)" })
    : res.status(200).json(listaInstrutores);
};
