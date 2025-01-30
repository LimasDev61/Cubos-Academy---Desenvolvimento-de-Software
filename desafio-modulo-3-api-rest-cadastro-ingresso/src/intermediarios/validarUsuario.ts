import { Request, Response, NextFunction } from "express";
import bancoDeDados from "../bancoDeDados";
import TUsuario from "../tipos/Usuario";
import Usuarios from "../modelos/usuarios";

export const validarUsuario = (req: Request, res: Response, next: NextFunction): void => {
    const {
        nome,
        email,
        senha,
    } = req.body;
  const { id } = req.params;

  if(!nome || !email || !senha) {
    res.status(400).json({ mensagem: "Todos os campos são obrigatórios" })
    return;
  }

  const converteDados = bancoDeDados.usuarios.map((usuario: TUsuario) => new Usuarios(usuario.nome, usuario.email, usuario.senha));
  const checarEmail = converteDados.some((usuario: Usuarios) => usuario.getEmail() === email && usuario.getId() !== id);


  if(checarEmail) {
    res.status(400).json({ mensagem: "E-mail já cadastrado" })
    return;
  }

  next();
  }