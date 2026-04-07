import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { readdirSync } from "node:fs";
import { join } from "path";

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

const routesPath = join(process.cwd(), "src/routes");
readdirSync(routesPath).forEach(async (file) => {
  if (file.endsWith(".ts")) {
    const { default: router } = await import(`./routes/${file}`);
    app.use(`/${file.split(".")[0]}`, router);
  }
});

app.get("/content/underwriter", async (req, res) => {
  try {
    const content = await prisma.content.findMany({
      where: { for_position: "UNDERWRITER" },
    });
    console.log(content);
    res.send(content);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get("/content/business-analyst", async (req, res) => {
  try {
    const content = await prisma.content.findMany({
      where: { for_position: "BUSINESS_ANALYST" },
    });
    console.log(content);
    res.send(content);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
