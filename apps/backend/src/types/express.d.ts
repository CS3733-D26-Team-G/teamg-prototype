import { Account } from "db/generated/prisma/client.ts";

declare global {
  namespace Express {
    interface Request {
      account?: Account;
    }
  }
}

export {};
