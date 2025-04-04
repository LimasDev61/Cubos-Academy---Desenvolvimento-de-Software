import { Response, Request } from "express";
import UserRepository from "../repositories/user-repository";

export default class DeleteUser {
  async delete(req: Request, res: Response) {
    const id = req.params.id.trim();

    if (!id) {
      res.status(400).json({ message: "O id do usuário é obrigatório" });
      return;
    }
    try {
      const userRepository = new UserRepository();
      await userRepository.delete(id);
      res.status(200).json({ message: "Usuário deletado com sucesso" });
      return;
    } catch (error) {
      const erro = error as Error;
      res.status(500).json({ error: erro.message });
      return;
    }
  }
}
