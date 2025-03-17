import { Request, Response } from "express";
import { pool } from "../conexao";

export const encontrarFuncionarios = async (req: Request, res: Response) => {
  const { paginaPadrao = 1, limitePadrao = 10 } = req.query;

  const offset =
    paginaPadrao === 1 ? 0 : (Number(paginaPadrao) - 1) * Number(limitePadrao);

  try {
    const query = `
            SELECT * FROM pessoas ORDER BY id ASC LIMIT $1 OFFSET $2;
        `;

    const { rows, rowCount } = await pool.query(query, [limitePadrao, offset]);

    const totalRegistrosTabela = await pool.query(
      "SELECT COUNT(*) FROM pessoas"
    );

    const resposta = {
      paginaPadrao,
      limitePadrao,
      totalRegistrosPesquisados: rowCount,
      totalRegistrosTabela: Number(totalRegistrosTabela.rows[0].count),
      funcionarios: rows,
    };

    if (resposta) {
      res.status(200).json(resposta);
      return;
    }
  } catch (error) {
    console.error("Erro ao buscar empresas:", error);
    res.status(500).json({ message: "Erro ao buscar empresas" });
  }
};
