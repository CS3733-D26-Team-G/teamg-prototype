import type { Prisma } from "@repo/db/client";
import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from './objects/EmployeeSelect.schema.ts';
import { EmployeeCreateManyInputObjectSchema as EmployeeCreateManyInputObjectSchema } from './objects/EmployeeCreateManyInput.schema.ts';

export const EmployeeCreateManyAndReturnSchema: z.ZodType<Prisma.EmployeeCreateManyAndReturnArgs> = z.object({ select: EmployeeSelectObjectSchema.optional(), data: z.union([ EmployeeCreateManyInputObjectSchema, z.array(EmployeeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EmployeeCreateManyAndReturnArgs>;

export const EmployeeCreateManyAndReturnZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), data: z.union([ EmployeeCreateManyInputObjectSchema, z.array(EmployeeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();