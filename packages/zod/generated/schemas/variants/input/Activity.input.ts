import * as z from 'zod';
import { ActionTypeSchema } from '../../enums/ActionType.schema.ts';
import { ResourceTypeSchema } from '../../enums/ResourceType.schema.ts';
// prettier-ignore
export const ActivityInputSchema = z.object({
    uuid: z.string(),
    employeeUuid: z.string(),
    action: ActionTypeSchema,
    resource: ResourceTypeSchema.optional().nullable(),
    resourceUuid: z.string().optional().nullable(),
    timestamp: z.date()
}).strict();

export type ActivityInputType = z.infer<typeof ActivityInputSchema>;
