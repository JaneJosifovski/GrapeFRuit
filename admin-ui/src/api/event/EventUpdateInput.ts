import { UpdateUpdateManyWithoutEventsInput } from "./UpdateUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  Added?: Date;
  Description?: string | null;
  Location?: string | null;
  name?: string;
  Orders?: UpdateUpdateManyWithoutEventsInput;
  Updated?: Date;
};
