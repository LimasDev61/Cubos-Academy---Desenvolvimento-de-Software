import { Request, Response } from "express";
import { inicioApp } from "./inicio";
import { autores, posts } from "../simuladorBD";
import Autor from "../modelos/autor";
import Post from "../modelos/post";
export default class postControl {
  listar(req: Request, res: Response): void {
    res.json({ posts });
    return;
  }

  detalharPost(req: Request, res: Response): void {
    const { id } = req.params;

    const post = posts.find((post) => post.id === id.trim());

    if (!post) {
      res.status(404).json({ error: "Post nao encontrado" });
      return;
    }

    res.status(200).json({ post });
    return;
  }

  cadastrar(req: Request, res: Response): void {
    const { titulo, descricao, autor_id } = req.body;

    if (!titulo || !descricao || !autor_id) {
      res
        .status(400)
        .json({ error: "Necessario informar o titulo, descricao e autor" });
      return;
    }

    const tituloExiste = posts.find((post) => post.titulo === titulo.trim());

    if (tituloExiste) {
      res.status(400).json({ error: "Titulo ja existe" });
      return;
    }

    const autor = autores.find((autor) => autor.id === autor_id.trim());

    if (!autor) {
      res.status(400).json({ error: "Autor nao encontrado" });
      return;
    }

    const post = new Post({
      titulo,
      descricao,
      autor,
    });

    posts.push(post);

    res.status(201).json({ post });
  }

  editar(req: Request, res: Response): void {
    const { id } = req.params;
    const { titulo, descricao } = req.body;

    const post = posts.find((post) => post.id === id.trim());

    if (!post) {
      res.status(404).json({ error: "Post nao encontrado" });
      return;
    }

    post.titulo = titulo;
    post.descricao = descricao;

    res.status(204).json();
  }

  excluir(req: Request, res: Response): void {
    const { id } = req.params;

    const post = posts.findIndex((post) => post.id === id.trim());

    if (post === -1) {
      res.status(404).json({ error: "Post nao encontrado" });
      return;
    }

    posts.splice(post, 1);

    res.status(204).json();
  }
}
