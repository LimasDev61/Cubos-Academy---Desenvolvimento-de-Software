import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";
import pool from "../config/bancoDeDados";
import { TUsuario } from "../tipos/TUsuario";

export default class UsuarioControlador {
  async registrar(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Todos os campos são obrigatórios" });
    }

    try {
      const { rows: usuariosCadastrados } = await pool.query<TUsuario>(
        `
        SELECT id FROM usuarios
        WHERE email = $1
        LIMIT 1;  
      `,
        [email]
      );

      const usuarioCadastrado = usuariosCadastrados[0];

      if (usuarioCadastrado) {
        return res.status(400).json({ mensagem: "E-mail já cadastrado" });
      }

      const senhaCriptografada = await bcrypt.hash(senha, 10);

      const { rows: novosUsuariosCadastrados } = await pool.query<
        Omit<TUsuario, "senha">
      >(
        `
        INSERT INTO usuarios (nome, email, senha)
        VALUES ($1, $2, $3)
        RETURNING id, nome, email;  
      `,
        [nome, email, senhaCriptografada]
      );

      const novoUsuario = novosUsuariosCadastrados[0];
      return res.status(201).json(novoUsuario);
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro interno" });
    }
  }
  async logar(req: Request, res: Response) {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Todos os campos são obrigatórios" });
    }

    try {
      const { rows: usuariosCadastrados } = await pool.query<TUsuario>(
        `
        SELECT * FROM usuarios
        WHERE email = $1
        LIMIT 1;  
      `,
        [email]
      );

      const usuarioCadastrado = usuariosCadastrados[0];

      if (!usuarioCadastrado) {
        return res.status(400).json({ mensagem: "E-mail ou senha inválidos" });
      }

      const senhaCadastrada = usuarioCadastrado.senha;

      const senhaConfere = await bcrypt.compare(senha, senhaCadastrada);

      if (!senhaConfere) {
        return res.status(400).json({ mensagem: "E-mail ou senha inválidos" });
      }

      const token = jwt.sign(
        { idUsuarioLogado: usuarioCadastrado.id },
        process.env.JWT_SECRET || "",
        { expiresIn: "1h" }
      );

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro interno" });
    }
  }
}
