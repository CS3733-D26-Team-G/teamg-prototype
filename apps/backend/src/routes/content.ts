import express from "express";
import { prisma } from "../lib/prisma.ts";
import { schema } from "db";

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send(await prisma.content.findMany());
});

router.get("/underwriter", async (req, res) => {
  res
    .status(200)
    .send(
      await prisma.content.findMany({ where: { for_position: "UNDERWRITER" } }),
    );
});

router.get("/business-analyst", async (req, res) => {
  res.status(200).send(
    await prisma.content.findMany({
      where: { for_position: "BUSINESS_ANALYST" },
    }),
  );
});

router.post("/create", async (req, res) => {
  try {
    const body = schema.ContentCreateOneSchema.parse(req.body);
    console.log(body);
    res.sendStatus(200);
  } catch {
    res.sendStatus(400);
  }
});

export default router;
