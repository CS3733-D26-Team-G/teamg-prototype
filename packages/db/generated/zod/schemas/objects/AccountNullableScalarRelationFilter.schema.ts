import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './AccountWhereInput.schema.ts'

const makeSchema = () => z.object({
  is: z.lazy(() => AccountWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AccountWhereInputObjectSchema).optional().nullable()
}).strict();
export const AccountNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AccountNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AccountNullableScalarRelationFilter>;
export const AccountNullableScalarRelationFilterObjectZodSchema = makeSchema();
