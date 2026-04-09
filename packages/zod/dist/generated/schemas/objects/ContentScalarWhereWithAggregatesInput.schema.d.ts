import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const ContentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ContentScalarWhereWithAggregatesInput>;
export declare const ContentScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ContentScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ContentScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ContentScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.ContentScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.ContentScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentScalarWhereWithAggregatesInput, unknown>>>>]>>;
    uuid: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UuidWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.UuidWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    url: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    content_owner: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    for_position: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumPositionWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumPositionWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>]>>;
    last_modified_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    expiration_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    content_type: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumContentTypeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumContentTypeWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        REFERENCE: "REFERENCE";
        WORKFLOW: "WORKFLOW";
    }>]>>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumContentStatusWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumContentStatusWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        IN_USE: "IN_USE";
        UNAVAILABLE: "UNAVAILABLE";
    }>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ContentScalarWhereWithAggregatesInput.schema.d.ts.map