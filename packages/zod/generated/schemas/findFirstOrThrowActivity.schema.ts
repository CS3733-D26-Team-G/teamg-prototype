import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivityOrderByWithRelationInputObjectSchema as ActivityOrderByWithRelationInputObjectSchema } from './objects/ActivityOrderByWithRelationInput.schema.ts';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema.ts';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema.ts';
import { ActivityScalarFieldEnumSchema } from './enums/ActivityScalarFieldEnum.schema.ts';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ActivityFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ActivitySelect> = z.object({
    uuid: z.boolean().optional(),
    employeeUuid: z.boolean().optional(),
    action: z.boolean().optional(),
    resource: z.boolean().optional(),
    resourceUuid: z.boolean().optional(),
    timestamp: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ActivitySelect>;

export const ActivityFindFirstOrThrowSelectZodSchema = z.object({
    uuid: z.boolean().optional(),
    employeeUuid: z.boolean().optional(),
    action: z.boolean().optional(),
    resource: z.boolean().optional(),
    resourceUuid: z.boolean().optional(),
    timestamp: z.boolean().optional()
  }).strict();

export const ActivityFindFirstOrThrowSchema: z.ZodType<Prisma.ActivityFindFirstOrThrowArgs> = z.object({ select: ActivityFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([ActivityOrderByWithRelationInputObjectSchema, ActivityOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityWhereInputObjectSchema.optional(), cursor: ActivityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityScalarFieldEnumSchema, ActivityScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ActivityFindFirstOrThrowArgs>;

export const ActivityFindFirstOrThrowZodSchema = z.object({ select: ActivityFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([ActivityOrderByWithRelationInputObjectSchema, ActivityOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityWhereInputObjectSchema.optional(), cursor: ActivityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityScalarFieldEnumSchema, ActivityScalarFieldEnumSchema.array()]).optional() }).strict();