import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { AccountCreateWithoutEmployeeInputObjectSchema as AccountCreateWithoutEmployeeInputObjectSchema } from './AccountCreateWithoutEmployeeInput.schema.ts';
import { AccountUncheckedCreateWithoutEmployeeInputObjectSchema as AccountUncheckedCreateWithoutEmployeeInputObjectSchema } from './AccountUncheckedCreateWithoutEmployeeInput.schema.ts';
import { AccountCreateOrConnectWithoutEmployeeInputObjectSchema as AccountCreateOrConnectWithoutEmployeeInputObjectSchema } from './AccountCreateOrConnectWithoutEmployeeInput.schema.ts';
import { AccountUpsertWithoutEmployeeInputObjectSchema as AccountUpsertWithoutEmployeeInputObjectSchema } from './AccountUpsertWithoutEmployeeInput.schema.ts';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './AccountWhereInput.schema.ts';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema.ts';
import { AccountUpdateToOneWithWhereWithoutEmployeeInputObjectSchema as AccountUpdateToOneWithWhereWithoutEmployeeInputObjectSchema } from './AccountUpdateToOneWithWhereWithoutEmployeeInput.schema.ts';
import { AccountUpdateWithoutEmployeeInputObjectSchema as AccountUpdateWithoutEmployeeInputObjectSchema } from './AccountUpdateWithoutEmployeeInput.schema.ts';
import { AccountUncheckedUpdateWithoutEmployeeInputObjectSchema as AccountUncheckedUpdateWithoutEmployeeInputObjectSchema } from './AccountUncheckedUpdateWithoutEmployeeInput.schema.ts'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutEmployeeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutEmployeeInputObjectSchema).optional(),
  upsert: z.lazy(() => AccountUpsertWithoutEmployeeInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AccountUpdateToOneWithWhereWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUpdateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutEmployeeInputObjectSchema)]).optional()
}).strict();
export const AccountUncheckedUpdateOneWithoutEmployeeNestedInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateOneWithoutEmployeeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUncheckedUpdateOneWithoutEmployeeNestedInput>;
export const AccountUncheckedUpdateOneWithoutEmployeeNestedInputObjectZodSchema = makeSchema();
