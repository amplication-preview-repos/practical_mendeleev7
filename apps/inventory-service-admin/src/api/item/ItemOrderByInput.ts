import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemCode?: SortOrder;
  itemId?: SortOrder;
  itemModel?: SortOrder;
  itemModelId?: SortOrder;
  itemPart?: SortOrder;
  itemPartId?: SortOrder;
  updatedAt?: SortOrder;
};
