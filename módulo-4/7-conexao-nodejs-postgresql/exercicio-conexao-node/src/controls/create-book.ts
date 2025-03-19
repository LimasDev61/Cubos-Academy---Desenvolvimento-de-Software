import { Request, Response } from "express";
import { pool } from "../pool";
import { error } from "console";
import { TBook } from "../types/books";

export const createBook = async (req: Request, res: Response): Promise<void> => {
  const { title, authorId } = req.body;

  if (!title || !authorId) {
    res.status(400).json({
      message: "Todos os campos devem ser preenchidos",
    });
    return;
  }

  try {
    const query = `
      INSERT INTO livros (titulo, autor_id)
      VALUES ($1, $2)
      RETURNING *;
    `;

    const addBook = await pool.query<TBook>(query, [title, authorId]);

    res.status(201).json({
      message: "Livro criado com sucesso",
      book: addBook.rows[0],
    });
    return;
  } catch {
    console.error("Erro: ", error);

    res.status(500).json({
      message: "Ocorreu um erro ao criar o livro",
    });
  }
};
