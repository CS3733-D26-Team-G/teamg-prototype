import express from "express";
import { prisma } from "../lib/prisma.ts";
import { z } from "zod";

const router = express.Router();
const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

router.post("/", async (req, res) => {
  try {
    const body = LoginSchema.parse(req.body);
    const account = await prisma.account.findUniqueOrThrow({
      where: {
        username: body.username,
        password: body.username,
      },
    });
    res.status(200).send({ success: true, accountType: account.type });
  } catch (e) {
    if (e.code === "P2025") {
      res.status(401).send({ success: false });
    }
  }
});

export default router;
