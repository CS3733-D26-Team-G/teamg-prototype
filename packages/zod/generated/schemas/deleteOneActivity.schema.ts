import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './objects/ActivitySelect.schema.ts';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema.ts';

export const ActivityDeleteOneSchema: z.ZodType<Prisma.ActivityDeleteArgs> = z.object({ select: ActivitySelectObjectSchema.optional(),  where: ActivityWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActivityDeleteArgs>;

export const ActivityDeleteOneZodSchema = z.object({ select: ActivitySelectObjectSchema.optional(),  where: ActivityWhereUniqueInputObjectSchema }).strict();