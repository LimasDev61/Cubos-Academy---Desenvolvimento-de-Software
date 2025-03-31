import { Request, Response } from "express";
import UserRepository from "../repositories/user-repository";

export class ListUsers {
  async list(req: Request, res: Response) {
    const userRepository = new UserRepository();
    const users = await userRepository.find();
    res.status(200).json(users);
  }
}
