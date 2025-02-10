import fs from "fs/promises";
import { Request, Response } from "express";
import Link from "../modelos/link";
import { contarVisitas, lerDados } from "../utils/arquivos";

export default class ObterLink {
    async control(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        const bdDados = await lerDados();

        const linkExiste = bdDados.find((link: Link) => link.id === id);

        if (!linkExiste) {
            res.status(404).json({ error: "Indentificador não cadastrado" });
            return;
        }

        await contarVisitas(linkExiste.id);

        res.status(200).json({ message: linkExiste });
    }
}