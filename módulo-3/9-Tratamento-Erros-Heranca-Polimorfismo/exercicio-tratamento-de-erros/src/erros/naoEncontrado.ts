import { badRequestError } from "./erro";

export class NaoEncontradoError extends badRequestError {
  protected mensagens: string;
  constructor(mensagem: string) {
    super(404, mensagem);
    this.mensagens = "Nome não encontrado no banco de dados!";
  }
}
