import { Request, Response, NextFunction } from "express";

export const getFormattedDate = (): string => {
  const date = new Date();
  return date.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
};

const serverLog = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const formaDate = getFormattedDate();

    console.log(
      `[${formaDate}] ${req.method} ${req.url} - ${res.statusCode} ${duration}ms`
    );
  });

  next();
};

export default serverLog;
