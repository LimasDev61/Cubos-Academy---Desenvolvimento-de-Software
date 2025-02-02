import { Request, Response } from "express";
import { inicioApp } from "./inicio";
import { autores } from "../simuladorBD";
export default class AutorControl {
  inicio(req: Request, res: Response): void {
    inicioApp(req, res);
  }
  listar(req: Request, res: Response): void {
    res.status(200).json({ autores });
  }

  detalharAutor(req: Request, res: Response): void {
    const { id } = req.params;

    const autor = autores.find((autor) => autor.id === id);

    if (!autor) {
      res.status(404).json({ error: "Autor não encontrado" });
      return;
    }
  }
}
