import { Request, Response, NextFunction } from "express";

const verificarPreco = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { maxPreco } = req.query;

  if(!maxPreco) {
    return next();
  }

  const precoMax = Number(maxPreco);

  if (isNaN(precoMax) || precoMax <= 0) {
    res.status(400).json({
      mensagem:
        "O preço máximo do evento deve conter apenas números e deve ser positivo",
    });
    return;
  }

  next();
};

export default verificarPreco;
