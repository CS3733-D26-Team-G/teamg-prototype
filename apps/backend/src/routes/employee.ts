import express from "express";
import { prisma } from "../lib/prisma.ts";
import { schema } from "db";

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send(await prisma.employee.findMany());
});

router.post("/create", async (req, res) => {
  try {
    const body = schema.EmployeeCreateOneSchema.parse(req.body);
    const employee = await prisma.employee.create(body);
    console.log(body);
    res.status(200).send(employee);
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
  }
});

router.put("/update/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const body = schema.EmployeeUpdateOneSchema.parse({
      where: { uuid: uuid },
      data: req.body,
    });

    const employee = await prisma.employee.update(body);
    res.status(200).send(employee);
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
  }
});

router.delete("/delete/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const body = schema.EmployeeDeleteOneSchema.parse({
      where: { uuid: uuid },
    });

    const employee = await prisma.employee.delete(body);

    console.log(employee);
    res.status(200).send(employee);
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
  }
});

export default router;
