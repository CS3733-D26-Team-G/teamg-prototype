import express from "express";
import { prisma } from "../lib/prisma.ts";
import { schema } from "db";
import { Position } from "db/generated/prisma/enums.ts";

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
  try {
    const body = schema.ContentCreateOneSchema.parse(req.body);
    console.log(body);
    res.sendStatus(200);
  } catch {
    res.sendStatus(400);
  }
});

router.post("/delete/:uuid", async (req, res) => {
  const contentUuid = req.params.uuid;
  // const account = req.account;
  // const employee = await prisma.employee.findUnique({
  //   where: { uuid: account.employeeUuid },
  // });

  try {
    const content = await prisma.content.findUniqueOrThrow({
      where: { uuid: contentUuid },
    });
    // if (
    //   employee.position !== "ADMIN" &&
    //   employee.position !== content.for_position
    // ) {
    //   res.status(401).json({ message: "Unauthorized" });
    // }
    await prisma.content.delete({ where: content });

    res.status(200).json(content);
  } catch (e) {
    if (e.code === "P2025") {
      res.status(400).json({
        message: "Invalid content UUID",
      });
    }
  }
});

export default router;
