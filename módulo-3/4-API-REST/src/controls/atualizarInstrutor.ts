import { Request, Response } from "express";
import instrutoresS, { TInstrutor } from "../../simuladorBancoDeDados";

export const atualizarInstrutor = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const instrutorAtt: TInstrutor = req.body;

  const instrutorExistente = instrutoresS.find((i: TInstrutor) => i.id === id);

  if (!instrutorExistente) {
    res.status(404).json({
      message: `Instrutor com ID ${id} não encontrado.`,
    });
    return;
  }

  const instrutorEmail = instrutoresS.some(
    (i: TInstrutor) => i.email === instrutorAtt.email && i.id !== id
  );

  if (instrutorEmail) {
    res.status(400).json({
      message: `E-mail ${instrutorAtt.email} já está cadastrado por outro instrutor.`,
    });
    return;
  }

  instrutorExistente.nome = instrutorAtt.nome || instrutorExistente.nome;
  instrutorExistente.idade = instrutorAtt.idade || instrutorExistente.idade;
  instrutorExistente.email = instrutorAtt.email || instrutorExistente.email;

  res.status(200).json({
    message: "Instrutor atualizado com sucesso.",
    instrutor: instrutorExistente,
  });
};
