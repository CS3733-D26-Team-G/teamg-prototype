import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  console.log(req);

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  if (typeof decoded === "string") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.uuid = decoded.uuid;
  next();
};
