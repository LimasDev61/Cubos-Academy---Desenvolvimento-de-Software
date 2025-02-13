export class BadRequestError extends Error {
  readonly statusCode: number;

  constructor(mensagem: string) {
    super(mensagem);
    this.name = "BadRequestError";
    this.statusCode = 400;
  }
}