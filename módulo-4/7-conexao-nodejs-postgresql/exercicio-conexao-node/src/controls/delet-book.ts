import { Request, Response } from "express";
import { pool } from "../pool";

export const deleteBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const query = `
            DELETE FROM livros
            WHERE id = $1
            RETURNING *
        `;

    const deletedBook = await pool.query(query, [id]);

    if (deletedBook.rowCount === 0) {
      res.status(404).json({ message: "Livro não encontrado" });
      return;
    }

    res.status(200).json({
      message: "Livro excluido com sucesso",
      book: deletedBook.rows[0],
    });
    return;
  } catch (error) {
    console.error("Erro ao excluir o livro:", error);
    res.status(500).json({ message: "Ocorreu um erro ao excluir o livro" });
  }
};
