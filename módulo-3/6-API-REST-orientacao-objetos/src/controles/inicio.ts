import { Request, Response } from "express";

export const inicioApp = (req: Request, res: Response): void => {
    res.status(200).send("Olá, seja bem-vindo!");
}