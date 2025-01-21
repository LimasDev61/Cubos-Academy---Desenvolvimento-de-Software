import { Request, Response, NextFunction } from "express";
import { TInstrutor } from "../../simuladorBancoDeDados";

export const dadosUnicos = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const instrutor: TInstrutor = req.body;
  const { nome, idade, email } = instrutor;

  const isAlteracao =
    req.method === "PATCH" || req.method === "PUT";

  if (!isAlteracao) {
    if (!nome || typeof nome !== "string") {
      res.status(400).json({
        message: "'nome' é obrigatório e deve ser uma string.",
      });
      return;
    }

    if (!idade || typeof idade !== "number" || idade <= 0 || idade <= 18) {
      res.status(400).json({
        message: "'idade' deve ser um número positivo e maior que 18.",
      });
      return;
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      res.status(400).json({
        message: "'email' é obrigatório e deve ser válido.",
      });
      return;
    }
  }

  if (nome && typeof nome !== "string") {
    res.status(400).json({
      message: "'nome' deve ser uma string, se fornecido.",
    });
    return;
  }

  if (idade && (typeof idade !== "number" || idade <= 0 || idade <= 18)) {
    res.status(400).json({
      message:
        "'idade' deve ser um número positivo e maior que 18, se fornecido.",
    });
    return;
  }

  if (email && (typeof email !== "string" || !email.includes("@"))) {
    res.status(400).json({
      message: "'email' deve ser válido, se fornecido.",
    });
    return;
  }

  next();
};
