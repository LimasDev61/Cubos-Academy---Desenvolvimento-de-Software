import { Response, Request, NextFunction } from "express";
import bancoDeDados from "../bancoDeDados";
import TUsuario from "../tipos/Usuario";
import Usuarios from "../modelos/usuarios";
import criptograrSenha from "../auxiliares/criptografia";

export const passLogin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { email, senha } = req.body;

  const converteDados = bancoDeDados.usuarios.map(
    (usuario: TUsuario) =>
      new Usuarios(usuario.nome, usuario.email, usuario.senha)
  );

  if (!email || !senha) {
    res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
    return;
  }

  const senhaCriptografada = criptograrSenha(senha);

  const checarUsuario = converteDados.find(
    (usuario: Usuarios) =>
      usuario.getEmail() === email && usuario.getSenha() === senhaCriptografada
  );

  if (!checarUsuario) {
    res.status(400).json({ mensagem: "E-mail ou senha inválidos" });
    return;
  }

  next();
};

