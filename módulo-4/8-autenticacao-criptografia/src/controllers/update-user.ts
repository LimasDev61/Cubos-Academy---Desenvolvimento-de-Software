import { Request, Response } from "express";
import UserRepository from "../repositories/user-repository";

export class UpdateUser {
  async update(req: Request, res: Response) {
    const id = req.params.id.trim();
    const { name, email, password } = req.body;

    if (!id) {
      res.status(400).json({ message: "O id do usuário é obrigatório" });
      return;
    }

    if (!name && !email && !password) {
      res
        .status(400)
        .json({ message: "Os campos name, email e password são obrigatórios" });
      return;
    }

    try {
      const userRepository = new UserRepository();
      await userRepository.update(id, { name, email, password });
      res.status(200).json({ message: "Usuário atualizado com sucesso" });
      return;
    } catch (error) {
      const erro = error as Error;
      res.status(500).json({ error: erro.message });
      return;
    }
  }
}
