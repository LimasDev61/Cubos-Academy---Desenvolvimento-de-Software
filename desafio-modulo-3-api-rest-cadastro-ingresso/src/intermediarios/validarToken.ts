import { Request, Response, NextFunction } from "express";
import bancoDeDados from "../bancoDeDados";
import Usuarios from "../modelos/usuarios";
import TUsuario from "../tipos/Usuario";

export const validarToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const comprovante = req.query.comprovante as string;

  if (!comprovante) {
    res.status(401).json({ mensagem: "Falha na autenticação" })
    return;
  }

  const partesComprovante = comprovante.split('/');
  const idUsuario = partesComprovante[1];

  if (!idUsuario) {
    res.status(401).json({ mensagem: "Falha na autenticação" })
    return;
  }

  const usuarioEncontrado = bancoDeDados.usuarios.find(
    (usuario: TUsuario) => new Usuarios(
        usuario.nome,
        usuario.email,
        usuario.senha,
        usuario.id
      ).getId() === idUsuario
  );

  if (!usuarioEncontrado) {
    res.status(401).json({ mensagem: "Falha na autenticação" })
    return;
  }

  next();
};



