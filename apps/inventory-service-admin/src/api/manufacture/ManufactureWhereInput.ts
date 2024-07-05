import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ManufactureWhereInput = {
  id?: StringFilter;
  manufactureCode?: StringNullableFilter;
  manufactureId?: IntNullableFilter;
  manufactureName?: StringNullableFilter;
};
