import { Request, Response } from "express";

export const inicio = (req: Request, res: Response) => {
  res.send("Olá, seja bem-vindo! :)");
};
