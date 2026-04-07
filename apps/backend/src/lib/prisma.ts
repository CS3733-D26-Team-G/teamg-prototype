import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "db";
import dotenv from "dotenv";

const connectionString = process.env.SUPABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
