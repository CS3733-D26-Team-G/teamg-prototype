import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { EmployeeCreateWithoutAccountInputObjectSchema as EmployeeCreateWithoutAccountInputObjectSchema } from './EmployeeCreateWithoutAccountInput.schema.ts';
import { EmployeeUncheckedCreateWithoutAccountInputObjectSchema as EmployeeUncheckedCreateWithoutAccountInputObjectSchema } from './EmployeeUncheckedCreateWithoutAccountInput.schema.ts';
import { EmployeeCreateOrConnectWithoutAccountInputObjectSchema as EmployeeCreateOrConnectWithoutAccountInputObjectSchema } from './EmployeeCreateOrConnectWithoutAccountInput.schema.ts';
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema.ts'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmployeeCreateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmployeeCreateOrConnectWithoutAccountInputObjectSchema).optional(),
  connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional()
}).strict();
export const EmployeeCreateNestedOneWithoutAccountInputObjectSchema: z.ZodType<Prisma.EmployeeCreateNestedOneWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeCreateNestedOneWithoutAccountInput>;
export const EmployeeCreateNestedOneWithoutAccountInputObjectZodSchema = makeSchema();
