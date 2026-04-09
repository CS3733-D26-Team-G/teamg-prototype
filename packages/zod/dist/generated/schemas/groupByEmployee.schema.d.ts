import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeGroupBySchema: z.ZodType<Prisma.EmployeeGroupByArgs>;
export declare const EmployeeGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.EmployeeOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.EmployeeOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.EmployeeScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        uuid: "uuid";
        first_name: "first_name";
        last_name: "last_name";
        date_of_birth: "date_of_birth";
        position: "position";
        department: "department";
        start_date: "start_date";
        supervisor: "supervisor";
        phone_number: "phone_number";
        personal_email: "personal_email";
        corporate_email: "corporate_email";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.EmployeeCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.EmployeeMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.EmployeeMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByEmployee.schema.d.ts.map