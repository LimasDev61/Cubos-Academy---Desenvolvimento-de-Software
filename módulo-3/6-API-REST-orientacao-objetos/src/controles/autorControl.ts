import { Request, Response } from "express";
import { inicioApp } from "./inicio";
import { autores } from "../simuladorBD";
import Autor from "../modelos/autor";
export default class AutorControl {
  inicio(req: Request, res: Response): void {
    inicioApp(req, res);
  }
  listar(req: Request, res: Response): void {
    res.status(200).json({ autores });
  }

  detalharAutor(req: Request, res: Response): void {
    const { id } = req.params;

    const autor = autores.find((autor) => autor.id === id.trim());

    if (!autor) {
      res.status(404).json({ error: "Autor não encontrado" });
      return;
    }
  }

  cadastrar(req: Request, res: Response): void {
    const { nome, idade } = req.body;

    if (!nome || !idade) {
      res.status(400).json({ error: "Necessario informar o nome e idade" });
      return;
    }

    const autorExiste = autores.find((autor) => autor.nome === nome);

    if (autorExiste === nome) {
      res.status(400).json({ error: "Autor ja existe" });
      return;
    }

    const autor = new Autor({
      nome,
      idade,
    });

    autores.push(autor);

    res.status(201).json({ autor });
  }

  editar(req: Request, res: Response): void {
    const { id } = req.params;
    const { nome, idade } = req.body;

    const autor = autores.find((autor) => autor.id === id.trim());

    if (!autor) {
      res.status(404).json({ error: "Autor não encontrado" });
      return;
    }

    autor.nome = nome || autor.nome;
    autor.idade = idade || autor.idade;

    if (!nome || !idade) {
      res.status(400).json({ error: "Necessario informar o nome e idade" });
      return;
    }

    res.status(204).json({ autor });
    return;
  }

  excluir(req: Request, res: Response): void {
    const { id } = req.params;

    const autor = autores.findIndex((autor) => autor.id === id.trim());

    if (autor === -1) {
      res.status(404).json({ error: "Autor nao encontrado" });
      return;
    }

    autores.splice(autor, 1);

    res.status(204).json({ autor });
  }
}
