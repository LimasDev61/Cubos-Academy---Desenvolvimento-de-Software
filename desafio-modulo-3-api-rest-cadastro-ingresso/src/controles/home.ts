import { Request, Response } from "express";

export function home(_req: Request, res: Response): void {
    res.status(200).json({ mensagem: "API de vendas de ingressos" } );
    return;
}