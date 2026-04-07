import type { Prisma } from '../../prisma/client.ts';
import * as z from 'zod';
import { EmployeeCreateManyInputObjectSchema as EmployeeCreateManyInputObjectSchema } from './objects/EmployeeCreateManyInput.schema.ts';

export const EmployeeCreateManySchema: z.ZodType<Prisma.EmployeeCreateManyArgs> = z.object({ data: z.union([ EmployeeCreateManyInputObjectSchema, z.array(EmployeeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EmployeeCreateManyArgs>;

export const EmployeeCreateManyZodSchema = z.object({ data: z.union([ EmployeeCreateManyInputObjectSchema, z.array(EmployeeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();