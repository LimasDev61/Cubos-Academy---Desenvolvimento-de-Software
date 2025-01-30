import { Request, Response } from "express";
import bancoDeDados from "../bancoDeDados";
import TEvento from "../tipos/Evento";
import Evento from "../modelos/eventos";
import TUsuario from "../tipos/Usuario";
import Compras from "../modelos/compras";

export const criarCompra = (req: Request, res: Response): void => {
  const { idEvento } = req.body;
  const comprovante = req.query.comprovante as string;

  const encontrarEvento = bancoDeDados.eventos.find(
    (evento: TEvento) =>
      new Evento(
        evento.id,
        evento.nome,
        evento.endereco,
        evento.data,
        evento.preco
      ).getId() === idEvento
  );

  const encontrarUsuario = bancoDeDados.usuarios.find((usuario: TUsuario) => {
    const usuarioId = comprovante.trim().split("/")[1];
    return usuario.id === usuarioId;
  });
  
  const novaCompra = new Compras("", encontrarUsuario!.id, encontrarEvento!.id);

  bancoDeDados.compras.push({
    id: novaCompra.getId(),
    id_usuario: novaCompra.getIdUsuario(),
    id_evento: novaCompra.getIdEvento(),
  });

  res.status(201).json({
    id: novaCompra.getId(),
    id_usuario: novaCompra.getIdUsuario(),
    id_evento: novaCompra.getIdEvento(),
  });
};