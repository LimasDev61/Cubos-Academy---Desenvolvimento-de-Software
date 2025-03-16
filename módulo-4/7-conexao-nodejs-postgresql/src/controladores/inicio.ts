import { Request, Response } from "express";
import { pool } from "../conexao";

export const inicio = async (req: Request, res: Response) => {
  try {
    const query = `
      SELECT f.id, f.cep, f.rua, f.cidade, f.estado, f.pais, f.empresa_id, e.nome, e.site
      FROM empresas e
      LEFT JOIN filiais f ON e.id = f.empresa_id
      `;

    const respostaDaPesquisa = await pool.query(query);

    const filiais = respostaDaPesquisa.rows.map((filaial) => ({
      id: filaial.id,
      cep: filaial.cep,
      rua: filaial.rua,
      cidade: filaial.cidade,
      estado: filaial.estado,
      pais: filaial.pais,
      empresa: {
        id: filaial.empresa_id,
        nome: filaial.nome,
        site: filaial.site,
      },
    }));

    res.status(200).json(filiais);
    return;
  } catch (error) {
    console.error("Erro ao buscar empresas:", error);
    res.status(500).json({ message: "Erro ao buscar empresas" });
  }
};
