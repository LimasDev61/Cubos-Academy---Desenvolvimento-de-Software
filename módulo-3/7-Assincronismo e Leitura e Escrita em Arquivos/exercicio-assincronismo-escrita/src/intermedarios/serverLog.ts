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
    const dauration = Date.now() - inicio;
    const formaDate = getData();
    console.log(
      `[${formaDate}] ${req.method} ${req.url} ${res.statusCode} ${dauration}ms`
    );
  });

  next();
};
