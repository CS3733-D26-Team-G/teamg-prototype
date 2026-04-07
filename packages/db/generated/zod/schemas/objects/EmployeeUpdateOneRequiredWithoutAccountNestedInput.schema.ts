import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { EmployeeCreateWithoutAccountInputObjectSchema as EmployeeCreateWithoutAccountInputObjectSchema } from './EmployeeCreateWithoutAccountInput.schema.ts';
import { EmployeeUncheckedCreateWithoutAccountInputObjectSchema as EmployeeUncheckedCreateWithoutAccountInputObjectSchema } from './EmployeeUncheckedCreateWithoutAccountInput.schema.ts';
import { EmployeeCreateOrConnectWithoutAccountInputObjectSchema as EmployeeCreateOrConnectWithoutAccountInputObjectSchema } from './EmployeeCreateOrConnectWithoutAccountInput.schema.ts';
import { EmployeeUpsertWithoutAccountInputObjectSchema as EmployeeUpsertWithoutAccountInputObjectSchema } from './EmployeeUpsertWithoutAccountInput.schema.ts';
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema.ts';
import { EmployeeUpdateToOneWithWhereWithoutAccountInputObjectSchema as EmployeeUpdateToOneWithWhereWithoutAccountInputObjectSchema } from './EmployeeUpdateToOneWithWhereWithoutAccountInput.schema.ts';
import { EmployeeUpdateWithoutAccountInputObjectSchema as EmployeeUpdateWithoutAccountInputObjectSchema } from './EmployeeUpdateWithoutAccountInput.schema.ts';
import { EmployeeUncheckedUpdateWithoutAccountInputObjectSchema as EmployeeUncheckedUpdateWithoutAccountInputObjectSchema } from './EmployeeUncheckedUpdateWithoutAccountInput.schema.ts'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmployeeCreateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmployeeCreateOrConnectWithoutAccountInputObjectSchema).optional(),
  upsert: z.lazy(() => EmployeeUpsertWithoutAccountInputObjectSchema).optional(),
  connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EmployeeUpdateToOneWithWhereWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUpdateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedUpdateWithoutAccountInputObjectSchema)]).optional()
}).strict();
export const EmployeeUpdateOneRequiredWithoutAccountNestedInputObjectSchema: z.ZodType<Prisma.EmployeeUpdateOneRequiredWithoutAccountNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeUpdateOneRequiredWithoutAccountNestedInput>;
export const EmployeeUpdateOneRequiredWithoutAccountNestedInputObjectZodSchema = makeSchema();
