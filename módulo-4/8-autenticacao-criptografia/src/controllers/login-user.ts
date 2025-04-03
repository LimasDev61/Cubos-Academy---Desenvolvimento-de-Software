import { Request, Response } from "express";
import UserRepository from "../repositories/user-repository";
import bcrypt from "bcrypt";
import { gerarToken } from "../util/gerar-token";

export default class LoginController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(400)
        .json({ message: "Os campos login e password são obrigatórios" });
      return;
    }

    try {
      const userRepository = new UserRepository();

      const user = await userRepository.findByEmail(email);

      if (!user) {
        res.status(401).json({ message: "Email ou Senha incorretos" });
        return;
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        res.status(401).json({ message: "Email ou Senha incorretos" });
        return;
      }

      const gerarTokens = gerarToken(user.id);

      res.status(200).json({ token: gerarTokens });
    } catch (error) {
      const erro = error as Error;
      res.status(500).json({ error: erro.message });
      return;
    }
  }
}
