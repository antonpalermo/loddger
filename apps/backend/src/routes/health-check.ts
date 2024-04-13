import express from "express";
import type { Router } from "express";

export default function checkHealth(): Router {
  const router = express.Router();

  router.get("/check", (_, res) => {
    return res.status(200).json({ ok: true, status: "healty" });
  });

  return router;
}
