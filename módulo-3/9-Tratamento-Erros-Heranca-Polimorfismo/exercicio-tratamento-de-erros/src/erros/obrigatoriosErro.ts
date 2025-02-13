import { badRequestError } from "./erro";

export class ObrigatoriosError extends badRequestError {
  protected mensagens: string;
  constructor(mensagem: string) {
    super(400, mensagem);
    this.mensagens = `Erro: ${mensagem}`;
  }
}
