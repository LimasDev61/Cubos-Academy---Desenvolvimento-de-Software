import { Request, Response } from "express";
import { inicioApp } from "./inicio";
import { autores } from "../simuladorBD";
export default class AutorControl {
  inicio(req: Request, res: Response): void {
    res.status(200).json(inicioApp(req, res));
  }
  listar(req: Request, res: Response): void {
    res.status(200).json({autores});
  }
}
