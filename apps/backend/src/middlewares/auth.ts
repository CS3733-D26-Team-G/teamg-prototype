import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

export interface JwtPayload {
  uuid?: string;
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  if (typeof decoded === "string") {
    return res.status(401).json({ message: "Invalid token" });
  }
  const jwtPayload = decoded as JwtPayload;
  req.uuid = jwtPayload.uuid;
  next();
};

// export const auth = (req: Request, res, next) => {
//   next();
// };
