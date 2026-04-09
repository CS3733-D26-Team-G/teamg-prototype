import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema.ts';
import { AccountCreateWithoutEmployeeInputObjectSchema as AccountCreateWithoutEmployeeInputObjectSchema } from './AccountCreateWithoutEmployeeInput.schema.ts';
import { AccountUncheckedCreateWithoutEmployeeInputObjectSchema as AccountUncheckedCreateWithoutEmployeeInputObjectSchema } from './AccountUncheckedCreateWithoutEmployeeInput.schema.ts'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AccountCreateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutEmployeeInputObjectSchema)])
}).strict();
export const AccountCreateOrConnectWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutEmployeeInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateOrConnectWithoutEmployeeInput>;
export const AccountCreateOrConnectWithoutEmployeeInputObjectZodSchema = makeSchema();
