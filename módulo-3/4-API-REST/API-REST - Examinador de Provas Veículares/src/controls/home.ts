import { Request, Response } from "express";

export function home(_req: Request, res: Response): void {
    res.status(200).json("API de exames de direção");
    return;
}