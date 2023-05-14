import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UpdateListRelationFilter } from "../update/UpdateListRelationFilter";

export type CompanyWhereInput = {
  address?: AddressWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: UpdateListRelationFilter;
  phone?: StringNullableFilter;
};
