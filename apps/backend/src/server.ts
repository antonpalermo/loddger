import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";

import type { Express } from "express";

import rooms from "./routes/rooms";
import healthCheck from "./routes/health-check";

export default function createServer(): Express {
  const app = express();

  app.disable("x-powered-by");

  app
    .use(cors())
    .use(helmet())
    .use(morgan("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

  app.use("/health", healthCheck()).use("/rooms", rooms());

  return app;
}
