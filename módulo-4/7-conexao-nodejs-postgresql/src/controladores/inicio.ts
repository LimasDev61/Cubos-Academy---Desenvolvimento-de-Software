import { Request, Response } from "express";
import { pool } from "../conexao";

export const inicio = async (req: Request, res: Response) => {
  try {
    const resposta = await pool.query("SELECT * FROM empresas");
    res.json(resposta.rows);
  } catch (error) {
    console.error("Erro ao buscar empresas:", error);
    res.status(500).json({ message: "Erro ao buscar empresas" });
  }
};

