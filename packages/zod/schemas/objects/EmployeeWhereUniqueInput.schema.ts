import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';


const makeSchema = () => z.object({
  uuid: z.string().optional(),
  accountUsername: z.string().optional()
}).strict();
export const EmployeeWhereUniqueInputObjectSchema: z.ZodType<Prisma.EmployeeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeWhereUniqueInput>;
export const EmployeeWhereUniqueInputObjectZodSchema = makeSchema();
