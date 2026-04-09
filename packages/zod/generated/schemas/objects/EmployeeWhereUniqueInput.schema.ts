import * as z from 'zod';
import type { Prisma } from "@repo/db";


const makeSchema = () => z.object({
  uuid: z.string().optional()
}).strict();
export const EmployeeWhereUniqueInputObjectSchema: z.ZodType<Prisma.EmployeeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeWhereUniqueInput>;
export const EmployeeWhereUniqueInputObjectZodSchema = makeSchema();
