import { Request, Response, NextFunction } from "express";

export const cadastroCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { url, id } = req.body;

  if (!url || !id) {
    res.status(400).json({ message: "URL e indentificador são obrigatórios" });
    return;
  }

  next();
};
