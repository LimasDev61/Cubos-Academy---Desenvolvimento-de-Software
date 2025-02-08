import { Request, Response, NextFunction } from "express";

export const validarLendas = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { titulo, origem, descricao, tipo } = req.body;

  if (!titulo || !origem || !descricao || !tipo) {
    res.status(400).json({ error: "Todos os campos são obrigatórios" });
    return;
  }
  next();
};
