import express from "express";
import { prisma } from "../lib/prisma.ts";
import {
  EmployeeCreateOneSchema,
  EmployeeUpdateOneSchema,
  EmployeeDeleteOneSchema,
} from "@repo/zod";
import { PrismaClientKnownRequestError } from "@repo/db/generated/prisma/internal/prismaNamespace.ts";
import { ZodError } from "zod";

const router = express.Router();

router.get("/", async (req, res) => {
  /*
  const auth = req.auth;
   if (!auth || auth.position !== "ADMIN") {
     return res.status(401).json({ message: "Unauthorized" });
   }
*/
  res.status(200).send(await prisma.employee.findMany());
});

router.post("/create", async (req, res) => {
  /*
  const auth = req.auth;
   if (!auth || auth.position !== "ADMIN") {
     return res.status(401).json({ message: "Unauthorized" });
   }
*/

  try {
    const body = EmployeeCreateOneSchema.parse(req.body);
    const employee = await prisma.employee.create(body);
    console.log(body);
    res.status(200).send(employee);
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
  }
});

router.put("/update/:uuid", async (req, res) => {
  /*
  const auth = req.auth;
   if (!auth || auth.position !== "ADMIN") {
     return res.status(401).json({ message: "Unauthorized" });
   }
*/

  const uuid = req.params.uuid;
  try {
    const body = EmployeeUpdateOneSchema.parse({
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

router.post("/delete/:uuid", async (req, res) => {
  /*
  const auth = req.auth;
   if (!auth || auth.position !== "ADMIN") {
     return res.status(401).json({ message: "Unauthorized" });
   }
*/
  const uuid = req.params.uuid;
  try {
    const body = EmployeeDeleteOneSchema.parse({
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
