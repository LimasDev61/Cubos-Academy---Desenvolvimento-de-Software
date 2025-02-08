import { Request, Response } from "express";
import fs from "fs/promises";
import TBancoDeDados from "../types/banco-de-dados";
import Lenda from "../model/lendas";

export const cadastrarLendas = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { titulo, origem, tipo, descricao } = req.body;

  const resultadoLeitura = await fs.readFile("bancoDeDados.json");
  const bancoDeDados: TBancoDeDados = JSON.parse(resultadoLeitura.toString());

  const proximoId =
    bancoDeDados.lendas.length > 0
      ? Math.max(...bancoDeDados.lendas.map((lenda) => lenda.id))
      : 0;

  const novoId = proximoId + 1;
  const novaLenda = new Lenda(proximoId, titulo, origem, tipo, descricao);

  bancoDeDados.lendas.push({
    id: novoId,
    titulo: novaLenda.getTitulo(),
    origem: novaLenda.getOrigem(),
    tipo: novaLenda.getTipo(),
    descricao: novaLenda.getDescricao(),
  });

  await fs.writeFile(
    "bancoDeDados.json",
    JSON.stringify(bancoDeDados, null, 2)
  );

  res.status(201).json({ message: "Lenda cadastrada!" });
};
