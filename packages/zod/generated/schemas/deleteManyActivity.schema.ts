import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema.ts';

export const ActivityDeleteManySchema: z.ZodType<Prisma.ActivityDeleteManyArgs> = z.object({ where: ActivityWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityDeleteManyArgs>;

export const ActivityDeleteManyZodSchema = z.object({ where: ActivityWhereInputObjectSchema.optional() }).strict();