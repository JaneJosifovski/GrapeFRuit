import { UpdateCreateNestedManyWithoutEventsInput } from "./UpdateCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  Added: Date;
  Description?: string | null;
  Location?: string | null;
  name: string;
  Orders?: UpdateCreateNestedManyWithoutEventsInput;
  Updated: Date;
};
