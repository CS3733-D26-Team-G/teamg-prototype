import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivityCreateManyInputObjectSchema as ActivityCreateManyInputObjectSchema } from './objects/ActivityCreateManyInput.schema.ts';

export const ActivityCreateManySchema: z.ZodType<Prisma.ActivityCreateManyArgs> = z.object({ data: z.union([ ActivityCreateManyInputObjectSchema, z.array(ActivityCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ActivityCreateManyArgs>;

export const ActivityCreateManyZodSchema = z.object({ data: z.union([ ActivityCreateManyInputObjectSchema, z.array(ActivityCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();