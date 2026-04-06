import express from "express";
import { prisma } from "../lib/prisma.ts";

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send(await prisma.content.findMany());
});

router.get("/underwriter", async (req, res) => {
  res.sendStatus(200);
  // TODO: pull data from prisma
});

router.get("/business-analyst", async (req, res) => {
  res.sendStatus(200);
  // TODO: pull data from prisma
});

router.post("/post", async (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

export default router;
