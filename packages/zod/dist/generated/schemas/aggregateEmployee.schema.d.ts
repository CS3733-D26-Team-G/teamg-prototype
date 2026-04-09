import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeAggregateSchema: z.ZodType<Prisma.EmployeeAggregateArgs>;
export declare const EmployeeAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.EmployeeOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.EmployeeOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.EmployeeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.EmployeeCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.EmployeeMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.EmployeeMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateEmployee.schema.d.ts.map