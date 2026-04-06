import express from "express";
import { prisma } from "../lib/prisma.ts";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const account = await prisma.account.findUniqueOrThrow({
      where: {
        username: req.body.username,
        password: req.body.username,
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
