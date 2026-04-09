import * as z from 'zod';
import type { Prisma } from "@repo/db";


const makeSchema = () => z.object({
  employeeUuid: z.string().optional(),
  username: z.string().optional()
}).strict();
export const AccountWhereUniqueInputObjectSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountWhereUniqueInput>;
export const AccountWhereUniqueInputObjectZodSchema = makeSchema();
