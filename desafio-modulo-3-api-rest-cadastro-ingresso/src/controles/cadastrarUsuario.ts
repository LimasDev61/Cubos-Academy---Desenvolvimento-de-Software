import { Request, Response } from "express";
import Usuarios from "../modelos/usuarios";
import criptograrSenha from "../auxiliares/criptografia";
import bancoDeDados from "../bancoDeDados";

export const cadastrarUsuario = (req: Request, res: Response): void => {
  const { nome, email, senha } = req.body;

  const senhaCriptografada = criptograrSenha(senha);

  const newUsuario = new Usuarios(nome, email, senhaCriptografada);

  bancoDeDados.usuarios.push({
    id: newUsuario.getId(),
    nome: newUsuario.getNome(),
    email: newUsuario.getEmail(),
    senha: newUsuario.getSenha(),
  });

  res.status(201).json({
    id: newUsuario.getId(),
    nome: newUsuario.getNome(),
    email: newUsuario.getEmail(),
  });
};
