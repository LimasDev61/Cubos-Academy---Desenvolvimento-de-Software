import { Request, Response } from "express";
import cowsay from "cowsay";

export const inicioApp = (req: Request, res: Response): void => {
  const mensagem =
    "Olá, seja bem-vindo ao exercício de Leitura e Escrita de Arquivos!";

  const mensagemCow = cowsay.say({
    text: mensagem,
  });

  res.type("text/plain").status(200).send(mensagemCow);
};
