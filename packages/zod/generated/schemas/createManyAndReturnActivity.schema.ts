import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './objects/ActivitySelect.schema.ts';
import { ActivityCreateManyInputObjectSchema as ActivityCreateManyInputObjectSchema } from './objects/ActivityCreateManyInput.schema.ts';

export const ActivityCreateManyAndReturnSchema: z.ZodType<Prisma.ActivityCreateManyAndReturnArgs> = z.object({ select: ActivitySelectObjectSchema.optional(), data: z.union([ ActivityCreateManyInputObjectSchema, z.array(ActivityCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ActivityCreateManyAndReturnArgs>;

export const ActivityCreateManyAndReturnZodSchema = z.object({ select: ActivitySelectObjectSchema.optional(), data: z.union([ ActivityCreateManyInputObjectSchema, z.array(ActivityCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();