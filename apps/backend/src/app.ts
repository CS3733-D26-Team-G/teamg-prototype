import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { prisma } from "./lib/prisma.js";
dotenv.config({ path: ".env.production" })
const app = express();

const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(morgan("dev"));
// Send HTTP 200 at root
app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/employee", async (req, res) => {
  const allEmployeeData= await prisma.employee.findMany();
  console.log(allEmployeeData);
  res.sendStatus(200)
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
