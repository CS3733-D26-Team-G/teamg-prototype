import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivityOrderByWithRelationInputObjectSchema as ActivityOrderByWithRelationInputObjectSchema } from './objects/ActivityOrderByWithRelationInput.schema.ts';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema.ts';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema.ts';
import { ActivityScalarFieldEnumSchema } from './enums/ActivityScalarFieldEnum.schema.ts';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ActivityFindFirstSelectSchema: z.ZodType<Prisma.ActivitySelect> = z.object({
    uuid: z.boolean().optional(),
    employeeUuid: z.boolean().optional(),
    action: z.boolean().optional(),
    resource: z.boolean().optional(),
    resourceUuid: z.boolean().optional(),
    timestamp: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ActivitySelect>;

export const ActivityFindFirstSelectZodSchema = z.object({
    uuid: z.boolean().optional(),
    employeeUuid: z.boolean().optional(),
    action: z.boolean().optional(),
    resource: z.boolean().optional(),
    resourceUuid: z.boolean().optional(),
    timestamp: z.boolean().optional()
  }).strict();

export const ActivityFindFirstSchema: z.ZodType<Prisma.ActivityFindFirstArgs> = z.object({ select: ActivityFindFirstSelectSchema.optional(),  orderBy: z.union([ActivityOrderByWithRelationInputObjectSchema, ActivityOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityWhereInputObjectSchema.optional(), cursor: ActivityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityScalarFieldEnumSchema, ActivityScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ActivityFindFirstArgs>;

export const ActivityFindFirstZodSchema = z.object({ select: ActivityFindFirstSelectSchema.optional(),  orderBy: z.union([ActivityOrderByWithRelationInputObjectSchema, ActivityOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityWhereInputObjectSchema.optional(), cursor: ActivityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityScalarFieldEnumSchema, ActivityScalarFieldEnumSchema.array()]).optional() }).strict();