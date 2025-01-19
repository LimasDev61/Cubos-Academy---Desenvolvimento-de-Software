import { NextFunction, Request, Response } from "express";

export function validarFiltro(req: Request, res: Response, next: NextFunction) {
  const { idadeMaxima } = req.query;
  const start = Date.now();

  const idadeMaximaNumero = Number(idadeMaxima);

  const getFormattedDate = (): string => {
    const date = new Date();
    return date.toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    const formaDate = getFormattedDate();
    console.log(`[${formaDate}] Tempo de resposta: ${duration}ms - filtro de idade: ${idadeMaximaNumero}`);
  });

  if (isNaN(idadeMaximaNumero)) {
    const formaDate = getFormattedDate();
    res.status(400).send(`[${formaDate}] Idade máxima inválida`);
  }

  next();
}

