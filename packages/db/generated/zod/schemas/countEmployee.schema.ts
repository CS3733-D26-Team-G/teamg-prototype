import type { Prisma } from '../../prisma/client.ts';
import * as z from 'zod';
import { EmployeeOrderByWithRelationInputObjectSchema as EmployeeOrderByWithRelationInputObjectSchema } from './objects/EmployeeOrderByWithRelationInput.schema.ts';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from './objects/EmployeeWhereInput.schema.ts';
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema.ts';
import { EmployeeCountAggregateInputObjectSchema as EmployeeCountAggregateInputObjectSchema } from './objects/EmployeeCountAggregateInput.schema.ts';

export const EmployeeCountSchema: z.ZodType<Prisma.EmployeeCountArgs> = z.object({ orderBy: z.union([EmployeeOrderByWithRelationInputObjectSchema, EmployeeOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmployeeWhereInputObjectSchema.optional(), cursor: EmployeeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EmployeeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EmployeeCountArgs>;

export const EmployeeCountZodSchema = z.object({ orderBy: z.union([EmployeeOrderByWithRelationInputObjectSchema, EmployeeOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmployeeWhereInputObjectSchema.optional(), cursor: EmployeeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EmployeeCountAggregateInputObjectSchema ]).optional() }).strict();