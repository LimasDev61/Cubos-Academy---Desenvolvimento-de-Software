import { Request, Response } from "express";
import instrutoresS, {
  TInstrutor,
} from "../../simuladores-de-dados/simulador-banco-dados";
import {
  especialidades,
  TEspecialidades,
} from "../../simuladores-de-dados/simulador-dados-especialidades";

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
    const { nome, idade, email, espec } = instrutor;

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

    const especialidadesValidas = (espec as number[])
      .map((id: number) => especialidades.find((e) => e.id === id))
      .filter((e) => e !== undefined)
      .map((e) => e!.espec); // Aqui estamos pegando o nome da especialidade

    if (!especialidadesValidas.length && espec.length) {
      erros.push(
        `Erro no instrutor: ${JSON.stringify(
          instrutor
        )} - Especialidades inválidas.`
      );
      return;
    }

    const novoInstrutor: TInstrutor = {
      id: novoId,
      nome,
      idade,
      email,
      espec: especialidadesValidas,
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
