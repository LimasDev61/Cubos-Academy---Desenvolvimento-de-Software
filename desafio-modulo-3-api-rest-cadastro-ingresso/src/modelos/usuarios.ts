import { geradorId } from "../auxiliares/geradorId";

class Usuarios {
  private id: string;
  private nome: string;
  private email: string;
  private senha: string;

  constructor(nome: string, email: string, senha: string, id?: string) {
    this.id = id || geradorId();
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  public getId(): string {
    return this.id;
  }

  public getNome(): string {
    return this.nome.trim();
  }

  public getEmail(): string {
    return this.email.trim();
  }

  public getSenha(): string {
    return this.senha.trim();
  }

}

export default Usuarios;

