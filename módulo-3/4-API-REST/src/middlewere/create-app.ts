import express, { json, Express } from "express";
import serverLog from "./serverLog";

const createApp = (): Express => {
  const app: Express = express();

  app.use(json());
  app.use(serverLog);

  app.use(
    (
      err: unknown,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      if (err instanceof Error) {
        console.error(err.stack);
        res
          .status(500)
          .json({ error: err.message || "Erro interno do servidor" });
      } else {
        res.status(500).json({ error: "Erro interno do servidor" });
      }
    }
  );

  return app;
};

export default createApp;
