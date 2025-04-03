import { Request, Response } from "express";
import UserRepository from "../repositories/user-repository";

export class ListUsers {
  async list(req: Request, res: Response) {
    const { authorization } = req.headers;
    try {
      const userRepository = new UserRepository();
      const users = await userRepository.find();
      res.status(200).json(users);
      return;
    } catch (error) {
      const erro = error as Error;
      res.status(500).json({ error: erro.message });
      return;
    }
  }
}
