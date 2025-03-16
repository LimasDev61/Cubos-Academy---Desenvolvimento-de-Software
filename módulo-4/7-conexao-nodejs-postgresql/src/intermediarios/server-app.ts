import express, {
  Request,
  Response,
  NextFunction,
  json,
  Express,
} from "express";

import { serverLog } from "./serverLog";
import { rotas } from "../rotas";

export const createServer = (): Express => {
  const app = express();
  app.use(json());
  app.use(serverLog);
  app.use(rotas);

  app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      console.log(err.stack);
      res
        .status(500)
        .json({ message: err.message || "Erro interno do servidor" });
    } else {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  });

  return app;
};
