import { Request, Response } from "express";
import instrutoresS, { TInstrutor } from "../../simuladores-de-dados/simuladorBancoDeDados";

export const excluirInstrutor = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);

  const instrutorExistenteIindice = instrutoresS.findIndex(
    (i: TInstrutor) => i.id === id
  );

  if (instrutorExistenteIindice === -1) {
    res.status(404).json({
      message: `Instrutor com ID ${id} não encontrado.`,
    });
    return;
  }

  const intrutor_excluido: TInstrutor = instrutoresS[instrutorExistenteIindice];

  instrutoresS.splice(instrutorExistenteIindice, 1);

  res.status(200).json({
    message: "Instrutor excluído com sucesso.",
    instrutor: intrutor_excluido,
  });
};
