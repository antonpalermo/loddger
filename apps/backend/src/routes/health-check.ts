import express from "express";

const healthCheck = () => {
  const router = express.Router();

  router.get("/check", (_, res) => {
    return res.status(200).json({ ok: true });
  });

  return router;
};

export default healthCheck;
