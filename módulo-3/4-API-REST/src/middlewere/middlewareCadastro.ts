import { Request, Response, NextFunction } from "express";

export const verificadorInstrutores = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const instrutores = req.body;

  if (!Array.isArray(instrutores) || instrutores.length === 0) {
    res.status(400).json({
      message: "É necessário enviar uma lista de instrutores válida.",
    });
    return;
  }

  const erros: string[] = [];

  instrutores.forEach((instrutor, index) => {
    const { nome, idade, email } = instrutor;

    if (!nome || typeof nome !== "string") {
      erros.push(
        `Erro no instrutor ${
          index + 1
        }: O campo 'nome' é obrigatório e deve ser uma string.`
      );
    }

    if (!idade || typeof idade !== "number" || idade <= 0) {
      erros.push(
        `Erro no instrutor ${
          index + 1
        }: Idade inválida. Deve ser um número positivo.`
      );
    } else if (idade <= 18) {
      erros.push(
        `Erro no instrutor ${index + 1}: A idade deve ser maior que 18.`
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      erros.push(
        `Erro no instrutor ${
          index + 1
        }: O campo 'email' é obrigatório e deve ser um e-mail válido.`
      );
    }
  });

  if (erros.length > 0) {
    res.status(400).json({ message: "Erros de validação encontrados.", erros });
    return;
  }

  next();
};
