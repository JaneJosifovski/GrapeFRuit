import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UpdateListRelationFilter } from "../update/UpdateListRelationFilter";

export type EventWhereInput = {
  Description?: StringNullableFilter;
  id?: StringFilter;
  Location?: StringNullableFilter;
  name?: StringFilter;
  Orders?: UpdateListRelationFilter;
};
