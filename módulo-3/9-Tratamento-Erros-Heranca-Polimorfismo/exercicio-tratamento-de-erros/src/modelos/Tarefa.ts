import { v4 as uuidv4 } from "uuid";

export default class Tarefa {
  id: string;
  nome: string;
  descricao: string;

  constructor(nome: string, descricao: string) {
    this.id = uuidv4();
    this.nome = nome;
    this.descricao = descricao;
  }
}
