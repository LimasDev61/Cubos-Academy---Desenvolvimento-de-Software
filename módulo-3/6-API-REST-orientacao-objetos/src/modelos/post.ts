import { v4 as gerarId } from "uuid";
import Autor from "./autor";

type TPost = {
  titulo: string;
  descricao: string;
  autor: Autor;
};

export default class Post {
  readonly id: string;
  titulo: string;
  descricao: string;
  autor: Autor;
  data_criacao: Date;

  constructor(post: TPost) {
    this.id = this.gerarId();
    this.titulo = post.titulo;
    this.descricao = post.descricao;
    this.autor = post.autor;
    this.data_criacao = new Date();
  }

  private gerarId(): string {
    return gerarId();
  }
}
