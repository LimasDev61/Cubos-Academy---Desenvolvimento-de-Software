import { Request, Response, NextFunction } from "express";
import { TInstrutor } from "../../simuladores-de-dados/simulador-banco-dados";
import { dadosUnicos } from "./verificar-dados-cadastro";

let instrutoresS: TInstrutor[] = [];

export const verificadorInstrutores = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const instrutores: TInstrutor[] = req.body;

  if (!Array.isArray(instrutores) || instrutores.length === 0) {
    res.status(400).json({
      message: "É necessário enviar uma lista de instrutores válida.",
    });
    return;
  }

  const erros: string[] = [];

  for (const instrutor of instrutores) {
    try {
      await new Promise<void>((resolve, reject) => {
        dadosUnicos({ body: instrutor } as Request, res, (err) => {
          if (err) return reject(err);
          resolve();
        });
      });

      const instrutorExistente = instrutoresS.find(
        (existingInstrutor: TInstrutor) =>
          existingInstrutor.email === instrutor.email
      );

      if (instrutorExistente) {
        erros.push(
          `Instrutor com o e-mail ${instrutor.email} já está cadastrado.`
        );
        continue;
      }

      instrutoresS.push(instrutor);
    } catch (err) {
      erros.push(`Erro ao validar o instrutor com o e-mail ${instrutor.email}`);
    }
  }

  if (erros.length > 0) {
    res.status(400).json({ errors: erros });
    return;
  }

  next();
};
