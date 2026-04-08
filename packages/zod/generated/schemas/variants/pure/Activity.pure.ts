import * as z from 'zod';
import { ActionTypeSchema } from '../../enums/ActionType.schema.ts';
import { ResourceTypeSchema } from '../../enums/ResourceType.schema.ts';
// prettier-ignore
export const ActivityModelSchema = z.object({
    uuid: z.string(),
    employeeUuid: z.string(),
    action: ActionTypeSchema,
    resource: ResourceTypeSchema.nullable(),
    resourceUuid: z.string().nullable(),
    timestamp: z.date()
}).strict();

export type ActivityPureType = z.infer<typeof ActivityModelSchema>;
