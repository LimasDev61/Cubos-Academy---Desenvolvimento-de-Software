import { Request, Response } from "express";
import instrutoresS, { TInstrutor } from "../../simuladores-de-dados/simulador-banco-dados";

export const cadastrarInstrutores = (req: Request, res: Response): void => {
  const instrutores: TInstrutor[] = req.body;

  if (!Array.isArray(instrutores) || instrutores.length === 0) {
    res.status(400).json({
      message: "É necessário enviar uma lista de instrutores válida.",
    });
    return;
  }

  const instrutores_Cadastrados: TInstrutor[] = [];
  const erros: string[] = [];

  let novoId = 1;

  const idUsados = new Set(instrutoresS.map((i: TInstrutor) => i.id));

  while (idUsados.has(novoId)) {
    novoId++;
  }

  instrutores.forEach((instrutor) => {
    const { nome, idade, email } = instrutor;

    const emailExistente = instrutoresS.some(
      (i: TInstrutor) => i.email === email
    );
    if (emailExistente) {
      erros.push(
        `Erro no instrutor: ${JSON.stringify(
          instrutor
        )} - E-mail já cadastrado.`
      );
      return;
    }

    const novoInstrutor: TInstrutor = {
      id: novoId,
      nome,
      idade,
      email,
    };

    instrutoresS.push(novoInstrutor);
    instrutores_Cadastrados.push(novoInstrutor);

    idUsados.add(novoId);
    novoId++;
  });

  res.status(201).json({
    message: "Cadastro concluído.",
    instrutores_Cadastrados,
    erros,
  });
};
