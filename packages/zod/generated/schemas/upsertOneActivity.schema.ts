import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './objects/ActivitySelect.schema.ts';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema.ts';
import { ActivityCreateInputObjectSchema as ActivityCreateInputObjectSchema } from './objects/ActivityCreateInput.schema.ts';
import { ActivityUncheckedCreateInputObjectSchema as ActivityUncheckedCreateInputObjectSchema } from './objects/ActivityUncheckedCreateInput.schema.ts';
import { ActivityUpdateInputObjectSchema as ActivityUpdateInputObjectSchema } from './objects/ActivityUpdateInput.schema.ts';
import { ActivityUncheckedUpdateInputObjectSchema as ActivityUncheckedUpdateInputObjectSchema } from './objects/ActivityUncheckedUpdateInput.schema.ts';

export const ActivityUpsertOneSchema: z.ZodType<Prisma.ActivityUpsertArgs> = z.object({ select: ActivitySelectObjectSchema.optional(),  where: ActivityWhereUniqueInputObjectSchema, create: z.union([ ActivityCreateInputObjectSchema, ActivityUncheckedCreateInputObjectSchema ]), update: z.union([ ActivityUpdateInputObjectSchema, ActivityUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ActivityUpsertArgs>;

export const ActivityUpsertOneZodSchema = z.object({ select: ActivitySelectObjectSchema.optional(),  where: ActivityWhereUniqueInputObjectSchema, create: z.union([ ActivityCreateInputObjectSchema, ActivityUncheckedCreateInputObjectSchema ]), update: z.union([ ActivityUpdateInputObjectSchema, ActivityUncheckedUpdateInputObjectSchema ]) }).strict();