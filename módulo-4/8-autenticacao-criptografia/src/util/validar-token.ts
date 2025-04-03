import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function validarToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    res.status(401).json({ message: "Não autorizado" });
    return;
  }

  const token = authorization.split(" ")[1];

  if (!process.env.JWT_SECRET) {
    res.status(500).json({ message: "JWT_SECRET is not defined" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    if(!decoded || typeof decoded !== "object" || !("id" in decoded)) {
      res.status(403).json({ message: "Token inválido" });
      return;
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Token inválido ou expirado" });
    return;
  }
}
