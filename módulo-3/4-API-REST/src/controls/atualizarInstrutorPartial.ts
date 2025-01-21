import { Request, Response } from "express";
import instrutoresS, { TInstrutor } from "../../simuladores-de-dados/simuladorBancoDeDados";

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

  res.status(200).json({
    message: "Instrutor atualizado com sucesso.",
    instrutor: instrutorExistente,
  });
};
