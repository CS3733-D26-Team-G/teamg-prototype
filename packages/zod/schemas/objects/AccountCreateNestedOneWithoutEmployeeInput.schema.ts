import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { AccountCreateWithoutEmployeeInputObjectSchema as AccountCreateWithoutEmployeeInputObjectSchema } from './AccountCreateWithoutEmployeeInput.schema.ts';
import { AccountUncheckedCreateWithoutEmployeeInputObjectSchema as AccountUncheckedCreateWithoutEmployeeInputObjectSchema } from './AccountUncheckedCreateWithoutEmployeeInput.schema.ts';
import { AccountCreateOrConnectWithoutEmployeeInputObjectSchema as AccountCreateOrConnectWithoutEmployeeInputObjectSchema } from './AccountCreateOrConnectWithoutEmployeeInput.schema.ts';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema.ts'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutEmployeeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutEmployeeInputObjectSchema).optional(),
  connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const AccountCreateNestedOneWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountCreateNestedOneWithoutEmployeeInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateNestedOneWithoutEmployeeInput>;
export const AccountCreateNestedOneWithoutEmployeeInputObjectZodSchema = makeSchema();
