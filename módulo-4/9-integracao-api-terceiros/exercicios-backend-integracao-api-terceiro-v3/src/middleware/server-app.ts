import * as express from "express";
import { Request, Response, json, Express } from "express";

import { serverLog } from "./server-log";
import { routes } from "../routes";

export const createServer = () => {
  const app: Express = express();
  app.use(json());
  app.use(serverLog);
  app.use(routes);

  app.use((err: Error, req: Request, res: Response) => {
    if (err instanceof Error) {
      console.log(err.stack);
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return app;
};
