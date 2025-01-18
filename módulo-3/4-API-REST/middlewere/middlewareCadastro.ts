import { Request, Response, NextFunction } from "express";

export const verificadorEmail = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { nome, idade, email } = req.body;

  if (!nome || typeof nome !== "string") {
    res.status(400).json({
      mensagem: "O campo 'nome' é obrigatório e escreva seu nome corretamente.",
    });
    return;
  }

  if (!idade || typeof idade !== "number" || idade <= 0) {
    res.status(400).json({ message: "Digite a idade corretamente." });
    return;
  }

  if (idade < 18) {
    res.status(400).json({ message: "A idade deve ser maior que 18." });
    return;
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    res.status(400).json({ message: "forneça o email correto." });
    return;
  }

  next();
};
