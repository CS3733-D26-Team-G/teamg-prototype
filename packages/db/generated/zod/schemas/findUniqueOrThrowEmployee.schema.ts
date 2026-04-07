import type { Prisma } from '../../prisma/client.ts';
import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from './objects/EmployeeSelect.schema.ts';
import { EmployeeIncludeObjectSchema as EmployeeIncludeObjectSchema } from './objects/EmployeeInclude.schema.ts';
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema.ts';

export const EmployeeFindUniqueOrThrowSchema: z.ZodType<Prisma.EmployeeFindUniqueOrThrowArgs> = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), where: EmployeeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EmployeeFindUniqueOrThrowArgs>;

export const EmployeeFindUniqueOrThrowZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), where: EmployeeWhereUniqueInputObjectSchema }).strict();