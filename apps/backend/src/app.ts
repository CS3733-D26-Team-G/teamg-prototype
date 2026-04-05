import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

import contentRouter from "./routes/content.ts";

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

app.use("/content", contentRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
