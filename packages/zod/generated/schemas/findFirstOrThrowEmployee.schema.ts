import type { Prisma } from "@repo/db/client";
import * as z from 'zod';
import { EmployeeIncludeObjectSchema as EmployeeIncludeObjectSchema } from './objects/EmployeeInclude.schema.ts';
import { EmployeeOrderByWithRelationInputObjectSchema as EmployeeOrderByWithRelationInputObjectSchema } from './objects/EmployeeOrderByWithRelationInput.schema.ts';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from './objects/EmployeeWhereInput.schema.ts';
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema.ts';
import { EmployeeScalarFieldEnumSchema } from './enums/EmployeeScalarFieldEnum.schema.ts';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EmployeeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.EmployeeSelect> = z.object({
    uuid: z.boolean().optional(),
    account: z.boolean().optional(),
    first_name: z.boolean().optional(),
    last_name: z.boolean().optional(),
    date_of_birth: z.boolean().optional(),
    position: z.boolean().optional(),
    department: z.boolean().optional(),
    start_date: z.boolean().optional(),
    supervisor: z.boolean().optional(),
    phone_number: z.boolean().optional(),
    personal_email: z.boolean().optional(),
    corporate_email: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EmployeeSelect>;

export const EmployeeFindFirstOrThrowSelectZodSchema = z.object({
    uuid: z.boolean().optional(),
    account: z.boolean().optional(),
    first_name: z.boolean().optional(),
    last_name: z.boolean().optional(),
    date_of_birth: z.boolean().optional(),
    position: z.boolean().optional(),
    department: z.boolean().optional(),
    start_date: z.boolean().optional(),
    supervisor: z.boolean().optional(),
    phone_number: z.boolean().optional(),
    personal_email: z.boolean().optional(),
    corporate_email: z.boolean().optional()
  }).strict();

export const EmployeeFindFirstOrThrowSchema: z.ZodType<Prisma.EmployeeFindFirstOrThrowArgs> = z.object({ select: EmployeeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => EmployeeIncludeObjectSchema.optional()), orderBy: z.union([EmployeeOrderByWithRelationInputObjectSchema, EmployeeOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmployeeWhereInputObjectSchema.optional(), cursor: EmployeeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EmployeeScalarFieldEnumSchema, EmployeeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EmployeeFindFirstOrThrowArgs>;

export const EmployeeFindFirstOrThrowZodSchema = z.object({ select: EmployeeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => EmployeeIncludeObjectSchema.optional()), orderBy: z.union([EmployeeOrderByWithRelationInputObjectSchema, EmployeeOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmployeeWhereInputObjectSchema.optional(), cursor: EmployeeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EmployeeScalarFieldEnumSchema, EmployeeScalarFieldEnumSchema.array()]).optional() }).strict();