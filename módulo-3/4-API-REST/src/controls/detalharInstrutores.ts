import { Request, Response } from "express";

export const startServer = (_req: Request, res: Response): void => {
  res.status(200).send("<h1>Olá, mundo!</h1>");
};
