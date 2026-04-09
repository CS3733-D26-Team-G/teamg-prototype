import type { Prisma } from "@repo/db";
import * as z from 'zod';
import { EmployeeOrderByWithRelationInputObjectSchema as EmployeeOrderByWithRelationInputObjectSchema } from './objects/EmployeeOrderByWithRelationInput.schema.ts';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from './objects/EmployeeWhereInput.schema.ts';
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema.ts';
import { EmployeeCountAggregateInputObjectSchema as EmployeeCountAggregateInputObjectSchema } from './objects/EmployeeCountAggregateInput.schema.ts';
import { EmployeeMinAggregateInputObjectSchema as EmployeeMinAggregateInputObjectSchema } from './objects/EmployeeMinAggregateInput.schema.ts';
import { EmployeeMaxAggregateInputObjectSchema as EmployeeMaxAggregateInputObjectSchema } from './objects/EmployeeMaxAggregateInput.schema.ts';

export const EmployeeAggregateSchema: z.ZodType<Prisma.EmployeeAggregateArgs> = z.object({ orderBy: z.union([EmployeeOrderByWithRelationInputObjectSchema, EmployeeOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmployeeWhereInputObjectSchema.optional(), cursor: EmployeeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EmployeeCountAggregateInputObjectSchema ]).optional(), _min: EmployeeMinAggregateInputObjectSchema.optional(), _max: EmployeeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EmployeeAggregateArgs>;

export const EmployeeAggregateZodSchema = z.object({ orderBy: z.union([EmployeeOrderByWithRelationInputObjectSchema, EmployeeOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmployeeWhereInputObjectSchema.optional(), cursor: EmployeeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EmployeeCountAggregateInputObjectSchema ]).optional(), _min: EmployeeMinAggregateInputObjectSchema.optional(), _max: EmployeeMaxAggregateInputObjectSchema.optional() }).strict();