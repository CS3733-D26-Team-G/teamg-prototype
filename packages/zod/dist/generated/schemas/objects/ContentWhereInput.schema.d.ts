import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const ContentWhereInputObjectSchema: z.ZodType<Prisma.ContentWhereInput>;
export declare const ContentWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ContentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ContentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ContentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ContentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ContentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereInput, unknown>>>>]>>;
    uuid: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UuidFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.UuidFilter<never>, unknown>>>, z.ZodString]>>;
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    url: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    content_owner: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    for_position: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumPositionFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumPositionFilter<never>, unknown>>>, z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>]>>;
    last_modified_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    expiration_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    content_type: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumContentTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumContentTypeFilter<never>, unknown>>>, z.ZodEnum<{
        REFERENCE: "REFERENCE";
        WORKFLOW: "WORKFLOW";
    }>]>>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumContentStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumContentStatusFilter<never>, unknown>>>, z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        IN_USE: "IN_USE";
        UNAVAILABLE: "UNAVAILABLE";
    }>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ContentWhereInput.schema.d.ts.map