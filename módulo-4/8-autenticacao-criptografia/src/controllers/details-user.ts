import { Request, Response } from "express";
import UserRepository from "../repositories/user-repository";

export class DetailsUser {
  async details(req: Request, res: Response) {
    const id = req.params.id.trim();

    try {
      const userRepository = new UserRepository();
      const user = await userRepository.findById(id);

      if (!user) {
        res.status(404).json({ message: "Usuário não encontrado" });
        return;
      }
      res.status(200).json(user);
      return;
    } catch (error) {
      const erro = error as Error;
      res.status(500).json({ error: erro.message });
      return;
    }
  }
}
