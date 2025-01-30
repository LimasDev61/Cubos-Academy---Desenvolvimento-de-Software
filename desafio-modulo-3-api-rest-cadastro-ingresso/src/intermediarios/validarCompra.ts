import { Request, Response, NextFunction } from "express";
import Evento from "../modelos/eventos";
import bancoDeDados from "../bancoDeDados";
import TEvento from "../tipos/Evento";

export const validarCamposCompra = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { idEvento } = req.body;

  if (!idEvento) {
    res
      .status(400)
      .json({ mensagem: "O identificador do evento é obrigatório" });
    return;
  }

  const eventoEncontrado = bancoDeDados.eventos.find(
    (evento: TEvento) =>
      new Evento(
        evento.id,
        evento.nome,
        evento.endereco,
        evento.data,
        evento.preco
      ).getId() === idEvento
  );

  if (!eventoEncontrado) {
    res.status(404).json({ mensagem: "Evento não encontrado" })
    return;
  }

  next();
};
