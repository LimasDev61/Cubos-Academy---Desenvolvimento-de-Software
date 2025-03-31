import { Request, Response } from "express";
import UserRepository from "../repositories/user-repository";
import User from "../models/user";

export default class CreateUser {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({
        message: "os campos name, email e password são obrigatórios",
      });
      return;
    }

    try {
      const userRepository = new UserRepository();

      const emailExists = await userRepository.findByEmail(email);

      if (emailExists) {
        res.status(400).json({
          message: "email informado já existe",
        });
        return;
      }

      const user = new User({
        name,
        email,
        password,
      });

      await userRepository.create(user);

      res.status(201).json(user);
      return;
    } catch (error) {
      const erro = error as Error;
      res.status(500).json({ error: erro.message });
      return;
    }
  }
}
