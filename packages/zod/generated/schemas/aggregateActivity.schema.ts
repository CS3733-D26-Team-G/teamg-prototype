import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivityOrderByWithRelationInputObjectSchema as ActivityOrderByWithRelationInputObjectSchema } from './objects/ActivityOrderByWithRelationInput.schema.ts';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema.ts';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema.ts';
import { ActivityCountAggregateInputObjectSchema as ActivityCountAggregateInputObjectSchema } from './objects/ActivityCountAggregateInput.schema.ts';
import { ActivityMinAggregateInputObjectSchema as ActivityMinAggregateInputObjectSchema } from './objects/ActivityMinAggregateInput.schema.ts';
import { ActivityMaxAggregateInputObjectSchema as ActivityMaxAggregateInputObjectSchema } from './objects/ActivityMaxAggregateInput.schema.ts';

export const ActivityAggregateSchema: z.ZodType<Prisma.ActivityAggregateArgs> = z.object({ orderBy: z.union([ActivityOrderByWithRelationInputObjectSchema, ActivityOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityWhereInputObjectSchema.optional(), cursor: ActivityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ActivityCountAggregateInputObjectSchema ]).optional(), _min: ActivityMinAggregateInputObjectSchema.optional(), _max: ActivityMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityAggregateArgs>;

export const ActivityAggregateZodSchema = z.object({ orderBy: z.union([ActivityOrderByWithRelationInputObjectSchema, ActivityOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityWhereInputObjectSchema.optional(), cursor: ActivityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ActivityCountAggregateInputObjectSchema ]).optional(), _min: ActivityMinAggregateInputObjectSchema.optional(), _max: ActivityMaxAggregateInputObjectSchema.optional() }).strict();