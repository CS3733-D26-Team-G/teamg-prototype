import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { EmployeeUpdateWithoutAccountInputObjectSchema as EmployeeUpdateWithoutAccountInputObjectSchema } from './EmployeeUpdateWithoutAccountInput.schema.ts';
import { EmployeeUncheckedUpdateWithoutAccountInputObjectSchema as EmployeeUncheckedUpdateWithoutAccountInputObjectSchema } from './EmployeeUncheckedUpdateWithoutAccountInput.schema.ts';
import { EmployeeCreateWithoutAccountInputObjectSchema as EmployeeCreateWithoutAccountInputObjectSchema } from './EmployeeCreateWithoutAccountInput.schema.ts';
import { EmployeeUncheckedCreateWithoutAccountInputObjectSchema as EmployeeUncheckedCreateWithoutAccountInputObjectSchema } from './EmployeeUncheckedCreateWithoutAccountInput.schema.ts';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from './EmployeeWhereInput.schema.ts'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EmployeeUpdateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedUpdateWithoutAccountInputObjectSchema)]),
  create: z.union([z.lazy(() => EmployeeCreateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputObjectSchema)]),
  where: z.lazy(() => EmployeeWhereInputObjectSchema).optional()
}).strict();
export const EmployeeUpsertWithoutAccountInputObjectSchema: z.ZodType<Prisma.EmployeeUpsertWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeUpsertWithoutAccountInput>;
export const EmployeeUpsertWithoutAccountInputObjectZodSchema = makeSchema();
