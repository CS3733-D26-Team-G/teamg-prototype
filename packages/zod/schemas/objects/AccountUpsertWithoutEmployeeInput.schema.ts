import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { AccountUpdateWithoutEmployeeInputObjectSchema as AccountUpdateWithoutEmployeeInputObjectSchema } from './AccountUpdateWithoutEmployeeInput.schema.ts';
import { AccountUncheckedUpdateWithoutEmployeeInputObjectSchema as AccountUncheckedUpdateWithoutEmployeeInputObjectSchema } from './AccountUncheckedUpdateWithoutEmployeeInput.schema.ts';
import { AccountCreateWithoutEmployeeInputObjectSchema as AccountCreateWithoutEmployeeInputObjectSchema } from './AccountCreateWithoutEmployeeInput.schema.ts';
import { AccountUncheckedCreateWithoutEmployeeInputObjectSchema as AccountUncheckedCreateWithoutEmployeeInputObjectSchema } from './AccountUncheckedCreateWithoutEmployeeInput.schema.ts';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './AccountWhereInput.schema.ts'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AccountUpdateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutEmployeeInputObjectSchema)]),
  create: z.union([z.lazy(() => AccountCreateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutEmployeeInputObjectSchema)]),
  where: z.lazy(() => AccountWhereInputObjectSchema).optional()
}).strict();
export const AccountUpsertWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountUpsertWithoutEmployeeInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpsertWithoutEmployeeInput>;
export const AccountUpsertWithoutEmployeeInputObjectZodSchema = makeSchema();
