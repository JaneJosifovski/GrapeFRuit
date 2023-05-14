import { CompanyCreateNestedManyWithoutUpdatesInput } from "./CompanyCreateNestedManyWithoutUpdatesInput";
import { Company } from "../company/Company";
import { EventCreateNestedManyWithoutUpdatesInput } from "./EventCreateNestedManyWithoutUpdatesInput";

export type UpdateCreateInput = {
  Company?: CompanyCreateNestedManyWithoutUpdatesInput;
  Description?: string | null;
  product?: EventCreateNestedManyWithoutUpdatesInput;
  quantity?: number | null;
  totalPrice?: number | null;
};
