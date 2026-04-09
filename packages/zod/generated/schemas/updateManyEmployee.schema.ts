import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { EmployeeUpdateManyMutationInputObjectSchema as EmployeeUpdateManyMutationInputObjectSchema } from './objects/EmployeeUpdateManyMutationInput.schema.ts';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from './objects/EmployeeWhereInput.schema.ts';

export const EmployeeUpdateManySchema: z.ZodType<Prisma.EmployeeUpdateManyArgs> = z.object({ data: EmployeeUpdateManyMutationInputObjectSchema, where: EmployeeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EmployeeUpdateManyArgs>;

export const EmployeeUpdateManyZodSchema = z.object({ data: EmployeeUpdateManyMutationInputObjectSchema, where: EmployeeWhereInputObjectSchema.optional() }).strict();