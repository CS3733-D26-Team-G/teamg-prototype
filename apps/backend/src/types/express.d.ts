import { Employee } from "db/generated/prisma/client.ts";

declare global {
  namespace Express {
    interface Request {
      employee?: Employee;
    }
  }
}

export {};
