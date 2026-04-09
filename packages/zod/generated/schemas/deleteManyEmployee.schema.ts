import type { Prisma } from "@repo/db/client";
import * as z from 'zod';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from './objects/EmployeeWhereInput.schema.ts';

export const EmployeeDeleteManySchema: z.ZodType<Prisma.EmployeeDeleteManyArgs> = z.object({ where: EmployeeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EmployeeDeleteManyArgs>;

export const EmployeeDeleteManyZodSchema = z.object({ where: EmployeeWhereInputObjectSchema.optional() }).strict();