import { Request, Response } from "express";
import { TFilme } from "../tipos/TFilmes";
import pool from "../config/bancoDeDados";
import { TokenAuxiliar } from "../auxiliares/TokenAuxiliar";

const tokenAuxiliar = new TokenAuxiliar();

export default class LivroControlador {
  async listar(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        return res.status(401).json({ mensagem: "Requisição inválida" });
      }

      const token = authorization.split(" ")[1];

      const idUsuarioLogado = tokenAuxiliar.extrairId(token);

      const { rows: livrosCadastrados } = await pool.query<TFilme>(
        `
        SELECT * FROM filmes WHERE usuario_id = $1  
      `,
        [idUsuarioLogado]
      );

      return res.status(200).json(livrosCadastrados);
    } catch (error) {
      return res.status(500).json({ mensagem: "Erro interno" });
    }
  }
}
