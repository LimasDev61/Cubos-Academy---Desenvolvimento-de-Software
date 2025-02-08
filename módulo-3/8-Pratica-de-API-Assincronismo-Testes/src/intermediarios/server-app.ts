import express, {
  Request,
  Response,
  NextFunction,
  json,
  Express,
} from "express";

import { rotas } from "../rotas/rotas";
import { serverLog } from "../intermediarios/serverLog";

export const createServer = (): Express => {
  const app = express();
  app.use(serverLog);
  app.use(json());
  app.use(rotas);

  app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      console.log(err.stack);
      res
        .status(500)
        .json({ message: err.message || "Erro interno do servidor" });
      return;
    }

    next();
  });

  return app;
};
