import { SortOrder } from "../../util/SortOrder";

export type PartOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  partCode?: SortOrder;
  partId?: SortOrder;
  partName?: SortOrder;
  updatedAt?: SortOrder;
};
