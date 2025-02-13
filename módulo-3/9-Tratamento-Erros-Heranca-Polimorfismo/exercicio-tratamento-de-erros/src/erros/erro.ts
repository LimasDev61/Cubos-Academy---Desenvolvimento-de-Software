export class badRequestError extends Error {
  readonly statusCode: number;

  constructor(statusCode: number, mensagem: string) {
    super(mensagem);
    this.statusCode = statusCode;
  }
}
