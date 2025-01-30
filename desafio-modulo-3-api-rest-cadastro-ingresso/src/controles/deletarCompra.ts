import { Request, Response } from "express";
import bancoDeDados from "../bancoDeDados";
import TCompra from "../tipos/Compra";
import TEvento from "../tipos/Evento";

export const cancelarCompra = (req: Request, res: Response): void => {
  const comprovante = req.query.comprovante as string;
  const idUsuario = comprovante.trim().split("/")[1];
  const compraId = req.params.id;

  const compra = bancoDeDados.compras.find(
    (compra: TCompra) =>
      compra.id === compraId && compra.id_usuario === idUsuario
  );

  if (!compra) {
    res.status(404).json({ mensagem: "Compra não encontrada" });
    return;
  }

  const evento = bancoDeDados.eventos.find(
    (evento: TEvento) => evento.id === compra.id_evento
  );

  if (!evento) {
    res.status(404).json({ mensagem: "Evento não encontrado" });
    return;
  }

  const index = bancoDeDados.compras.indexOf(compra);
  bancoDeDados.compras.splice(index, 1);

  res.status(204).send();
};
