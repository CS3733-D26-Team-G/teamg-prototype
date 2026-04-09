import * as z from 'zod';
const makeSchema = () => z.object({
    employeeUuid: z.literal(true).optional(),
    username: z.literal(true).optional(),
    password: z.literal(true).optional(),
    type: z.literal(true).optional(),
    _all: z.literal(true).optional()
}).strict();
export const AccountCountAggregateInputObjectSchema = makeSchema();
export const AccountCountAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountCountAggregateInput.schema.js.map