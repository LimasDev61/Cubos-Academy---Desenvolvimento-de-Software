import { Request, Response } from "express";
import { pool } from "../pool";
import { TBook } from "../types/books";

export const editBook = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, authorId } = req.body;

  if (!title || !authorId) {
    res.status(400).json({ message: "Todos os campos devem ser preenchidos" });
    return;
  }

  try {
    const query = `
            UPDATE livros
            SET titulo = $1, autor_id = $2
            WHERE id = $3
            RETURNING *;
        `;

    const updatedBook = await pool.query<TBook>(query, [title, authorId, id]);

    res.status(200).json({
      message: "Livro atualizado com sucesso",
      book: updatedBook.rows[0],
    });
    return;
  } catch (error) {
    console.error("Erro ao atualizar o livro:", error);
    res.status(500).json({ message: "Ocorreu um erro ao atualizar o livro" });
    return;
  }
};
