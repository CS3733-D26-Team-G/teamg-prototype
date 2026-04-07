import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma.ts";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  if (typeof decoded === "string") {
    return res.status(401).json({
      message:
        "Unauthorized. If you see this message, please report to a system administrator.",
    });
  }

  try {
    req.employee = await prisma.employee.findUniqueOrThrow({
      where: { uuid: decoded.uuid },
    });
  } catch (e) {
    if (e.code === "P2025") {
      return res.status(401).json({
        message:
          "Unauthorized. If you see this message, please report to a system administrator.",
      });
    }
  }
  next();
};
