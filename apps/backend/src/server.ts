import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";

import healthCheck from "./routes/health-check";

const createServer = () => {
  const app = express();

  app.disable("x-powered-by");

  app
    .use(cors())
    .use(helmet())
    .use(morgan("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

  app.use("/health", healthCheck());

  return app;
};

export default createServer;
