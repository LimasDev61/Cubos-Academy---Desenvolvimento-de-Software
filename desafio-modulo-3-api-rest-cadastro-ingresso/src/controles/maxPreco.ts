import { Request, Response } from "express";
import bancoDeDados from "../bancoDeDados";
import Evento from "../modelos/eventos";
import TEvento from "../tipos/Evento";

const converterParaEvento = (evento: TEvento): Evento => {
  return new Evento(
    evento.id,
    evento.nome,
    evento.endereco,
    evento.data,
    evento.preco
  );
};

export const filtrarPreco = (req: Request, res: Response): void => {
  const { maxPreco } = req.query;

  if (!maxPreco) {
    const eventos = bancoDeDados.eventos.map((evento: TEvento) =>
      converterParaEvento(evento)
    );

    res.status(200).json(eventos);
    return;
  }

  const precoMax = Number(maxPreco);

  const eventosConverter = bancoDeDados.eventos
    .map((evento: TEvento) => converterParaEvento(evento))
    .filter((evento: Evento) => evento.getPreco() <= precoMax);

  res.status(200).json(eventosConverter);
};
