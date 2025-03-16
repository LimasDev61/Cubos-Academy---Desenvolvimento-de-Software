import { Request, Response } from "express";
import { pool } from "../conexao";

export const encontrarEmpresasPorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const query = `
      SELECT f.id, f.cep, f.rua, f.cidade, f.estado, f.pais, f.empresa_id, e.nome, e.site
      FROM empresas e
      LEFT JOIN filiais f ON e.id = f.empresa_id
      WHERE e.id = $1;
      `;

    const respostaDaPesquisa = await pool.query(query, [id]);

    const { empresa_id, nome, site } = respostaDaPesquisa.rows[0];

    const filiais = respostaDaPesquisa.rows.map((filiais) => ({
      id: filiais.id,
      cep: filiais.cep,
      rua: filiais.rua,
      cidade: filiais.cidade,
      estado: filiais.estado,
      pais: filiais.pais,
    }));

    const empresas = {
      id: empresa_id,
      nome,
      site,
      filiais
    };

    res.status(200).json(empresas);
  } catch (error) {
    console.error("Erro ao buscar empresa:", error);
    res.status(500).json({ message: "Erro ao buscar empresa" });
  }
};
