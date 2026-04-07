import express from "express";
import { prisma } from "../lib/prisma.ts";
import { schema } from "db";

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send(await prisma.content.findMany());
});

router.get("/underwriter", async (req, res) => {});

router.get("/business-analyst", async (req, res) => {});

router.post("/create", async (req, res) => {
  try {
    const body = schema.ContentOptionalDefaultsSchema.parse(req.body);
    console.log(body);
    res.sendStatus(200);
  } catch {
    res.sendStatus(400);
  }
});

export default router;
