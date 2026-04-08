import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './objects/ActivitySelect.schema.ts';
import { ActivityCreateInputObjectSchema as ActivityCreateInputObjectSchema } from './objects/ActivityCreateInput.schema.ts';
import { ActivityUncheckedCreateInputObjectSchema as ActivityUncheckedCreateInputObjectSchema } from './objects/ActivityUncheckedCreateInput.schema.ts';

export const ActivityCreateOneSchema: z.ZodType<Prisma.ActivityCreateArgs> = z.object({ select: ActivitySelectObjectSchema.optional(),  data: z.union([ActivityCreateInputObjectSchema, ActivityUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ActivityCreateArgs>;

export const ActivityCreateOneZodSchema = z.object({ select: ActivitySelectObjectSchema.optional(),  data: z.union([ActivityCreateInputObjectSchema, ActivityUncheckedCreateInputObjectSchema]) }).strict();