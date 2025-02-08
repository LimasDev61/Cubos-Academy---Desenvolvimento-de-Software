export default class Lenda {
  private id: number;
  private titulo: string;
  private origem: string;
  private tipo: string;
  private descricao: string;

  constructor(
    id: number,
    titulo: string,
    origem: string,
    tipo: string,
    descricao: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.origem = origem;
    this.tipo = tipo;
    this.descricao = descricao;
  }

  getId(): number {
    return this.id;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getOrigem(): string {
    return this.origem;
  }

  getTipo(): string {
    return this.tipo;
  }

  getDescricao(): string {
    return this.descricao;
  }
}
