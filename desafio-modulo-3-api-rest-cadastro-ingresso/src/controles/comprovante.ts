import { Request, Response } from "express";
import bancoDeDados from "../bancoDeDados";
import fraseSecreta from "../fraseSecreta";
import Usuarios from "../modelos/usuarios";
import TUsuario from "../tipos/Usuario";

export const loginUsuario = (req: Request, res: Response): void => {
  const { email } = req.body;

  const usuario = bancoDeDados.usuarios
  .map((usuarioData: TUsuario) => new Usuarios(usuarioData.nome, usuarioData.email, usuarioData.senha, usuarioData.id))
  .find((usuario) => usuario.getEmail() === email);


  const comprovante = `${fraseSecreta}/${usuario?.getId()}`;

  res.status(200).json({ comprovante });
};
