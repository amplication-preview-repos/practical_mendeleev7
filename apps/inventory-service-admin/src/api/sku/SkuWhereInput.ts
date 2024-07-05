import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SkuWhereInput = {
  id?: StringFilter;
  partno?: StringNullableFilter;
  skuId?: IntNullableFilter;
  skuItemId?: StringNullableFilter;
  skuManuId?: StringNullableFilter;
};
