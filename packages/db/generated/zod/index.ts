import { z } from 'zod';
import type { Prisma } from '../prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const EmployeeScalarFieldEnumSchema = z.enum(['uuid','accountUsername','first_name','last_name','date_of_birth','position','department','start_date','supervisor','phone_number','personal_email','corporate_email']);

export const ContentScalarFieldEnumSchema = z.enum(['uuid','title','url','content_owner','for_position','last_modified_time','expiration_time','content_type','status']);

export const AccountScalarFieldEnumSchema = z.enum(['employeeUuid','username','password','type']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const DepartmentSchema = z.enum(['OPERATION_TECHNOLOGY','ACCOUNTING']);

export type DepartmentType = `${z.infer<typeof DepartmentSchema>}`

export const PositionSchema = z.enum(['UNDERWRITER','BUSINESS_ANALYST']);

export type PositionType = `${z.infer<typeof PositionSchema>}`

export const ContentTypeSchema = z.enum(['REFERENCE','WORKFLOW']);

export type ContentTypeType = `${z.infer<typeof ContentTypeSchema>}`

export const ContentStatusSchema = z.enum(['AVAILABLE','IN_USE','UNAVAILABLE']);

export type ContentStatusType = `${z.infer<typeof ContentStatusSchema>}`

export const AccountTypeSchema = z.enum(['ADMIN','EMPLOYEE']);

export type AccountTypeType = `${z.infer<typeof AccountTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// EMPLOYEE SCHEMA
/////////////////////////////////////////

export const EmployeeSchema = z.object({
  position: PositionSchema,
  department: DepartmentSchema,
  uuid: z.uuid(),
  accountUsername: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z.coerce.date(),
  start_date: z.coerce.date(),
  supervisor: z.string(),
  phone_number: z.string(),
  personal_email: z.string(),
  corporate_email: z.string(),
})

export type Employee = z.infer<typeof EmployeeSchema>

// EMPLOYEE OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const EmployeeOptionalDefaultsSchema = EmployeeSchema.merge(z.object({
  uuid: z.uuid().optional(),
}))

export type EmployeeOptionalDefaults = z.infer<typeof EmployeeOptionalDefaultsSchema>

/////////////////////////////////////////
// CONTENT SCHEMA
/////////////////////////////////////////

export const ContentSchema = z.object({
  for_position: PositionSchema,
  content_type: ContentTypeSchema,
  status: ContentStatusSchema,
  uuid: z.uuid(),
  title: z.string(),
  url: z.string(),
  content_owner: z.string(),
  last_modified_time: z.coerce.date(),
  expiration_time: z.coerce.date(),
})

export type Content = z.infer<typeof ContentSchema>

// CONTENT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ContentOptionalDefaultsSchema = ContentSchema.merge(z.object({
  uuid: z.uuid().optional(),
}))

export type ContentOptionalDefaults = z.infer<typeof ContentOptionalDefaultsSchema>

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  type: AccountTypeSchema,
  employeeUuid: z.string().nullable(),
  username: z.string(),
  password: z.string(),
})

export type Account = z.infer<typeof AccountSchema>

// ACCOUNT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const AccountOptionalDefaultsSchema = AccountSchema.merge(z.object({
}))

export type AccountOptionalDefaults = z.infer<typeof AccountOptionalDefaultsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// EMPLOYEE
//------------------------------------------------------

export const EmployeeIncludeSchema: z.ZodType<Prisma.EmployeeInclude> = z.object({
  account: z.union([z.boolean(),z.lazy(() => AccountArgsSchema)]).optional(),
}).strict();

export const EmployeeArgsSchema: z.ZodType<Prisma.EmployeeDefaultArgs> = z.object({
  select: z.lazy(() => EmployeeSelectSchema).optional(),
  include: z.lazy(() => EmployeeIncludeSchema).optional(),
}).strict();

export const EmployeeSelectSchema: z.ZodType<Prisma.EmployeeSelect> = z.object({
  uuid: z.boolean().optional(),
  accountUsername: z.boolean().optional(),
  first_name: z.boolean().optional(),
  last_name: z.boolean().optional(),
  date_of_birth: z.boolean().optional(),
  position: z.boolean().optional(),
  department: z.boolean().optional(),
  start_date: z.boolean().optional(),
  supervisor: z.boolean().optional(),
  phone_number: z.boolean().optional(),
  personal_email: z.boolean().optional(),
  corporate_email: z.boolean().optional(),
  account: z.union([z.boolean(),z.lazy(() => AccountArgsSchema)]).optional(),
}).strict()

// CONTENT
//------------------------------------------------------

export const ContentSelectSchema: z.ZodType<Prisma.ContentSelect> = z.object({
  uuid: z.boolean().optional(),
  title: z.boolean().optional(),
  url: z.boolean().optional(),
  content_owner: z.boolean().optional(),
  for_position: z.boolean().optional(),
  last_modified_time: z.boolean().optional(),
  expiration_time: z.boolean().optional(),
  content_type: z.boolean().optional(),
  status: z.boolean().optional(),
}).strict()

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  employee: z.union([z.boolean(),z.lazy(() => EmployeeArgsSchema)]).optional(),
}).strict();

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  employeeUuid: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  type: z.boolean().optional(),
  employee: z.union([z.boolean(),z.lazy(() => EmployeeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const EmployeeWhereInputSchema: z.ZodType<Prisma.EmployeeWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => EmployeeWhereInputSchema), z.lazy(() => EmployeeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EmployeeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EmployeeWhereInputSchema), z.lazy(() => EmployeeWhereInputSchema).array() ]).optional(),
  uuid: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  accountUsername: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  first_name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  last_name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  date_of_birth: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  position: z.union([ z.lazy(() => EnumPositionFilterSchema), z.lazy(() => PositionSchema) ]).optional(),
  department: z.union([ z.lazy(() => EnumDepartmentFilterSchema), z.lazy(() => DepartmentSchema) ]).optional(),
  start_date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  supervisor: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  phone_number: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  personal_email: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  corporate_email: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  account: z.union([ z.lazy(() => AccountScalarRelationFilterSchema), z.lazy(() => AccountWhereInputSchema) ]).optional(),
});

export const EmployeeOrderByWithRelationInputSchema: z.ZodType<Prisma.EmployeeOrderByWithRelationInput> = z.strictObject({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  accountUsername: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  date_of_birth: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  department: z.lazy(() => SortOrderSchema).optional(),
  start_date: z.lazy(() => SortOrderSchema).optional(),
  supervisor: z.lazy(() => SortOrderSchema).optional(),
  phone_number: z.lazy(() => SortOrderSchema).optional(),
  personal_email: z.lazy(() => SortOrderSchema).optional(),
  corporate_email: z.lazy(() => SortOrderSchema).optional(),
  account: z.lazy(() => AccountOrderByWithRelationInputSchema).optional(),
});

export const EmployeeWhereUniqueInputSchema: z.ZodType<Prisma.EmployeeWhereUniqueInput> = z.union([
  z.object({
    uuid: z.uuid(),
    accountUsername: z.string(),
  }),
  z.object({
    uuid: z.uuid(),
  }),
  z.object({
    accountUsername: z.string(),
  }),
])
.and(z.strictObject({
  uuid: z.uuid().optional(),
  accountUsername: z.string().optional(),
  AND: z.union([ z.lazy(() => EmployeeWhereInputSchema), z.lazy(() => EmployeeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EmployeeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EmployeeWhereInputSchema), z.lazy(() => EmployeeWhereInputSchema).array() ]).optional(),
  first_name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  last_name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  date_of_birth: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  position: z.union([ z.lazy(() => EnumPositionFilterSchema), z.lazy(() => PositionSchema) ]).optional(),
  department: z.union([ z.lazy(() => EnumDepartmentFilterSchema), z.lazy(() => DepartmentSchema) ]).optional(),
  start_date: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  supervisor: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  phone_number: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  personal_email: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  corporate_email: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  account: z.union([ z.lazy(() => AccountScalarRelationFilterSchema), z.lazy(() => AccountWhereInputSchema) ]).optional(),
}));

export const EmployeeOrderByWithAggregationInputSchema: z.ZodType<Prisma.EmployeeOrderByWithAggregationInput> = z.strictObject({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  accountUsername: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  date_of_birth: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  department: z.lazy(() => SortOrderSchema).optional(),
  start_date: z.lazy(() => SortOrderSchema).optional(),
  supervisor: z.lazy(() => SortOrderSchema).optional(),
  phone_number: z.lazy(() => SortOrderSchema).optional(),
  personal_email: z.lazy(() => SortOrderSchema).optional(),
  corporate_email: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EmployeeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EmployeeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EmployeeMinOrderByAggregateInputSchema).optional(),
});

export const EmployeeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EmployeeScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => EmployeeScalarWhereWithAggregatesInputSchema), z.lazy(() => EmployeeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EmployeeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EmployeeScalarWhereWithAggregatesInputSchema), z.lazy(() => EmployeeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  uuid: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  accountUsername: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  first_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  last_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  date_of_birth: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  position: z.union([ z.lazy(() => EnumPositionWithAggregatesFilterSchema), z.lazy(() => PositionSchema) ]).optional(),
  department: z.union([ z.lazy(() => EnumDepartmentWithAggregatesFilterSchema), z.lazy(() => DepartmentSchema) ]).optional(),
  start_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  supervisor: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  phone_number: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  personal_email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  corporate_email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
});

export const ContentWhereInputSchema: z.ZodType<Prisma.ContentWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ContentWhereInputSchema), z.lazy(() => ContentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContentWhereInputSchema), z.lazy(() => ContentWhereInputSchema).array() ]).optional(),
  uuid: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  content_owner: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  for_position: z.union([ z.lazy(() => EnumPositionFilterSchema), z.lazy(() => PositionSchema) ]).optional(),
  last_modified_time: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  expiration_time: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  content_type: z.union([ z.lazy(() => EnumContentTypeFilterSchema), z.lazy(() => ContentTypeSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumContentStatusFilterSchema), z.lazy(() => ContentStatusSchema) ]).optional(),
});

export const ContentOrderByWithRelationInputSchema: z.ZodType<Prisma.ContentOrderByWithRelationInput> = z.strictObject({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  content_owner: z.lazy(() => SortOrderSchema).optional(),
  for_position: z.lazy(() => SortOrderSchema).optional(),
  last_modified_time: z.lazy(() => SortOrderSchema).optional(),
  expiration_time: z.lazy(() => SortOrderSchema).optional(),
  content_type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
});

export const ContentWhereUniqueInputSchema: z.ZodType<Prisma.ContentWhereUniqueInput> = z.object({
  uuid: z.uuid(),
})
.and(z.strictObject({
  uuid: z.uuid().optional(),
  AND: z.union([ z.lazy(() => ContentWhereInputSchema), z.lazy(() => ContentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContentWhereInputSchema), z.lazy(() => ContentWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  content_owner: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  for_position: z.union([ z.lazy(() => EnumPositionFilterSchema), z.lazy(() => PositionSchema) ]).optional(),
  last_modified_time: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  expiration_time: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  content_type: z.union([ z.lazy(() => EnumContentTypeFilterSchema), z.lazy(() => ContentTypeSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumContentStatusFilterSchema), z.lazy(() => ContentStatusSchema) ]).optional(),
}));

export const ContentOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContentOrderByWithAggregationInput> = z.strictObject({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  content_owner: z.lazy(() => SortOrderSchema).optional(),
  for_position: z.lazy(() => SortOrderSchema).optional(),
  last_modified_time: z.lazy(() => SortOrderSchema).optional(),
  expiration_time: z.lazy(() => SortOrderSchema).optional(),
  content_type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ContentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ContentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ContentMinOrderByAggregateInputSchema).optional(),
});

export const ContentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ContentScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ContentScalarWhereWithAggregatesInputSchema), z.lazy(() => ContentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContentScalarWhereWithAggregatesInputSchema), z.lazy(() => ContentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  uuid: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  content_owner: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  for_position: z.union([ z.lazy(() => EnumPositionWithAggregatesFilterSchema), z.lazy(() => PositionSchema) ]).optional(),
  last_modified_time: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  expiration_time: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  content_type: z.union([ z.lazy(() => EnumContentTypeWithAggregatesFilterSchema), z.lazy(() => ContentTypeSchema) ]).optional(),
  status: z.union([ z.lazy(() => EnumContentStatusWithAggregatesFilterSchema), z.lazy(() => ContentStatusSchema) ]).optional(),
});

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  employeeUuid: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumAccountTypeFilterSchema), z.lazy(() => AccountTypeSchema) ]).optional(),
  employee: z.union([ z.lazy(() => EmployeeNullableScalarRelationFilterSchema), z.lazy(() => EmployeeWhereInputSchema) ]).optional().nullable(),
});

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.strictObject({
  employeeUuid: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  employee: z.lazy(() => EmployeeOrderByWithRelationInputSchema).optional(),
});

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.union([
  z.object({
    username: z.string(),
    employeeUuid: z.string(),
  }),
  z.object({
    username: z.string(),
  }),
  z.object({
    employeeUuid: z.string(),
  }),
])
.and(z.strictObject({
  employeeUuid: z.string().optional(),
  username: z.string().optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumAccountTypeFilterSchema), z.lazy(() => AccountTypeSchema) ]).optional(),
  employee: z.union([ z.lazy(() => EmployeeNullableScalarRelationFilterSchema), z.lazy(() => EmployeeWhereInputSchema) ]).optional().nullable(),
}));

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.strictObject({
  employeeUuid: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
});

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema), z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema), z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  employeeUuid: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumAccountTypeWithAggregatesFilterSchema), z.lazy(() => AccountTypeSchema) ]).optional(),
});

export const EmployeeCreateInputSchema: z.ZodType<Prisma.EmployeeCreateInput> = z.strictObject({
  uuid: z.uuid().optional(),
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z.coerce.date(),
  position: z.lazy(() => PositionSchema),
  department: z.lazy(() => DepartmentSchema),
  start_date: z.coerce.date(),
  supervisor: z.string(),
  phone_number: z.string(),
  personal_email: z.string(),
  corporate_email: z.string(),
  account: z.lazy(() => AccountCreateNestedOneWithoutEmployeeInputSchema),
});

export const EmployeeUncheckedCreateInputSchema: z.ZodType<Prisma.EmployeeUncheckedCreateInput> = z.strictObject({
  uuid: z.uuid().optional(),
  accountUsername: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z.coerce.date(),
  position: z.lazy(() => PositionSchema),
  department: z.lazy(() => DepartmentSchema),
  start_date: z.coerce.date(),
  supervisor: z.string(),
  phone_number: z.string(),
  personal_email: z.string(),
  corporate_email: z.string(),
});

export const EmployeeUpdateInputSchema: z.ZodType<Prisma.EmployeeUpdateInput> = z.strictObject({
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_birth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.lazy(() => PositionSchema), z.lazy(() => EnumPositionFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.union([ z.lazy(() => DepartmentSchema), z.lazy(() => EnumDepartmentFieldUpdateOperationsInputSchema) ]).optional(),
  start_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  supervisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personal_email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  corporate_email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  account: z.lazy(() => AccountUpdateOneRequiredWithoutEmployeeNestedInputSchema).optional(),
});

export const EmployeeUncheckedUpdateInputSchema: z.ZodType<Prisma.EmployeeUncheckedUpdateInput> = z.strictObject({
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountUsername: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_birth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.lazy(() => PositionSchema), z.lazy(() => EnumPositionFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.union([ z.lazy(() => DepartmentSchema), z.lazy(() => EnumDepartmentFieldUpdateOperationsInputSchema) ]).optional(),
  start_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  supervisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personal_email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  corporate_email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const EmployeeCreateManyInputSchema: z.ZodType<Prisma.EmployeeCreateManyInput> = z.strictObject({
  uuid: z.uuid().optional(),
  accountUsername: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z.coerce.date(),
  position: z.lazy(() => PositionSchema),
  department: z.lazy(() => DepartmentSchema),
  start_date: z.coerce.date(),
  supervisor: z.string(),
  phone_number: z.string(),
  personal_email: z.string(),
  corporate_email: z.string(),
});

export const EmployeeUpdateManyMutationInputSchema: z.ZodType<Prisma.EmployeeUpdateManyMutationInput> = z.strictObject({
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_birth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.lazy(() => PositionSchema), z.lazy(() => EnumPositionFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.union([ z.lazy(() => DepartmentSchema), z.lazy(() => EnumDepartmentFieldUpdateOperationsInputSchema) ]).optional(),
  start_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  supervisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personal_email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  corporate_email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const EmployeeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EmployeeUncheckedUpdateManyInput> = z.strictObject({
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountUsername: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_birth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.lazy(() => PositionSchema), z.lazy(() => EnumPositionFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.union([ z.lazy(() => DepartmentSchema), z.lazy(() => EnumDepartmentFieldUpdateOperationsInputSchema) ]).optional(),
  start_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  supervisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personal_email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  corporate_email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ContentCreateInputSchema: z.ZodType<Prisma.ContentCreateInput> = z.strictObject({
  uuid: z.uuid().optional(),
  title: z.string(),
  url: z.string(),
  content_owner: z.string(),
  for_position: z.lazy(() => PositionSchema),
  last_modified_time: z.coerce.date(),
  expiration_time: z.coerce.date(),
  content_type: z.lazy(() => ContentTypeSchema),
  status: z.lazy(() => ContentStatusSchema),
});

export const ContentUncheckedCreateInputSchema: z.ZodType<Prisma.ContentUncheckedCreateInput> = z.strictObject({
  uuid: z.uuid().optional(),
  title: z.string(),
  url: z.string(),
  content_owner: z.string(),
  for_position: z.lazy(() => PositionSchema),
  last_modified_time: z.coerce.date(),
  expiration_time: z.coerce.date(),
  content_type: z.lazy(() => ContentTypeSchema),
  status: z.lazy(() => ContentStatusSchema),
});

export const ContentUpdateInputSchema: z.ZodType<Prisma.ContentUpdateInput> = z.strictObject({
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content_owner: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  for_position: z.union([ z.lazy(() => PositionSchema), z.lazy(() => EnumPositionFieldUpdateOperationsInputSchema) ]).optional(),
  last_modified_time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  content_type: z.union([ z.lazy(() => ContentTypeSchema), z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => ContentStatusSchema), z.lazy(() => EnumContentStatusFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ContentUncheckedUpdateInputSchema: z.ZodType<Prisma.ContentUncheckedUpdateInput> = z.strictObject({
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content_owner: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  for_position: z.union([ z.lazy(() => PositionSchema), z.lazy(() => EnumPositionFieldUpdateOperationsInputSchema) ]).optional(),
  last_modified_time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  content_type: z.union([ z.lazy(() => ContentTypeSchema), z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => ContentStatusSchema), z.lazy(() => EnumContentStatusFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ContentCreateManyInputSchema: z.ZodType<Prisma.ContentCreateManyInput> = z.strictObject({
  uuid: z.uuid().optional(),
  title: z.string(),
  url: z.string(),
  content_owner: z.string(),
  for_position: z.lazy(() => PositionSchema),
  last_modified_time: z.coerce.date(),
  expiration_time: z.coerce.date(),
  content_type: z.lazy(() => ContentTypeSchema),
  status: z.lazy(() => ContentStatusSchema),
});

export const ContentUpdateManyMutationInputSchema: z.ZodType<Prisma.ContentUpdateManyMutationInput> = z.strictObject({
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content_owner: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  for_position: z.union([ z.lazy(() => PositionSchema), z.lazy(() => EnumPositionFieldUpdateOperationsInputSchema) ]).optional(),
  last_modified_time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  content_type: z.union([ z.lazy(() => ContentTypeSchema), z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => ContentStatusSchema), z.lazy(() => EnumContentStatusFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ContentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ContentUncheckedUpdateManyInput> = z.strictObject({
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content_owner: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  for_position: z.union([ z.lazy(() => PositionSchema), z.lazy(() => EnumPositionFieldUpdateOperationsInputSchema) ]).optional(),
  last_modified_time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiration_time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  content_type: z.union([ z.lazy(() => ContentTypeSchema), z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => ContentStatusSchema), z.lazy(() => EnumContentStatusFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.strictObject({
  employeeUuid: z.string().optional().nullable(),
  username: z.string(),
  password: z.string(),
  type: z.lazy(() => AccountTypeSchema),
  employee: z.lazy(() => EmployeeCreateNestedOneWithoutAccountInputSchema).optional(),
});

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.strictObject({
  employeeUuid: z.string().optional().nullable(),
  username: z.string(),
  password: z.string(),
  type: z.lazy(() => AccountTypeSchema),
  employee: z.lazy(() => EmployeeUncheckedCreateNestedOneWithoutAccountInputSchema).optional(),
});

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.strictObject({
  employeeUuid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema), z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  employee: z.lazy(() => EmployeeUpdateOneWithoutAccountNestedInputSchema).optional(),
});

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.strictObject({
  employeeUuid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema), z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  employee: z.lazy(() => EmployeeUncheckedUpdateOneWithoutAccountNestedInputSchema).optional(),
});

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.strictObject({
  employeeUuid: z.string().optional().nullable(),
  username: z.string(),
  password: z.string(),
  type: z.lazy(() => AccountTypeSchema),
});

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.strictObject({
  employeeUuid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema), z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.strictObject({
  employeeUuid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema), z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
});

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const EnumPositionFilterSchema: z.ZodType<Prisma.EnumPositionFilter> = z.strictObject({
  equals: z.lazy(() => PositionSchema).optional(),
  in: z.lazy(() => PositionSchema).array().optional(),
  notIn: z.lazy(() => PositionSchema).array().optional(),
  not: z.union([ z.lazy(() => PositionSchema), z.lazy(() => NestedEnumPositionFilterSchema) ]).optional(),
});

export const EnumDepartmentFilterSchema: z.ZodType<Prisma.EnumDepartmentFilter> = z.strictObject({
  equals: z.lazy(() => DepartmentSchema).optional(),
  in: z.lazy(() => DepartmentSchema).array().optional(),
  notIn: z.lazy(() => DepartmentSchema).array().optional(),
  not: z.union([ z.lazy(() => DepartmentSchema), z.lazy(() => NestedEnumDepartmentFilterSchema) ]).optional(),
});

export const AccountScalarRelationFilterSchema: z.ZodType<Prisma.AccountScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => AccountWhereInputSchema).optional(),
  isNot: z.lazy(() => AccountWhereInputSchema).optional(),
});

export const EmployeeCountOrderByAggregateInputSchema: z.ZodType<Prisma.EmployeeCountOrderByAggregateInput> = z.strictObject({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  accountUsername: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  date_of_birth: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  department: z.lazy(() => SortOrderSchema).optional(),
  start_date: z.lazy(() => SortOrderSchema).optional(),
  supervisor: z.lazy(() => SortOrderSchema).optional(),
  phone_number: z.lazy(() => SortOrderSchema).optional(),
  personal_email: z.lazy(() => SortOrderSchema).optional(),
  corporate_email: z.lazy(() => SortOrderSchema).optional(),
});

export const EmployeeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EmployeeMaxOrderByAggregateInput> = z.strictObject({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  accountUsername: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  date_of_birth: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  department: z.lazy(() => SortOrderSchema).optional(),
  start_date: z.lazy(() => SortOrderSchema).optional(),
  supervisor: z.lazy(() => SortOrderSchema).optional(),
  phone_number: z.lazy(() => SortOrderSchema).optional(),
  personal_email: z.lazy(() => SortOrderSchema).optional(),
  corporate_email: z.lazy(() => SortOrderSchema).optional(),
});

export const EmployeeMinOrderByAggregateInputSchema: z.ZodType<Prisma.EmployeeMinOrderByAggregateInput> = z.strictObject({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  accountUsername: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  date_of_birth: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  department: z.lazy(() => SortOrderSchema).optional(),
  start_date: z.lazy(() => SortOrderSchema).optional(),
  supervisor: z.lazy(() => SortOrderSchema).optional(),
  phone_number: z.lazy(() => SortOrderSchema).optional(),
  personal_email: z.lazy(() => SortOrderSchema).optional(),
  corporate_email: z.lazy(() => SortOrderSchema).optional(),
});

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const EnumPositionWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPositionWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => PositionSchema).optional(),
  in: z.lazy(() => PositionSchema).array().optional(),
  notIn: z.lazy(() => PositionSchema).array().optional(),
  not: z.union([ z.lazy(() => PositionSchema), z.lazy(() => NestedEnumPositionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPositionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPositionFilterSchema).optional(),
});

export const EnumDepartmentWithAggregatesFilterSchema: z.ZodType<Prisma.EnumDepartmentWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => DepartmentSchema).optional(),
  in: z.lazy(() => DepartmentSchema).array().optional(),
  notIn: z.lazy(() => DepartmentSchema).array().optional(),
  not: z.union([ z.lazy(() => DepartmentSchema), z.lazy(() => NestedEnumDepartmentWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumDepartmentFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumDepartmentFilterSchema).optional(),
});

export const EnumContentTypeFilterSchema: z.ZodType<Prisma.EnumContentTypeFilter> = z.strictObject({
  equals: z.lazy(() => ContentTypeSchema).optional(),
  in: z.lazy(() => ContentTypeSchema).array().optional(),
  notIn: z.lazy(() => ContentTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ContentTypeSchema), z.lazy(() => NestedEnumContentTypeFilterSchema) ]).optional(),
});

export const EnumContentStatusFilterSchema: z.ZodType<Prisma.EnumContentStatusFilter> = z.strictObject({
  equals: z.lazy(() => ContentStatusSchema).optional(),
  in: z.lazy(() => ContentStatusSchema).array().optional(),
  notIn: z.lazy(() => ContentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ContentStatusSchema), z.lazy(() => NestedEnumContentStatusFilterSchema) ]).optional(),
});

export const ContentCountOrderByAggregateInputSchema: z.ZodType<Prisma.ContentCountOrderByAggregateInput> = z.strictObject({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  content_owner: z.lazy(() => SortOrderSchema).optional(),
  for_position: z.lazy(() => SortOrderSchema).optional(),
  last_modified_time: z.lazy(() => SortOrderSchema).optional(),
  expiration_time: z.lazy(() => SortOrderSchema).optional(),
  content_type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
});

export const ContentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ContentMaxOrderByAggregateInput> = z.strictObject({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  content_owner: z.lazy(() => SortOrderSchema).optional(),
  for_position: z.lazy(() => SortOrderSchema).optional(),
  last_modified_time: z.lazy(() => SortOrderSchema).optional(),
  expiration_time: z.lazy(() => SortOrderSchema).optional(),
  content_type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
});

export const ContentMinOrderByAggregateInputSchema: z.ZodType<Prisma.ContentMinOrderByAggregateInput> = z.strictObject({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  content_owner: z.lazy(() => SortOrderSchema).optional(),
  for_position: z.lazy(() => SortOrderSchema).optional(),
  last_modified_time: z.lazy(() => SortOrderSchema).optional(),
  expiration_time: z.lazy(() => SortOrderSchema).optional(),
  content_type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
});

export const EnumContentTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumContentTypeWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ContentTypeSchema).optional(),
  in: z.lazy(() => ContentTypeSchema).array().optional(),
  notIn: z.lazy(() => ContentTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ContentTypeSchema), z.lazy(() => NestedEnumContentTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumContentTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumContentTypeFilterSchema).optional(),
});

export const EnumContentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumContentStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ContentStatusSchema).optional(),
  in: z.lazy(() => ContentStatusSchema).array().optional(),
  notIn: z.lazy(() => ContentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ContentStatusSchema), z.lazy(() => NestedEnumContentStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumContentStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumContentStatusFilterSchema).optional(),
});

export const UuidNullableFilterSchema: z.ZodType<Prisma.UuidNullableFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
});

export const EnumAccountTypeFilterSchema: z.ZodType<Prisma.EnumAccountTypeFilter> = z.strictObject({
  equals: z.lazy(() => AccountTypeSchema).optional(),
  in: z.lazy(() => AccountTypeSchema).array().optional(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountTypeSchema), z.lazy(() => NestedEnumAccountTypeFilterSchema) ]).optional(),
});

export const EmployeeNullableScalarRelationFilterSchema: z.ZodType<Prisma.EmployeeNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => EmployeeWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => EmployeeWhereInputSchema).optional().nullable(),
});

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.strictObject({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional(),
});

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.strictObject({
  employeeUuid: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
});

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.strictObject({
  employeeUuid: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
});

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.strictObject({
  employeeUuid: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
});

export const UuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.UuidNullableWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
});

export const EnumAccountTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAccountTypeWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => AccountTypeSchema).optional(),
  in: z.lazy(() => AccountTypeSchema).array().optional(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountTypeSchema), z.lazy(() => NestedEnumAccountTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAccountTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAccountTypeFilterSchema).optional(),
});

export const AccountCreateNestedOneWithoutEmployeeInputSchema: z.ZodType<Prisma.AccountCreateNestedOneWithoutEmployeeInput> = z.strictObject({
  create: z.union([ z.lazy(() => AccountCreateWithoutEmployeeInputSchema), z.lazy(() => AccountUncheckedCreateWithoutEmployeeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutEmployeeInputSchema).optional(),
  connect: z.lazy(() => AccountWhereUniqueInputSchema).optional(),
});

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional(),
});

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.strictObject({
  set: z.coerce.date().optional(),
});

export const EnumPositionFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPositionFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => PositionSchema).optional(),
});

export const EnumDepartmentFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDepartmentFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => DepartmentSchema).optional(),
});

export const AccountUpdateOneRequiredWithoutEmployeeNestedInputSchema: z.ZodType<Prisma.AccountUpdateOneRequiredWithoutEmployeeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AccountCreateWithoutEmployeeInputSchema), z.lazy(() => AccountUncheckedCreateWithoutEmployeeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutEmployeeInputSchema).optional(),
  upsert: z.lazy(() => AccountUpsertWithoutEmployeeInputSchema).optional(),
  connect: z.lazy(() => AccountWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AccountUpdateToOneWithWhereWithoutEmployeeInputSchema), z.lazy(() => AccountUpdateWithoutEmployeeInputSchema), z.lazy(() => AccountUncheckedUpdateWithoutEmployeeInputSchema) ]).optional(),
});

export const EnumContentTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumContentTypeFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => ContentTypeSchema).optional(),
});

export const EnumContentStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumContentStatusFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => ContentStatusSchema).optional(),
});

export const EmployeeCreateNestedOneWithoutAccountInputSchema: z.ZodType<Prisma.EmployeeCreateNestedOneWithoutAccountInput> = z.strictObject({
  create: z.union([ z.lazy(() => EmployeeCreateWithoutAccountInputSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EmployeeCreateOrConnectWithoutAccountInputSchema).optional(),
  connect: z.lazy(() => EmployeeWhereUniqueInputSchema).optional(),
});

export const EmployeeUncheckedCreateNestedOneWithoutAccountInputSchema: z.ZodType<Prisma.EmployeeUncheckedCreateNestedOneWithoutAccountInput> = z.strictObject({
  create: z.union([ z.lazy(() => EmployeeCreateWithoutAccountInputSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EmployeeCreateOrConnectWithoutAccountInputSchema).optional(),
  connect: z.lazy(() => EmployeeWhereUniqueInputSchema).optional(),
});

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional().nullable(),
});

export const EnumAccountTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAccountTypeFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => AccountTypeSchema).optional(),
});

export const EmployeeUpdateOneWithoutAccountNestedInputSchema: z.ZodType<Prisma.EmployeeUpdateOneWithoutAccountNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => EmployeeCreateWithoutAccountInputSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EmployeeCreateOrConnectWithoutAccountInputSchema).optional(),
  upsert: z.lazy(() => EmployeeUpsertWithoutAccountInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => EmployeeWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => EmployeeWhereInputSchema) ]).optional(),
  connect: z.lazy(() => EmployeeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EmployeeUpdateToOneWithWhereWithoutAccountInputSchema), z.lazy(() => EmployeeUpdateWithoutAccountInputSchema), z.lazy(() => EmployeeUncheckedUpdateWithoutAccountInputSchema) ]).optional(),
});

export const EmployeeUncheckedUpdateOneWithoutAccountNestedInputSchema: z.ZodType<Prisma.EmployeeUncheckedUpdateOneWithoutAccountNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => EmployeeCreateWithoutAccountInputSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EmployeeCreateOrConnectWithoutAccountInputSchema).optional(),
  upsert: z.lazy(() => EmployeeUpsertWithoutAccountInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => EmployeeWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => EmployeeWhereInputSchema) ]).optional(),
  connect: z.lazy(() => EmployeeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EmployeeUpdateToOneWithWhereWithoutAccountInputSchema), z.lazy(() => EmployeeUpdateWithoutAccountInputSchema), z.lazy(() => EmployeeUncheckedUpdateWithoutAccountInputSchema) ]).optional(),
});

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
});

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const NestedEnumPositionFilterSchema: z.ZodType<Prisma.NestedEnumPositionFilter> = z.strictObject({
  equals: z.lazy(() => PositionSchema).optional(),
  in: z.lazy(() => PositionSchema).array().optional(),
  notIn: z.lazy(() => PositionSchema).array().optional(),
  not: z.union([ z.lazy(() => PositionSchema), z.lazy(() => NestedEnumPositionFilterSchema) ]).optional(),
});

export const NestedEnumDepartmentFilterSchema: z.ZodType<Prisma.NestedEnumDepartmentFilter> = z.strictObject({
  equals: z.lazy(() => DepartmentSchema).optional(),
  in: z.lazy(() => DepartmentSchema).array().optional(),
  notIn: z.lazy(() => DepartmentSchema).array().optional(),
  not: z.union([ z.lazy(() => DepartmentSchema), z.lazy(() => NestedEnumDepartmentFilterSchema) ]).optional(),
});

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
});

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const NestedEnumPositionWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPositionWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => PositionSchema).optional(),
  in: z.lazy(() => PositionSchema).array().optional(),
  notIn: z.lazy(() => PositionSchema).array().optional(),
  not: z.union([ z.lazy(() => PositionSchema), z.lazy(() => NestedEnumPositionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPositionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPositionFilterSchema).optional(),
});

export const NestedEnumDepartmentWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumDepartmentWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => DepartmentSchema).optional(),
  in: z.lazy(() => DepartmentSchema).array().optional(),
  notIn: z.lazy(() => DepartmentSchema).array().optional(),
  not: z.union([ z.lazy(() => DepartmentSchema), z.lazy(() => NestedEnumDepartmentWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumDepartmentFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumDepartmentFilterSchema).optional(),
});

export const NestedEnumContentTypeFilterSchema: z.ZodType<Prisma.NestedEnumContentTypeFilter> = z.strictObject({
  equals: z.lazy(() => ContentTypeSchema).optional(),
  in: z.lazy(() => ContentTypeSchema).array().optional(),
  notIn: z.lazy(() => ContentTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ContentTypeSchema), z.lazy(() => NestedEnumContentTypeFilterSchema) ]).optional(),
});

export const NestedEnumContentStatusFilterSchema: z.ZodType<Prisma.NestedEnumContentStatusFilter> = z.strictObject({
  equals: z.lazy(() => ContentStatusSchema).optional(),
  in: z.lazy(() => ContentStatusSchema).array().optional(),
  notIn: z.lazy(() => ContentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ContentStatusSchema), z.lazy(() => NestedEnumContentStatusFilterSchema) ]).optional(),
});

export const NestedEnumContentTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumContentTypeWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ContentTypeSchema).optional(),
  in: z.lazy(() => ContentTypeSchema).array().optional(),
  notIn: z.lazy(() => ContentTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ContentTypeSchema), z.lazy(() => NestedEnumContentTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumContentTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumContentTypeFilterSchema).optional(),
});

export const NestedEnumContentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumContentStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ContentStatusSchema).optional(),
  in: z.lazy(() => ContentStatusSchema).array().optional(),
  notIn: z.lazy(() => ContentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ContentStatusSchema), z.lazy(() => NestedEnumContentStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumContentStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumContentStatusFilterSchema).optional(),
});

export const NestedUuidNullableFilterSchema: z.ZodType<Prisma.NestedUuidNullableFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
});

export const NestedEnumAccountTypeFilterSchema: z.ZodType<Prisma.NestedEnumAccountTypeFilter> = z.strictObject({
  equals: z.lazy(() => AccountTypeSchema).optional(),
  in: z.lazy(() => AccountTypeSchema).array().optional(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountTypeSchema), z.lazy(() => NestedEnumAccountTypeFilterSchema) ]).optional(),
});

export const NestedUuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidNullableWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
});

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
});

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
});

export const NestedEnumAccountTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAccountTypeWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => AccountTypeSchema).optional(),
  in: z.lazy(() => AccountTypeSchema).array().optional(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountTypeSchema), z.lazy(() => NestedEnumAccountTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAccountTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAccountTypeFilterSchema).optional(),
});

export const AccountCreateWithoutEmployeeInputSchema: z.ZodType<Prisma.AccountCreateWithoutEmployeeInput> = z.strictObject({
  employeeUuid: z.string().optional().nullable(),
  username: z.string(),
  password: z.string(),
  type: z.lazy(() => AccountTypeSchema),
});

export const AccountUncheckedCreateWithoutEmployeeInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutEmployeeInput> = z.strictObject({
  employeeUuid: z.string().optional().nullable(),
  username: z.string(),
  password: z.string(),
  type: z.lazy(() => AccountTypeSchema),
});

export const AccountCreateOrConnectWithoutEmployeeInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutEmployeeInput> = z.strictObject({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutEmployeeInputSchema), z.lazy(() => AccountUncheckedCreateWithoutEmployeeInputSchema) ]),
});

export const AccountUpsertWithoutEmployeeInputSchema: z.ZodType<Prisma.AccountUpsertWithoutEmployeeInput> = z.strictObject({
  update: z.union([ z.lazy(() => AccountUpdateWithoutEmployeeInputSchema), z.lazy(() => AccountUncheckedUpdateWithoutEmployeeInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutEmployeeInputSchema), z.lazy(() => AccountUncheckedCreateWithoutEmployeeInputSchema) ]),
  where: z.lazy(() => AccountWhereInputSchema).optional(),
});

export const AccountUpdateToOneWithWhereWithoutEmployeeInputSchema: z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutEmployeeInput> = z.strictObject({
  where: z.lazy(() => AccountWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AccountUpdateWithoutEmployeeInputSchema), z.lazy(() => AccountUncheckedUpdateWithoutEmployeeInputSchema) ]),
});

export const AccountUpdateWithoutEmployeeInputSchema: z.ZodType<Prisma.AccountUpdateWithoutEmployeeInput> = z.strictObject({
  employeeUuid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema), z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const AccountUncheckedUpdateWithoutEmployeeInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutEmployeeInput> = z.strictObject({
  employeeUuid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema), z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const EmployeeCreateWithoutAccountInputSchema: z.ZodType<Prisma.EmployeeCreateWithoutAccountInput> = z.strictObject({
  uuid: z.uuid().optional(),
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z.coerce.date(),
  position: z.lazy(() => PositionSchema),
  department: z.lazy(() => DepartmentSchema),
  start_date: z.coerce.date(),
  supervisor: z.string(),
  phone_number: z.string(),
  personal_email: z.string(),
  corporate_email: z.string(),
});

export const EmployeeUncheckedCreateWithoutAccountInputSchema: z.ZodType<Prisma.EmployeeUncheckedCreateWithoutAccountInput> = z.strictObject({
  uuid: z.uuid().optional(),
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z.coerce.date(),
  position: z.lazy(() => PositionSchema),
  department: z.lazy(() => DepartmentSchema),
  start_date: z.coerce.date(),
  supervisor: z.string(),
  phone_number: z.string(),
  personal_email: z.string(),
  corporate_email: z.string(),
});

export const EmployeeCreateOrConnectWithoutAccountInputSchema: z.ZodType<Prisma.EmployeeCreateOrConnectWithoutAccountInput> = z.strictObject({
  where: z.lazy(() => EmployeeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EmployeeCreateWithoutAccountInputSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputSchema) ]),
});

export const EmployeeUpsertWithoutAccountInputSchema: z.ZodType<Prisma.EmployeeUpsertWithoutAccountInput> = z.strictObject({
  update: z.union([ z.lazy(() => EmployeeUpdateWithoutAccountInputSchema), z.lazy(() => EmployeeUncheckedUpdateWithoutAccountInputSchema) ]),
  create: z.union([ z.lazy(() => EmployeeCreateWithoutAccountInputSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputSchema) ]),
  where: z.lazy(() => EmployeeWhereInputSchema).optional(),
});

export const EmployeeUpdateToOneWithWhereWithoutAccountInputSchema: z.ZodType<Prisma.EmployeeUpdateToOneWithWhereWithoutAccountInput> = z.strictObject({
  where: z.lazy(() => EmployeeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EmployeeUpdateWithoutAccountInputSchema), z.lazy(() => EmployeeUncheckedUpdateWithoutAccountInputSchema) ]),
});

export const EmployeeUpdateWithoutAccountInputSchema: z.ZodType<Prisma.EmployeeUpdateWithoutAccountInput> = z.strictObject({
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_birth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.lazy(() => PositionSchema), z.lazy(() => EnumPositionFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.union([ z.lazy(() => DepartmentSchema), z.lazy(() => EnumDepartmentFieldUpdateOperationsInputSchema) ]).optional(),
  start_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  supervisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personal_email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  corporate_email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const EmployeeUncheckedUpdateWithoutAccountInputSchema: z.ZodType<Prisma.EmployeeUncheckedUpdateWithoutAccountInput> = z.strictObject({
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date_of_birth: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.lazy(() => PositionSchema), z.lazy(() => EnumPositionFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.union([ z.lazy(() => DepartmentSchema), z.lazy(() => EnumDepartmentFieldUpdateOperationsInputSchema) ]).optional(),
  start_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  supervisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personal_email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  corporate_email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const EmployeeFindFirstArgsSchema: z.ZodType<Prisma.EmployeeFindFirstArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  include: EmployeeIncludeSchema.optional(),
  where: EmployeeWhereInputSchema.optional(), 
  orderBy: z.union([ EmployeeOrderByWithRelationInputSchema.array(), EmployeeOrderByWithRelationInputSchema ]).optional(),
  cursor: EmployeeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EmployeeScalarFieldEnumSchema, EmployeeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const EmployeeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EmployeeFindFirstOrThrowArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  include: EmployeeIncludeSchema.optional(),
  where: EmployeeWhereInputSchema.optional(), 
  orderBy: z.union([ EmployeeOrderByWithRelationInputSchema.array(), EmployeeOrderByWithRelationInputSchema ]).optional(),
  cursor: EmployeeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EmployeeScalarFieldEnumSchema, EmployeeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const EmployeeFindManyArgsSchema: z.ZodType<Prisma.EmployeeFindManyArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  include: EmployeeIncludeSchema.optional(),
  where: EmployeeWhereInputSchema.optional(), 
  orderBy: z.union([ EmployeeOrderByWithRelationInputSchema.array(), EmployeeOrderByWithRelationInputSchema ]).optional(),
  cursor: EmployeeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EmployeeScalarFieldEnumSchema, EmployeeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const EmployeeAggregateArgsSchema: z.ZodType<Prisma.EmployeeAggregateArgs> = z.object({
  where: EmployeeWhereInputSchema.optional(), 
  orderBy: z.union([ EmployeeOrderByWithRelationInputSchema.array(), EmployeeOrderByWithRelationInputSchema ]).optional(),
  cursor: EmployeeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const EmployeeGroupByArgsSchema: z.ZodType<Prisma.EmployeeGroupByArgs> = z.object({
  where: EmployeeWhereInputSchema.optional(), 
  orderBy: z.union([ EmployeeOrderByWithAggregationInputSchema.array(), EmployeeOrderByWithAggregationInputSchema ]).optional(),
  by: EmployeeScalarFieldEnumSchema.array(), 
  having: EmployeeScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const EmployeeFindUniqueArgsSchema: z.ZodType<Prisma.EmployeeFindUniqueArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  include: EmployeeIncludeSchema.optional(),
  where: EmployeeWhereUniqueInputSchema, 
}).strict();

export const EmployeeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EmployeeFindUniqueOrThrowArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  include: EmployeeIncludeSchema.optional(),
  where: EmployeeWhereUniqueInputSchema, 
}).strict();

export const ContentFindFirstArgsSchema: z.ZodType<Prisma.ContentFindFirstArgs> = z.object({
  select: ContentSelectSchema.optional(),
  where: ContentWhereInputSchema.optional(), 
  orderBy: z.union([ ContentOrderByWithRelationInputSchema.array(), ContentOrderByWithRelationInputSchema ]).optional(),
  cursor: ContentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ContentScalarFieldEnumSchema, ContentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ContentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ContentFindFirstOrThrowArgs> = z.object({
  select: ContentSelectSchema.optional(),
  where: ContentWhereInputSchema.optional(), 
  orderBy: z.union([ ContentOrderByWithRelationInputSchema.array(), ContentOrderByWithRelationInputSchema ]).optional(),
  cursor: ContentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ContentScalarFieldEnumSchema, ContentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ContentFindManyArgsSchema: z.ZodType<Prisma.ContentFindManyArgs> = z.object({
  select: ContentSelectSchema.optional(),
  where: ContentWhereInputSchema.optional(), 
  orderBy: z.union([ ContentOrderByWithRelationInputSchema.array(), ContentOrderByWithRelationInputSchema ]).optional(),
  cursor: ContentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ContentScalarFieldEnumSchema, ContentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ContentAggregateArgsSchema: z.ZodType<Prisma.ContentAggregateArgs> = z.object({
  where: ContentWhereInputSchema.optional(), 
  orderBy: z.union([ ContentOrderByWithRelationInputSchema.array(), ContentOrderByWithRelationInputSchema ]).optional(),
  cursor: ContentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ContentGroupByArgsSchema: z.ZodType<Prisma.ContentGroupByArgs> = z.object({
  where: ContentWhereInputSchema.optional(), 
  orderBy: z.union([ ContentOrderByWithAggregationInputSchema.array(), ContentOrderByWithAggregationInputSchema ]).optional(),
  by: ContentScalarFieldEnumSchema.array(), 
  having: ContentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ContentFindUniqueArgsSchema: z.ZodType<Prisma.ContentFindUniqueArgs> = z.object({
  select: ContentSelectSchema.optional(),
  where: ContentWhereUniqueInputSchema, 
}).strict();

export const ContentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ContentFindUniqueOrThrowArgs> = z.object({
  select: ContentSelectSchema.optional(),
  where: ContentWhereUniqueInputSchema, 
}).strict();

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(), 
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(), 
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(), 
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(), 
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(), 
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(), AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(), 
  having: AccountScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema, 
}).strict();

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema, 
}).strict();

export const EmployeeCreateArgsSchema: z.ZodType<Prisma.EmployeeCreateArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  include: EmployeeIncludeSchema.optional(),
  data: z.union([ EmployeeCreateInputSchema, EmployeeUncheckedCreateInputSchema ]),
}).strict();

export const EmployeeUpsertArgsSchema: z.ZodType<Prisma.EmployeeUpsertArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  include: EmployeeIncludeSchema.optional(),
  where: EmployeeWhereUniqueInputSchema, 
  create: z.union([ EmployeeCreateInputSchema, EmployeeUncheckedCreateInputSchema ]),
  update: z.union([ EmployeeUpdateInputSchema, EmployeeUncheckedUpdateInputSchema ]),
}).strict();

export const EmployeeCreateManyArgsSchema: z.ZodType<Prisma.EmployeeCreateManyArgs> = z.object({
  data: z.union([ EmployeeCreateManyInputSchema, EmployeeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const EmployeeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EmployeeCreateManyAndReturnArgs> = z.object({
  data: z.union([ EmployeeCreateManyInputSchema, EmployeeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const EmployeeDeleteArgsSchema: z.ZodType<Prisma.EmployeeDeleteArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  include: EmployeeIncludeSchema.optional(),
  where: EmployeeWhereUniqueInputSchema, 
}).strict();

export const EmployeeUpdateArgsSchema: z.ZodType<Prisma.EmployeeUpdateArgs> = z.object({
  select: EmployeeSelectSchema.optional(),
  include: EmployeeIncludeSchema.optional(),
  data: z.union([ EmployeeUpdateInputSchema, EmployeeUncheckedUpdateInputSchema ]),
  where: EmployeeWhereUniqueInputSchema, 
}).strict();

export const EmployeeUpdateManyArgsSchema: z.ZodType<Prisma.EmployeeUpdateManyArgs> = z.object({
  data: z.union([ EmployeeUpdateManyMutationInputSchema, EmployeeUncheckedUpdateManyInputSchema ]),
  where: EmployeeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const EmployeeUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.EmployeeUpdateManyAndReturnArgs> = z.object({
  data: z.union([ EmployeeUpdateManyMutationInputSchema, EmployeeUncheckedUpdateManyInputSchema ]),
  where: EmployeeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const EmployeeDeleteManyArgsSchema: z.ZodType<Prisma.EmployeeDeleteManyArgs> = z.object({
  where: EmployeeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ContentCreateArgsSchema: z.ZodType<Prisma.ContentCreateArgs> = z.object({
  select: ContentSelectSchema.optional(),
  data: z.union([ ContentCreateInputSchema, ContentUncheckedCreateInputSchema ]),
}).strict();

export const ContentUpsertArgsSchema: z.ZodType<Prisma.ContentUpsertArgs> = z.object({
  select: ContentSelectSchema.optional(),
  where: ContentWhereUniqueInputSchema, 
  create: z.union([ ContentCreateInputSchema, ContentUncheckedCreateInputSchema ]),
  update: z.union([ ContentUpdateInputSchema, ContentUncheckedUpdateInputSchema ]),
}).strict();

export const ContentCreateManyArgsSchema: z.ZodType<Prisma.ContentCreateManyArgs> = z.object({
  data: z.union([ ContentCreateManyInputSchema, ContentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ContentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ContentCreateManyAndReturnArgs> = z.object({
  data: z.union([ ContentCreateManyInputSchema, ContentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ContentDeleteArgsSchema: z.ZodType<Prisma.ContentDeleteArgs> = z.object({
  select: ContentSelectSchema.optional(),
  where: ContentWhereUniqueInputSchema, 
}).strict();

export const ContentUpdateArgsSchema: z.ZodType<Prisma.ContentUpdateArgs> = z.object({
  select: ContentSelectSchema.optional(),
  data: z.union([ ContentUpdateInputSchema, ContentUncheckedUpdateInputSchema ]),
  where: ContentWhereUniqueInputSchema, 
}).strict();

export const ContentUpdateManyArgsSchema: z.ZodType<Prisma.ContentUpdateManyArgs> = z.object({
  data: z.union([ ContentUpdateManyMutationInputSchema, ContentUncheckedUpdateManyInputSchema ]),
  where: ContentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ContentUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ContentUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ContentUpdateManyMutationInputSchema, ContentUncheckedUpdateManyInputSchema ]),
  where: ContentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ContentDeleteManyArgsSchema: z.ZodType<Prisma.ContentDeleteManyArgs> = z.object({
  where: ContentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema, AccountUncheckedCreateInputSchema ]),
}).strict();

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema, 
  create: z.union([ AccountCreateInputSchema, AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema ]),
}).strict();

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema, AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const AccountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountCreateManyAndReturnArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema, AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema, 
}).strict();

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema, 
}).strict();

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema, AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const AccountUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema, AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();