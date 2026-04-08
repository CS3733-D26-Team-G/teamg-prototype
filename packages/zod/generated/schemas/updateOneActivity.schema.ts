import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './objects/ActivitySelect.schema.ts';
import { ActivityUpdateInputObjectSchema as ActivityUpdateInputObjectSchema } from './objects/ActivityUpdateInput.schema.ts';
import { ActivityUncheckedUpdateInputObjectSchema as ActivityUncheckedUpdateInputObjectSchema } from './objects/ActivityUncheckedUpdateInput.schema.ts';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema.ts';

export const ActivityUpdateOneSchema: z.ZodType<Prisma.ActivityUpdateArgs> = z.object({ select: ActivitySelectObjectSchema.optional(),  data: z.union([ActivityUpdateInputObjectSchema, ActivityUncheckedUpdateInputObjectSchema]), where: ActivityWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActivityUpdateArgs>;

export const ActivityUpdateOneZodSchema = z.object({ select: ActivitySelectObjectSchema.optional(),  data: z.union([ActivityUpdateInputObjectSchema, ActivityUncheckedUpdateInputObjectSchema]), where: ActivityWhereUniqueInputObjectSchema }).strict();