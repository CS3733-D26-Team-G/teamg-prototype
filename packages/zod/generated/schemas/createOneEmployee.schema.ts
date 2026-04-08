import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from './objects/EmployeeSelect.schema.ts';
import { EmployeeIncludeObjectSchema as EmployeeIncludeObjectSchema } from './objects/EmployeeInclude.schema.ts';
import { EmployeeCreateInputObjectSchema as EmployeeCreateInputObjectSchema } from './objects/EmployeeCreateInput.schema.ts';
import { EmployeeUncheckedCreateInputObjectSchema as EmployeeUncheckedCreateInputObjectSchema } from './objects/EmployeeUncheckedCreateInput.schema.ts';

export const EmployeeCreateOneSchema: z.ZodType<Prisma.EmployeeCreateArgs> = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), data: z.union([EmployeeCreateInputObjectSchema, EmployeeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.EmployeeCreateArgs>;

export const EmployeeCreateOneZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), data: z.union([EmployeeCreateInputObjectSchema, EmployeeUncheckedCreateInputObjectSchema]) }).strict();