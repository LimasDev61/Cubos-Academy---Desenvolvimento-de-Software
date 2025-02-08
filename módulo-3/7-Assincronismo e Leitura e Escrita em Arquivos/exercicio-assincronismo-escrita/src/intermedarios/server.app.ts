import express, {
  json,
  Express,
  Request,
  Response,
  NextFunction,
} from "express";
import { serverLog } from "./serverLog";
import { rotas } from "../rotas/rotas";

export const creatServer = (): Express => {
  const app: Express = express();

  app.use(json());
  app.use(serverLog);
  app.use(rotas);

  app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      console.log(err.stack);
      res
        .status(500)
        .json({ error: err.message || "Erro interno do servidor." });
      return;
    }

    res.status(500).json({ error: "Erro interno do servidor." });
    next();
  });

  return app;
};
