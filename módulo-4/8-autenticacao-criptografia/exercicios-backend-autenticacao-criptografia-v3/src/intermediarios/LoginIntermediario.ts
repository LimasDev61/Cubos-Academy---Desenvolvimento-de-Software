import * as jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { TUsuario } from "../tipos/TUsuario";
import pool from "../config/bancoDeDados";
import { TokenAuxiliar } from "../auxiliares/TokenAuxiliar";

const tokenAuxiliar = new TokenAuxiliar();

export default class LoginIntermediario {
  async validarLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        return res.status(401).json({ mensagem: "Requisição inválida" });
      }

      const token = authorization.split(" ")[1];

      const idUsuarioLogado = tokenAuxiliar.extrairId(token);

      const { rows: usuariosCadastrados } = await pool.query<
        Omit<TUsuario, "senha">
      >(
        `
        SELECT id, nome, email FROM usuarios
        WHERE id = $1
        LIMIT 1;
      `,
        [idUsuarioLogado]
      );

      const usuarioCadastrado = usuariosCadastrados[0];

      if (!usuarioCadastrado) {
        return res.status(401).json({ mensagem: "Requisição inválida" });
      }

      next();
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ mensagem: "Requisição inválida" });
      }
      return res.status(500).json({ mensagem: "Erro interno" });
    }
  }
}
