class Evento {
  private id: string;
  private nome: string;
  private endereco: string;
  private data: string;
  private preco: number;

  constructor(
    id: string ,
    nome: string,
    endereco: string,
    data: string,
    preco: number
  ) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.data = data;
    this.preco = preco;
  }
  public getId(): string {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public getEndereco(): string {
    return this.endereco;
  }

  public getData(): string {
    return this.data;
  }

  public getPreco(): number {
    return this.preco;
  }
}

export default Evento;
