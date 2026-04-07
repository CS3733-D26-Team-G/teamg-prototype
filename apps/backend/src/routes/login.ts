import express from "express";
import { prisma } from "../lib/prisma.ts";
import { z } from "zod";
import jwt from "jsonwebtoken";

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
        password: body.password,
      },
    });

    const token = jwt.sign(
      {
        uuid: account.employeeUuid,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1h",
      },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60,
    });

    res.status(200).json({
      username: account.username,
      account_type: account.type,
    });
  } catch (e) {
    if (e.code === "P2025") {
      res.status(401).json({ message: "Invalid credentials" });
    }
  }
});

export default router;
