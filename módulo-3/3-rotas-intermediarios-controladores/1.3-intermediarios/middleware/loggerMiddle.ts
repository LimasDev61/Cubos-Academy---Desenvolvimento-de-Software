import { Request, Response, NextFunction } from "express";

const loggerMiddle = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const date = new Date();
    const formDate = date.toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    console.log(
      `status: [${formDate}] ${req.method} ${req.url} - ${res.statusCode} ${duration}ms`
    );
  });

  next();
};

export default loggerMiddle;
