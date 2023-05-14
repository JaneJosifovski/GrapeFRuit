import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { Company } from "../company/Company";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UpdateWhereInput = {
  Company?: CompanyListRelationFilter;
  Description?: StringNullableFilter;
  id?: StringFilter;
  product?: EventListRelationFilter;
  quantity?: IntNullableFilter;
  totalPrice?: IntNullableFilter;
};
