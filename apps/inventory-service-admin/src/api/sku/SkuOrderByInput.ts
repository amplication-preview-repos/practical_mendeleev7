import { SortOrder } from "../../util/SortOrder";

export type SkuOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  partno?: SortOrder;
  skuId?: SortOrder;
  skuItemId?: SortOrder;
  skuManuId?: SortOrder;
  updatedAt?: SortOrder;
};
