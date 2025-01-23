import { NextFunction, Request, Response } from "express";

export function validar(req: Request, res: Response, next: NextFunction) {
  const {
    examinador,
    candidato,
    quantidade_eliminatorias,
    quantidade_graves,
    quantidade_medias,
    quantidade_leves,
  } = req.body;

  if (
    !examinador ||
    !candidato ||
    quantidade_eliminatorias === undefined ||
    quantidade_graves === undefined ||
    quantidade_medias === undefined ||
    quantidade_leves === undefined
  ) {
    res
      .status(400)
      .json({ mensagem: "Campo(s) obrigatório(s) não enviado(s)" });
    return;
  }

  next();
}
