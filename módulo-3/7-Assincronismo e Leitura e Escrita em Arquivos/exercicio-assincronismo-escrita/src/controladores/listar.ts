import { Request, Response } from "express";
import fs from "fs/promises";
import TBancoDeDados from "../types/banco-de-dados";
import Lenda from "../model/lendas";

export const listarLendas = async (
  req: Request,
  res: Response
): Promise<void> => {
  const resultado = await fs.readFile("bancoDeDados.json");
  const bancoDeDados: TBancoDeDados = JSON.parse(resultado.toString());

  const lendasCadastradas = bancoDeDados.lendas.map(
    (lenda) =>
      new Lenda(
        lenda.id,
        lenda.titulo,
        lenda.origem,
        lenda.tipo,
        lenda.descricao
      )
  );

  res.status(200).json({ lendasCadastradas });
  return;
};
