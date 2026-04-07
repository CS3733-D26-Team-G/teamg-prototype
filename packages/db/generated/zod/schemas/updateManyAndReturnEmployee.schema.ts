import type { Prisma } from '../../prisma/client.ts';
import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from './objects/EmployeeSelect.schema.ts';
import { EmployeeUpdateManyMutationInputObjectSchema as EmployeeUpdateManyMutationInputObjectSchema } from './objects/EmployeeUpdateManyMutationInput.schema.ts';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from './objects/EmployeeWhereInput.schema.ts';

export const EmployeeUpdateManyAndReturnSchema: z.ZodType<Prisma.EmployeeUpdateManyAndReturnArgs> = z.object({ select: EmployeeSelectObjectSchema.optional(), data: EmployeeUpdateManyMutationInputObjectSchema, where: EmployeeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EmployeeUpdateManyAndReturnArgs>;

export const EmployeeUpdateManyAndReturnZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), data: EmployeeUpdateManyMutationInputObjectSchema, where: EmployeeWhereInputObjectSchema.optional() }).strict();