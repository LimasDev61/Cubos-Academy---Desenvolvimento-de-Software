import { Request, Response, NextFunction } from "express";

const serverLog = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  const getFormattedDate = (): string => {
    const date = new Date();
    return date.toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
  };

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
