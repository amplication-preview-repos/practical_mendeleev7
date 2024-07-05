import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PartWhereInput = {
  id?: StringFilter;
  partCode?: StringNullableFilter;
  partId?: IntNullableFilter;
  partName?: StringNullableFilter;
};
