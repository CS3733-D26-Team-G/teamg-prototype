import express from "express";
import { prisma } from "../lib/prisma.ts";
import { schema } from "db";
import { Position } from "db/generated/prisma/enums.ts";
import { PrismaClientKnownRequestError } from "db/generated/prisma/internal/prismaNamespace.ts";
import { ZodError } from "zod";

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).json(await prisma.content.findMany());
});

router.get("/underwriter", async (req, res) => {
  res
    .status(200)
    .json(
      await prisma.content.findMany({ where: { for_position: "UNDERWRITER" } }),
    );
});

router.get("/business-analyst", async (req, res) => {
  res.status(200).json(
    await prisma.content.findMany({
      where: { for_position: "BUSINESS_ANALYST" },
    }),
  );
});

router.post("/create", async (req, res) => {
  // const auth = req.auth;
  try {
    try {
      const body = schema.ContentCreateOneSchema.parse(req.body);
      // if (auth.position !== ADMIN && auth.position !== body.data.for_position) {
      //   return res.status(401).json({ message: "Unauthorized" });
      // }
      const content = await prisma.content.create(body);
      res.status(201).json(content);
    } catch (e) {
      if (e instanceof ZodError) {
        res.status(400).json({ message: e.issues });
      }
    }
  } catch {
    res.status(500).json({
      message:
        "Internal server error. If you see this message, please report to a system administrator ",
    });
  }
});

router.put("/edit/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const body = schema.ContentInputSchema.partial().parse(req.body);
    try {
      await prisma.content.update({ where: { uuid: uuid }, data: body });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError && e.code === "P2025") {
        return res.status(400).json({ message: "Invalid content UUID" });
      }
    }
  } catch (e) {
    if (e instanceof ZodError) {
      res.status(400).json({ message: e.issues });
    }
  }
});

router.post("/delete/:uuid", async (req, res) => {
  const contentUuid = req.params.uuid;
  // const auth = req.auth;

  try {
    const content = await prisma.content.findUniqueOrThrow({
      where: { uuid: contentUuid },
    });
    // if (auth.position !== "ADMIN" && auth.position !== content.for_position) {
    //   res.status(401).json({ message: "Unauthorized" });
    // }
    await prisma.content.delete({ where: content });

    res.status(200).json(content);
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError && e.code === "P2025") {
      res.status(400).json({
        message: "Invalid content UUID",
      });
    }
  }
});

export default router;
