import { Request, Response } from "express";
import instrutoresS, { TInstrutor } from "../../simuladorBancoDeDados";

export const cadastrarInstrutor = (req: Request, res: Response): void => {
  const { nome, idade, email } = req.body;

  const emailExistente = instrutoresS.some(
    (instrutor) => instrutor.email === email
  );

  if (emailExistente) {
    res.status(400).json({ message: "E-mail está cadastrado" });
    return;
  }

  const novoInstrutor: TInstrutor = {
    id: instrutoresS.length ++,
    nome,
    idade,
    email,
  };

  instrutoresS.push(novoInstrutor);

  res.status(201).json({
    message: "Instrutor cadastrado com sucesso.",
    instrutor: novoInstrutor,
  });
};
