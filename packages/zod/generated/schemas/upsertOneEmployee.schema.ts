import type { Prisma } from "@repo/db/client";
import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from './objects/EmployeeSelect.schema.ts';
import { EmployeeIncludeObjectSchema as EmployeeIncludeObjectSchema } from './objects/EmployeeInclude.schema.ts';
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema.ts';
import { EmployeeCreateInputObjectSchema as EmployeeCreateInputObjectSchema } from './objects/EmployeeCreateInput.schema.ts';
import { EmployeeUncheckedCreateInputObjectSchema as EmployeeUncheckedCreateInputObjectSchema } from './objects/EmployeeUncheckedCreateInput.schema.ts';
import { EmployeeUpdateInputObjectSchema as EmployeeUpdateInputObjectSchema } from './objects/EmployeeUpdateInput.schema.ts';
import { EmployeeUncheckedUpdateInputObjectSchema as EmployeeUncheckedUpdateInputObjectSchema } from './objects/EmployeeUncheckedUpdateInput.schema.ts';

export const EmployeeUpsertOneSchema: z.ZodType<Prisma.EmployeeUpsertArgs> = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), where: EmployeeWhereUniqueInputObjectSchema, create: z.union([ EmployeeCreateInputObjectSchema, EmployeeUncheckedCreateInputObjectSchema ]), update: z.union([ EmployeeUpdateInputObjectSchema, EmployeeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.EmployeeUpsertArgs>;

export const EmployeeUpsertOneZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), where: EmployeeWhereUniqueInputObjectSchema, create: z.union([ EmployeeCreateInputObjectSchema, EmployeeUncheckedCreateInputObjectSchema ]), update: z.union([ EmployeeUpdateInputObjectSchema, EmployeeUncheckedUpdateInputObjectSchema ]) }).strict();