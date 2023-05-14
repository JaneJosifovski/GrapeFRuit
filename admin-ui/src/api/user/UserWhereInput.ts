import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserWhereInput = {
  ddd?: StringNullableFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: IntNullableFilter;
  username?: StringFilter;
};
