import { Request, Response } from "express";
import UserRepository from "../repositories/user-repository";
import bcrypt from "bcrypt";

export default class LoginController {
    async login(req: Request, res: Response) {

        const { email, password } = req.body;

        if(!email || !password) {
            res.status(400).json({ message: "Os campos login e password são obrigatórios" });
            return;
        }

        try {
            const userRepository = new UserRepository();

            const user = await userRepository.findByEmail(email);

            if(!user) {
                res.status(401).json({ message: "Email ou Senha incorretos" });
                return;
            }

            const validPassword = await bcrypt.compare(password, user.password);

            if(!validPassword) {
                res.status(401).json({ message: "Email ou Senha incorretos" });
                return;
            }

            res.status(200).json({ id: user.id, name: user.name, email: user.email });
        } catch (error) { 
            const erro = error as Error;
            res.status(500).json({ error: erro.message });
            return;
        }
    }
} 