import { Request, Response } from "express";
import { pool } from "../conexao";

export const encontrarEmpresasPorId = async (req: Request, res: Response) => {
    const { id } = req.params
  try {
    const resposta = await pool.query("SELECT * FROM empresas where id = $1", [id]);
    res.json(resposta.rows);
  } catch (error) {
    console.error("Erro ao buscar empresa:", error);
    res.status(500).json({ message: "Erro ao buscar empresa" });
  }
};