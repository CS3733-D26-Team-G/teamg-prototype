import type { Prisma } from '../../prisma/client.ts';
import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from './objects/EmployeeSelect.schema.ts';
import { EmployeeIncludeObjectSchema as EmployeeIncludeObjectSchema } from './objects/EmployeeInclude.schema.ts';
import { EmployeeUpdateInputObjectSchema as EmployeeUpdateInputObjectSchema } from './objects/EmployeeUpdateInput.schema.ts';
import { EmployeeUncheckedUpdateInputObjectSchema as EmployeeUncheckedUpdateInputObjectSchema } from './objects/EmployeeUncheckedUpdateInput.schema.ts';
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema.ts';

export const EmployeeUpdateOneSchema: z.ZodType<Prisma.EmployeeUpdateArgs> = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), data: z.union([EmployeeUpdateInputObjectSchema, EmployeeUncheckedUpdateInputObjectSchema]), where: EmployeeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EmployeeUpdateArgs>;

export const EmployeeUpdateOneZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), data: z.union([EmployeeUpdateInputObjectSchema, EmployeeUncheckedUpdateInputObjectSchema]), where: EmployeeWhereUniqueInputObjectSchema }).strict();