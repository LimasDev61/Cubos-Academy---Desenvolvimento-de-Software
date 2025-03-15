import { Request, Response, NextFunction } from "express";

export function getData() {
  const date = new Date();
  return date.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
}

export const serverLog = (req: Request, res: Response, next: NextFunction) => {
  const inicio = Date.now();

  res.on("finish", () => {
    const duracao = Date.now() - inicio;
    const dataFormatada = getData();

    console.log(
      `[${dataFormatada}] ${req.method} ${req.url} ${res.statusCode} ${duracao}ms`
    );
  });

  next();
};