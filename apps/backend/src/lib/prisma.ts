import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from 'db'
import dotenv from "dotenv";
dotenv.config({path: ".env.production"})

const connectionString = process.env.SUPABASE_URL;
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter });

export { prisma };