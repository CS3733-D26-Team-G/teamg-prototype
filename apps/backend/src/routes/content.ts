import express from "express";

const router = express.Router();

router.get("/underwriter", async (req, res) => {
  res.send(200);
  // TODO: pull data from prisma
});

router.get("/business-analyst", async (req, res) => {
  res.send(200);
  // TODO: pull data from prisma
});

export default router;
