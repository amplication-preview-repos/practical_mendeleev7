import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ItemWhereInput = {
  id?: StringFilter;
  itemCode?: StringNullableFilter;
  itemId?: IntNullableFilter;
  itemModel?: StringNullableFilter;
  itemModelId?: StringNullableFilter;
  itemPart?: StringNullableFilter;
  itemPartId?: StringNullableFilter;
};
