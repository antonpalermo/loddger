import express from "express";
import type { Router } from "express";

import { database } from "@packages/database";

export default function rooms(): Router {
  const router = express.Router();

  router.get("/", async (_, res) => {
    try {
      const rooms = await database.selectFrom("rooms").selectAll().execute();
      return res.status(200).json(rooms);
    } catch (error) {
      console.log(error);
    }
  });

  return router;
}
