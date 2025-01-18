import { Request, Response } from "express";
import instrutoresS, { TInstrutor } from "../../simuladorBancoDeDados";

export const cadastrarInstrutores = (req: Request, res: Response): void => {
  const instrutores: TInstrutor[] = req.body;

  if (!Array.isArray(instrutores) || instrutores.length === 0) {
    res
      .status(400)
      .json({ message: "É necessário enviar uma lista de instrutores válida." });
    return;
  }

  const instrutores_Cadastrados: TInstrutor[] = [];
  const erros: string[] = [];

  instrutores.forEach((instrutor) => {
    const { nome, idade, email } = instrutor;

    const emailExistente = instrutoresS.some((i) => i.email === email);
    if (emailExistente) {
      erros.push(`Erro no instrutor: ${JSON.stringify(instrutor)} - E-mail já cadastrado.`);
      return;
    }

    const novoInstrutor: TInstrutor = {
      id: instrutoresS.length + 1, 
      nome,
      idade,
      email,
    };

    instrutoresS.push(novoInstrutor);
    instrutores_Cadastrados.push(novoInstrutor);
  });

  res.status(201).json({
    message: "Processamento concluído.",
    instrutores_Cadastrados,
    erros,
  });
};

