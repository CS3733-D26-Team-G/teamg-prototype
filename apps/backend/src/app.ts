import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { prisma } from "./lib/prisma.js";

dotenv.config({
  path:
    process.env.DOTENV_FILE ||
    (process.env.NODE_ENV === "production" ? ".env.production" : ".env"),
});

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
  const allEmployee = await prisma.employee.findMany();
  console.log(allEmployee);
  res.send(allEmployee);
  // res.sendStatus(200)
});

app.get("/content", async (req, res) => {
  const allContent = await prisma.content.findMany();
  console.log(allContent);
  res.send(allContent);
  // res.sendStatus(200)
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
