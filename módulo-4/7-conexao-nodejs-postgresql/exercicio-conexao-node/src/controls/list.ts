import { Request, Response } from "express";
import { pool } from "../pool";
import { TBook } from "../types/books";

export const listBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const query = `
            SELECT livros.id, livros.titulo, livros.autor_id, autores.nome AS autor
            FROM livros
            JOIN autores ON livros.autor_id = autores.id
        `;

    const books = await pool.query<TBook>(query);

    res
      .status(200)
      .json({ message: "Livros listados com sucesso", books: books.rows });
  } catch (error) {
    console.error("Erro ao listar os livros:", error);
    res.status(500).json({ message: "Ocorreu um erro ao listar os livros" });
  }
};
