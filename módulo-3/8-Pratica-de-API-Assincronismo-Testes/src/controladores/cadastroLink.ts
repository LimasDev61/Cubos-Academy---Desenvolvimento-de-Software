import { Request, Response } from "express";
import { addDados, lerDados } from "../utils/arquivos";
import Link from "../modelos/link";
export default class CadastroLink {
  async control(req: Request, res: Response) {
    const { url, id } = req.body;

    const bdDados = await lerDados();

    const linkExiste = bdDados.find((link: Link) => link.id === id);

    if (linkExiste) {
      res.status(409).json({ error: "Indentificador já cadastrado" });
      return;
    }

    const novoLink = new Link(id, url);
    await addDados(novoLink);

    res.status(201).json({ message: novoLink });
  }
}
