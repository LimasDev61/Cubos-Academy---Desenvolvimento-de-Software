import { Request, Response } from "express";
import instrutoresS, {
  TInstrutor,
} from "../../simuladores-de-dados/simulador-banco-dados";
import {
  especialidades,
  TEspecialidades,
} from "../../simuladores-de-dados/simulador-dados-especialidades";

export const atualizacaoPartial = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const instrutorAtt: Partial<TInstrutor> = req.body;

  const instrutorExistente = instrutoresS.find(
    (instrutor: TInstrutor) => instrutor.id === id
  );

  if (!instrutorExistente) {
    res.status(404).json({
      message: `Instrutor com ID ${id} não encontrado.`,
    });
    return;
  }

  if (instrutorAtt.nome !== undefined) {
    instrutorExistente.nome = instrutorAtt.nome;
  }
  if (instrutorAtt.idade !== undefined) {
    instrutorExistente.idade = instrutorAtt.idade;
  }
  if (instrutorAtt.email !== undefined) {
    instrutorExistente.email = instrutorAtt.email;
  }

  if (instrutorAtt.espec !== undefined) {
    const especialidadesValidas = (instrutorAtt.espec as number[])
      .map((id: number) => especialidades.find((e) => e.id === id))
      .filter((e) => e !== undefined)
      .map((e) => e!.espec); // Mapear para os nomes das especialidades

    if (!especialidadesValidas.length && instrutorAtt.espec.length) {
      res.status(400).json({
        message: `Especialidades inválidas para o instrutor com ID ${id}.`,
      });
      return;
    }

    instrutorExistente.espec = especialidadesValidas;
  }

  res.status(200).json({
    message: "Instrutor atualizado com sucesso.",
    instrutor: instrutorExistente,
  });
};
