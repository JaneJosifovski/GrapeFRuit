import { CompanyUpdateManyWithoutUpdatesInput } from "./CompanyUpdateManyWithoutUpdatesInput";
import { Company } from "../company/Company";
import { EventUpdateManyWithoutUpdatesInput } from "./EventUpdateManyWithoutUpdatesInput";

export type UpdateUpdateInput = {
  Company?: CompanyUpdateManyWithoutUpdatesInput;
  Description?: string | null;
  product?: EventUpdateManyWithoutUpdatesInput;
  quantity?: number | null;
  totalPrice?: number | null;
};
