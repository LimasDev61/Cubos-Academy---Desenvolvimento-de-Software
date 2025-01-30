import { Request, Response } from "express";
import bancoDeDados from "../bancoDeDados";
import TCompra from "../tipos/Compra";
import Compras from "../modelos/compras";
import TEvento from "../tipos/Evento";

export const procurarCompras = (req: Request, res: Response): void => {
  const comprovante = req.query.comprovante as string;
  const idUsuario = comprovante.trim().split("/")[1];

  const usuarioCompras = bancoDeDados.compras.filter(
    (compra: TCompra) =>
      new Compras(compra.id, compra.id_usuario, compra.id_evento).getIdUsuario() === idUsuario
  );

  const comprasDetalhadas = usuarioCompras.map((compra: TCompra) => {
    const evento = bancoDeDados.eventos.find((evento: TEvento) => evento.id === compra.id_evento);

    if (evento) {
      return {
        idCompra: compra.id,
        idEvento: evento.id,
        nome: evento.nome,
        endereco: evento.endereco,
        data: evento.data,
        preco: evento.preco,
      };
    }
    return null;
  }).filter(Boolean);

  res.status(200).json(comprasDetalhadas);
};
