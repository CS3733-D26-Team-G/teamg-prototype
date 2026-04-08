import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivityOrderByWithRelationInputObjectSchema as ActivityOrderByWithRelationInputObjectSchema } from './objects/ActivityOrderByWithRelationInput.schema.ts';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema.ts';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema.ts';
import { ActivityScalarFieldEnumSchema } from './enums/ActivityScalarFieldEnum.schema.ts';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ActivityFindManySelectSchema: z.ZodType<Prisma.ActivitySelect> = z.object({
    uuid: z.boolean().optional(),
    employeeUuid: z.boolean().optional(),
    action: z.boolean().optional(),
    resource: z.boolean().optional(),
    resourceUuid: z.boolean().optional(),
    timestamp: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ActivitySelect>;

export const ActivityFindManySelectZodSchema = z.object({
    uuid: z.boolean().optional(),
    employeeUuid: z.boolean().optional(),
    action: z.boolean().optional(),
    resource: z.boolean().optional(),
    resourceUuid: z.boolean().optional(),
    timestamp: z.boolean().optional()
  }).strict();

export const ActivityFindManySchema: z.ZodType<Prisma.ActivityFindManyArgs> = z.object({ select: ActivityFindManySelectSchema.optional(),  orderBy: z.union([ActivityOrderByWithRelationInputObjectSchema, ActivityOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityWhereInputObjectSchema.optional(), cursor: ActivityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityScalarFieldEnumSchema, ActivityScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ActivityFindManyArgs>;

export const ActivityFindManyZodSchema = z.object({ select: ActivityFindManySelectSchema.optional(),  orderBy: z.union([ActivityOrderByWithRelationInputObjectSchema, ActivityOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityWhereInputObjectSchema.optional(), cursor: ActivityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityScalarFieldEnumSchema, ActivityScalarFieldEnumSchema.array()]).optional() }).strict();