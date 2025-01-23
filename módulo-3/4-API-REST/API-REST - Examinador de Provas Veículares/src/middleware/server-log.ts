import { Request, Response, NextFunction } from "express";

export function getData() {
  const date = new Date();
  return date.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
}

export const serverLog = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const formDate = getData();

    console.log(
      `[${formDate}] ${req.method} ${req.url} - ${res.statusCode} ${duration}ms`
    );
  });

  next();
};
