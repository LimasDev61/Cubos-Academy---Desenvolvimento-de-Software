import { Request, Response } from "express";
import pool from "../conexao";

export const inicio = async (req: Request, res: Response) => {
  try {
    const query = `
			select f.id, f.cep, f.rua, f.cidade, f.estado, f.pais, f.empresa_id, e.nome, e.site 
			from empresas as e
			left join filiais as f on e.id = f.empresa_id;
		`
		const resposta = await pool.query(query)
  } catch (error) {
    console.log(error);
  }  
};
