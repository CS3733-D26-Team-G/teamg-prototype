import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './objects/ActivitySelect.schema.ts';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema.ts';

export const ActivityFindUniqueOrThrowSchema: z.ZodType<Prisma.ActivityFindUniqueOrThrowArgs> = z.object({ select: ActivitySelectObjectSchema.optional(),  where: ActivityWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActivityFindUniqueOrThrowArgs>;

export const ActivityFindUniqueOrThrowZodSchema = z.object({ select: ActivitySelectObjectSchema.optional(),  where: ActivityWhereUniqueInputObjectSchema }).strict();