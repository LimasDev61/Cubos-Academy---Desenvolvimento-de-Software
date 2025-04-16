import { Request, Response, NextFunction } from "express";

function date() {
  const date = new Date();
  return date.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
}

export function serverLog(req: Request, res: Response, next: NextFunction) {
  const inicio = Date.now();

  res.on("finish", () => {
    const duracao = Date.now() - inicio;
    const dateFormat = date();

    console.log(
      `[${dateFormat}] ${req.method} ${req.url} ${res.statusCode} ${duracao}ms`
    );
    return;
  });
  next();
}
