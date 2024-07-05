import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ModelWhereInput = {
  id?: StringFilter;
  modelCode?: StringNullableFilter;
  modelId?: IntNullableFilter;
  modelName?: StringNullableFilter;
};
