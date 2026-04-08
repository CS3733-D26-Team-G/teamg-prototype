import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './objects/ActivitySelect.schema.ts';
import { ActivityUpdateManyMutationInputObjectSchema as ActivityUpdateManyMutationInputObjectSchema } from './objects/ActivityUpdateManyMutationInput.schema.ts';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema.ts';

export const ActivityUpdateManyAndReturnSchema: z.ZodType<Prisma.ActivityUpdateManyAndReturnArgs> = z.object({ select: ActivitySelectObjectSchema.optional(), data: ActivityUpdateManyMutationInputObjectSchema, where: ActivityWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityUpdateManyAndReturnArgs>;

export const ActivityUpdateManyAndReturnZodSchema = z.object({ select: ActivitySelectObjectSchema.optional(), data: ActivityUpdateManyMutationInputObjectSchema, where: ActivityWhereInputObjectSchema.optional() }).strict();