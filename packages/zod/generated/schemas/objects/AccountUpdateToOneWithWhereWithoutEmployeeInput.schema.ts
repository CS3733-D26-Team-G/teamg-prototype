import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './AccountWhereInput.schema.ts';
import { AccountUpdateWithoutEmployeeInputObjectSchema as AccountUpdateWithoutEmployeeInputObjectSchema } from './AccountUpdateWithoutEmployeeInput.schema.ts';
import { AccountUncheckedUpdateWithoutEmployeeInputObjectSchema as AccountUncheckedUpdateWithoutEmployeeInputObjectSchema } from './AccountUncheckedUpdateWithoutEmployeeInput.schema.ts'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AccountUpdateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutEmployeeInputObjectSchema)])
}).strict();
export const AccountUpdateToOneWithWhereWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutEmployeeInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutEmployeeInput>;
export const AccountUpdateToOneWithWhereWithoutEmployeeInputObjectZodSchema = makeSchema();
