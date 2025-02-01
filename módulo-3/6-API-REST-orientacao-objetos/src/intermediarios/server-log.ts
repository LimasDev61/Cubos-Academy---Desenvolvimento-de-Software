import { Request, Response, NextFunction } from "express";

export function getData() {
  const data = new Date();
  return data.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
}

export const serverLog = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const inicio = Date.now();

  res.on("finish", () => {
    const duracao = Date.now() - inicio;
    const formDate = getData();
    console.log(
      `[${formDate}] ${req.method} ${req.url} ${res.statusCode} ${duracao}ms`
    );
  });

  next();
};
