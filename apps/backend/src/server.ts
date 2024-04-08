import cors from "cors";
import morgan from "morgan";
import express, { Express } from "express";

export const createServer = (): Express => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

  app.get("/healthz", (req, res) => {
    return res.status(200).json({ server: "healty" });
  });

  return app;
};
