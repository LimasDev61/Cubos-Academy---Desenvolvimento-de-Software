import { Request, Response } from "express";
import cowsay from "cowsay";

export const appInit = (req: Request, res: Response) => {
  const mensagem = "Bem vindo, MUUUUUUUUUUH!";

  const mensagemDaVaca = cowsay.say({
    text: mensagem,
  });

  res.type("text/plain").status(200).send(mensagemDaVaca);
};
