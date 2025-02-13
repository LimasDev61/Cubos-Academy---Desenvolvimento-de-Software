import { badRequestError } from "./erro";

export class NomesExistem extends badRequestError {
  protected mensagens: string;
  constructor(mensagem: string) {
    super(409, mensagem);
    this.mensagens = `Erro: ${mensagem}`;
  }
}
